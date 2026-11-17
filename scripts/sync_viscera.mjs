import { readFile, mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const areas = JSON.parse(
  await readFile(resolve(root, "common/data/json/areas.json"), "utf8"),
);
const languages = { en: "us", "zh-CN": "cn", "zh-TW": "tw" };

// The Viscera list has a few location errors. Use the actual world-area IDs.
// Evidence: https://poedb.tw/us/The_Wetlands
//           https://poedb.tw/us/The_Harbour_Bridge
//           https://poedb.tw/us/The_Hidden_Underbelly
//           https://poedb.tw/us/The_Rotting_Core (The Black Heart is its arena).
const areaOverrides = {
  Bandit_Warriors_Head: "1_2_12",
  Solar_Shield: "2_8_13",
  Crescent_Blade: "2_8_13",
  Smugglers_Hand: "2_8_14",
  Inquisitors_Head: "2_9_10_2",
};

function plain(html) {
  return html
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .trim();
}

export function parseViscera(html) {
  const items = new Map();
  const rows = html
    .split('<div class="col"><div class="d-flex border-top rounded">')
    .slice(1);
  if (rows.length < 100)
    throw new Error("Unexpected PoEDB Viscera page structure");
  for (const row of rows) {
    const title = row.match(
      /<div class="flex-grow-1 ms-2"><a[^>]*href="([^"]+)"[^>]*>([^<]*)<\/a>/,
    );
    if (!title) throw new Error("Viscera item title missing");
    const drops = [...row.matchAll(/<div class="property">(.*?)<\/div>/gs)]
      .map((m) => plain(m[1]).match(/^Drop: Act (\d+), (.*), ([^,]+)$/))
      .filter(Boolean)
      .map((m) => ({ act: Number(m[1]), boss: m[2], area: m[3] }));
    if (drops.length === 0) continue;
    const mods = [
      ...row.matchAll(/<div class="explicitMod">(.*?)<\/div>/gs),
    ].map((m) => plain(m[1]));
    const low = mods.filter((mod) => mod.startsWith("Low: "));
    const tier = low.length > 0 ? "Low" : "Untiered";
    // Untiered campaign drops are included; never fall back to Med/High/Queen.
    const effects =
      low.length > 0
        ? low.map((mod) => mod.slice(5))
        : mods.filter((mod) => !/^(?:Med|High|Queen):/.test(mod));
    if (effects.length === 0)
      throw new Error(`No campaign effect for ${title[1]}`);
    const item = items.get(title[1]);
    if (item) {
      if (
        JSON.stringify(item.drops) !== JSON.stringify(drops) ||
        item.tier !== tier
      )
        throw new Error(`Conflicting variants for ${title[1]}`);
      item.effects.push(...effects);
    } else {
      items.set(title[1], { name: plain(title[2]), drops, tier, effects });
    }
  }
  return items;
}

const inputDirIndex = process.argv.indexOf("--input-dir");
const inputDir = inputDirIndex === -1 ? null : process.argv[inputDirIndex + 1];
const pages = Object.fromEntries(
  await Promise.all(
    Object.entries(languages).map(async ([locale, path]) => {
      let html;
      if (inputDir)
        html = await readFile(
          resolve(inputDir, `viscera-${path}.html`),
          "utf8",
        );
      else {
        const response = await fetch(`https://poedb.tw/${path}/Viscera`);
        if (!response.ok) throw new Error(`${locale}: HTTP ${response.status}`);
        html = await response.text();
      }
      return [locale, parseViscera(html)];
    }),
  ),
);

const result = {
  source: "https://poedb.tw/cn/Viscera",
  // Set this explicitly when refreshing to keep the checked-in snapshot reproducible.
  retrievedAt:
    process.env.VISCERA_RETRIEVED_AT ?? new Date().toISOString().slice(0, 10),
  areaOverrides,
  areas: {},
};
let dropCount = 0;
for (const [id, item] of pages.en) {
  for (let dropIndex = 0; dropIndex < item.drops.length; dropIndex++) {
    const drop = item.drops[dropIndex];
    const candidates = Object.values(areas).filter(
      (area) => area.act === drop.act && area.name === drop.area,
    );
    const areaId =
      areaOverrides[id] ?? (candidates.length === 1 ? candidates[0].id : null);
    if (!areaId || !areas[areaId])
      throw new Error(
        `Unmapped campaign drop: ${id}, Act ${drop.act}, ${drop.area}`,
      );
    const localized = {};
    for (const locale of ["zh-CN", "zh-TW"]) {
      const translated = pages[locale].get(id);
      if (
        !translated ||
        translated.tier !== item.tier ||
        translated.effects.length !== item.effects.length ||
        translated.drops.length !== item.drops.length
      )
        throw new Error(`Mismatched translation for ${id} (${locale})`);
      localized[locale] = {
        name: translated.name,
        boss: translated.drops[dropIndex].boss,
        effects: [...new Set(translated.effects)],
      };
    }
    (result.areas[areaId] ??= []).push({ id, tier: item.tier, ...localized });
    dropCount++;
  }
}
// Catch accidentally omitted localized campaign items as well.
for (const locale of ["zh-CN", "zh-TW"]) {
  if (pages[locale].size !== pages.en.size)
    throw new Error(`Campaign item count mismatch (${locale})`);
}
await mkdir(resolve(root, "web/src/data"), { recursive: true });
await writeFile(
  resolve(root, "web/src/data/viscera.json"),
  JSON.stringify(result, null, 2) + "\n",
);
console.log(
  `Wrote ${dropCount} campaign drops across ${Object.keys(result.areas).length} areas.`,
);
