import assert from "node:assert/strict";
import { test } from "node:test";
import { Data } from "common";
import snapshot from "../src/data/viscera.json" with { type: "json" };

test("snapshot includes localized LOW and untiered effects in all ten acts", () => {
  const acts = new Set<number>();
  let count = 0;
  for (const [areaId, drops] of Object.entries(snapshot.areas)) {
    const area = Data.Areas[areaId];
    assert.ok(area, areaId);
    assert.equal(area.is_town_area, false);
    acts.add(area.act);
    assert.equal(new Set(drops.map((drop) => drop.id)).size, drops.length);
    for (const drop of drops) {
      assert.ok(["Low", "Untiered"].includes(drop.tier));
      for (const locale of ["zh-CN", "zh-TW"] as const) {
        assert.ok(drop[locale].boss);
        assert.ok(drop[locale].effects.length);
        assert.ok(
          drop[locale].effects.every(
            (effect) =>
              effect && !/<[^>]+>|(?:Low|Med|High|Queen):/.test(effect),
          ),
        );
      }
      count++;
    }
  }
  assert.equal(count, 128);
  assert.equal(Object.keys(snapshot.areas).length, 122);
  assert.deepEqual(
    [...acts].sort((a, b) => a - b),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  );
  assert.equal(
    snapshot.areas["1_1_2"][0]["zh-CN"].effects[0],
    "有 (10—15)% 的几率点燃",
  );
  assert.equal(
    snapshot.areas["1_1_7_2"][0]["zh-CN"].effects[0],
    "+(30—50) 最大生命",
  );
  assert.equal(snapshot.areas["1_2_12"][0].id, "Bandit_Warriors_Head");
  assert.equal(snapshot.areas["2_8_13"].length, 2);
  assert.equal(snapshot.areas["2_8_14"][0].id, "Smugglers_Hand");
  assert.equal(snapshot.areas["1_2_14_3"][0].tier, "Untiered");
  assert.equal(snapshot.areas["1_2_14_3"][0]["zh-CN"].effects.length, 3);
  assert.equal(snapshot.areas["2_6_10"].length, 3);
  assert.equal(snapshot.areas["2_9_10_2"].length, 3);
  assert.equal(snapshot.areas["1_4_3_2"].length, 2);
  const ids = Object.values(snapshot.areas)
    .flat()
    .map((drop) => drop.id);
  assert.ok(
    !ids.includes("Severed_Scythe-hand"),
    "No explicit campaign location: omitted",
  );
  assert.ok(
    !ids.includes("Calcified_Leg"),
    "Map name without campaign act: omitted",
  );
});
