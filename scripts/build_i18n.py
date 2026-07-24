#!/usr/bin/env python3
"""Build PoE 1 Simplified/Traditional Chinese name dictionaries from poe-trans-data."""

from __future__ import annotations

import argparse
import csv
import json
import subprocess
import ctypes
from functools import lru_cache
import re
from pathlib import Path


TABLES = (
    "areas.csv",
    "quests.csv",
    "npcs.csv",
    "monsters.csv",
    "quest_items.csv",
    "items.csv",
    "keywords.csv",
    "guide_entities.csv",
    "gems.csv",
)

LEGACY_DATA_FILES = (
    "common/data/json/areas.json",
    "common/data/json/gems.json",
    "common/data/json/quests.json",
)

LEGACY_TEXT_FILES = (
    "common/route-processing/fragment/language.ts",
)


def add_entry(
    output: dict[str, str],
    english: str | None,
    localized: str | None,
) -> None:
    if not english or not localized or english == localized:
        return
    output.setdefault(english.strip(), localized.strip())


def read_locale(source: Path, suffix: str) -> dict[str, str]:
    output: dict[str, str] = {}

    for filename in TABLES:
        path = source / filename
        if not path.exists():
            continue

        with path.open(encoding="utf-8-sig", newline="") as handle:
            for row in csv.DictReader(handle):
                add_entry(output, row.get("name_en"), row.get(f"name_{suffix}"))

                english_properties = (row.get("properties_en") or "").split("|")
                localized_properties = (
                    row.get(f"properties_{suffix}") or ""
                ).split("|")
                for english_property, localized_property in zip(
                    english_properties, localized_properties
                ):
                    if ":" not in english_property or ":" not in localized_property:
                        continue
                    english_values = english_property.split(":", 1)[1].split(",")
                    localized_values = localized_property.split(":", 1)[1].split(",")
                    for english, localized in zip(
                        english_values, localized_values
                    ):
                        add_entry(output, english, localized)

                # Area tables can contain a pipe-delimited boss list.
                english_bosses = (row.get("boss_names_en") or "").split("|")
                localized_bosses = (
                    row.get(f"boss_names_{suffix}") or ""
                ).split("|")
                for english, localized in zip(english_bosses, localized_bosses):
                    add_entry(output, english, localized)

    return dict(sorted(output.items(), key=lambda item: item[0].casefold()))


def git_json(ref: str, path: str) -> object:
    result = subprocess.run(
        ["git", "show", f"{ref}:{path}"],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    return json.loads(result.stdout)


def git_text(ref: str, path: str) -> str:
    result = subprocess.run(
        ["git", "show", f"{ref}:{path}"],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    return result.stdout


@lru_cache(maxsize=None)
def traditional_chinese(text: str) -> str:
    try:
        from opencc import OpenCC  # type: ignore

        converter = getattr(traditional_chinese, "_converter", None)
        if converter is None:
            converter = OpenCC("s2twp")
            setattr(traditional_chinese, "_converter", converter)
        return converter.convert(text)
    except ImportError:
        if not hasattr(ctypes, "windll"):
            return text
        flags = 0x04000000
        size = ctypes.windll.kernel32.LCMapStringEx(
            "zh-TW", flags, text, len(text), None, 0, None, None, 0
        )
        buffer = ctypes.create_unicode_buffer(size)
        ctypes.windll.kernel32.LCMapStringEx(
            "zh-TW", flags, text, len(text), buffer, size, None, None, 0
        )
        return buffer.value


def add_legacy_pairs(
    simplified: dict[str, str],
    traditional: dict[str, str],
    english_value: object,
    translated_value: object,
) -> None:
    if isinstance(english_value, str) and isinstance(translated_value, str):
        if english_value != translated_value:
            simplified.setdefault(english_value, translated_value)
            traditional.setdefault(
                english_value, traditional_chinese(translated_value)
            )
        return

    if isinstance(english_value, dict) and isinstance(translated_value, dict):
        for key in english_value.keys() & translated_value.keys():
            add_legacy_pairs(
                simplified,
                traditional,
                english_value[key],
                translated_value[key],
            )
        return

    if isinstance(english_value, list) and isinstance(translated_value, list):
        for english_item, translated_item in zip(
            english_value, translated_value
        ):
            add_legacy_pairs(
                simplified, traditional, english_item, translated_item
            )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--translation-root",
        type=Path,
        required=True,
        help="poe-trans-data/data/poe1/output directory",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("web/src/i18n/game"),
    )
    parser.add_argument("--base-ref")
    parser.add_argument("--translated-ref")
    args = parser.parse_args()

    args.output.mkdir(parents=True, exist_ok=True)
    locale_data = {
        "zh-CN": read_locale(args.translation_root, "zh"),
        "zh-TW": read_locale(args.translation_root, "tw"),
    }

    if args.base_ref and args.translated_ref:
        for path in LEGACY_DATA_FILES:
            add_legacy_pairs(
                locale_data["zh-CN"],
                locale_data["zh-TW"],
                git_json(args.base_ref, path),
                git_json(args.translated_ref, path),
            )
        for path in LEGACY_TEXT_FILES:
            english_strings = [
                json.loads(match)
                for match in re.findall(
                    r'"(?:\\.|[^"\\])*"', git_text(args.base_ref, path)
                )
            ]
            translated_strings = [
                json.loads(match)
                for match in re.findall(
                    r'"(?:\\.|[^"\\])*"',
                    git_text(args.translated_ref, path),
                )
            ]
            if len(english_strings) != len(translated_strings):
                raise RuntimeError(f"{path} is not string-aligned")
            add_legacy_pairs(
                locale_data["zh-CN"],
                locale_data["zh-TW"],
                english_strings,
                translated_strings,
            )

    for locale, data in locale_data.items():
        data = dict(sorted(data.items(), key=lambda item: item[0].casefold()))
        destination = args.output / f"{locale}.json"
        destination.write_text(
            json.dumps(data, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        print(f"{locale}: {len(data)} names -> {destination}")


if __name__ == "__main__":
    main()
