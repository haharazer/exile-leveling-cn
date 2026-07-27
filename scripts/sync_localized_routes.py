#!/usr/bin/env python3
"""Reorder an existing line-aligned Chinese route to match a newer English route."""

from __future__ import annotations

import argparse
import ctypes
import json
import re
import subprocess
from functools import lru_cache
from pathlib import Path


NEW_LINE_TRANSLATIONS = {
    "Kill {kill|Captain Fairgraves}, take {quest_text|Allflame}":
        "找到并击杀 {kill|费尔船长}，取得 {quest_text|永恒之焰}",
    "Take the {generic|Boat} ➞ {enter|1_1_4_1} #The Submerged Passage":
        "乘坐{generic|小船} ➞ {enter|1_1_4_1} #海潮地穴",
    "    #sub Go {dir|180} until you find the hanged Karui":
        "    #sub 向{dir|180}方向前进，直到找到被吊起的卡鲁人",
    "        #sub Interact with the switch just before the zig-zagging walls, go to the opposite side to access {generic|Hidden Gem: Facetor's Lens}":
        "        #sub 与锯齿形墙壁前的机关互动，前往另一侧取得 {generic|隐藏宝石：裁决之镜}",
    "    #sub Go {dir|45}":
        "    #sub 向{dir|45}方向前进",
    "        #sub Find and kill the pack of monster on the island {dir|225} for a {generic|Tattoo}":
        "        #sub 前往{dir|225}方向的小岛击杀怪物群，取得一个{generic|纹身}",
    "➞ {arena|Valley of the Fire Drinker}, kill {kill|Abberath, the Cloven One}":
        "➞ {arena|饮火者山谷}，击杀 {kill|裂蹄之神艾贝拉斯}",
    "        #sub Find the switch hidden behind {generic|Trial of Ascendancy Plaque} to access {generic|Hidden Gem: Quality}":
        "        #sub 找到藏在{generic|升华试炼石碑}后的机关，取得{generic|隐藏宝石：品质}",
    "Get {waypoint_get}":
        "获取 {waypoint_get}",
    "    #sub In the room with a central pit, look {dir|225} or {dir|45} for a side area containing a {generic|Corrupted Unique}":
        "    #sub 在中央有深坑的房间，向{dir|225}或{dir|45}寻找支路，取得一件{generic|腐化传奇物品}",
    "        #sub Look for the hidden switch halfway to {generic|Trial of Ascendancy Plaque} in the corner opposite the entrance to access {generic|Hidden Gem: Transfigured}":
        "        #sub 在通往{generic|升华试炼石碑}的途中，于入口对角寻找隐藏机关，取得{generic|隐藏宝石：变异}",
    "    #sub Look for a sewer grate leading to {arena|Refinery Tunnels}, it is attached to the cart tracks":
        "    #sub 寻找通往{arena|炼油厂隧道}的下水道井盖，它连接着车辙",
}


def git_lines(ref: str, path: str) -> list[str]:
    result = subprocess.run(
        ["git", "show", f"{ref}:{path}"],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    return result.stdout.splitlines()


def traditional_terms(path: Path) -> dict[str, str]:
    tw = json.loads((path / "zh-TW.json").read_text(encoding="utf-8"))
    return tw


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


GAME_FRAGMENT_PATTERN = re.compile(
    r"\{(kill|arena|quest_text|generic|reward_quest|reward_vendor)\|([^}|]+)"
)

ROUTE_ENTITY_OVERRIDES = {
    "Medicine Chest": "醫藥箱",
    "Glyph": "雕紋",
    "Chemist's Strongbox": "藥師的保險箱",
    "Golden Page": "黃金書頁",
}


def to_tw(
    line: str,
    english_line: str,
    tw_by_english: dict[str, str],
) -> str:
    chinese_matches = list(GAME_FRAGMENT_PATTERN.finditer(line))
    english_matches = list(GAME_FRAGMENT_PATTERN.finditer(english_line))
    if len(chinese_matches) == len(english_matches):
        for chinese_match, english_match in reversed(
            list(zip(chinese_matches, english_matches))
        ):
            english_value = english_match.group(2)
            chinese_value = chinese_match.group(2)
            traditional = ROUTE_ENTITY_OVERRIDES.get(
                english_value,
                tw_by_english.get(english_value),
            )
            if not traditional:
                traditional = traditional_chinese(chinese_value)
            start, end = chinese_match.span(2)
            line = line[:start] + traditional + line[end:]

    # A trailing route comment is normally a displayed area or quest name.
    # Replace it only when the matching English comment is an exact game-data key.
    # Broad replacements must not touch #sub prose: common words such as "斜坡"
    # can also be official names ("The Descent").
    if "#" in line and "#" in english_line:
        english_comment = english_line.split("#", 1)[1].strip()
        traditional_comment = tw_by_english.get(english_comment)
        if traditional_comment:
            comment_start = line.index("#") + 1
            remainder = line[comment_start:]
            leading_space = remainder[: len(remainder) - len(remainder.lstrip())]
            line = line[:comment_start] + leading_space + traditional_comment
    return line


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--base-ref", required=True)
    parser.add_argument("--translated-ref", required=True)
    parser.add_argument("--upstream-ref", default="upstream/main")
    parser.add_argument(
        "--game-i18n", type=Path, default=Path("web/src/i18n/game")
    )
    parser.add_argument(
        "--routes-root", type=Path, default=Path("common/data/routes")
    )
    args = parser.parse_args()

    cn_root = args.routes_root / "zh-CN"
    tw_root = args.routes_root / "zh-TW"
    cn_root.mkdir(parents=True, exist_ok=True)
    tw_root.mkdir(parents=True, exist_ok=True)
    tw_by_english = traditional_terms(args.game_i18n)
    lookup: dict[str, list[str]] = {}

    for act in range(1, 11):
        path = f"common/data/routes/act-{act}.txt"
        base = git_lines(args.base_ref, path)
        translated = git_lines(args.translated_ref, path)
        if len(base) != len(translated):
            raise RuntimeError(f"{path} is not line-aligned")
        for english, chinese in zip(base, translated):
            lookup.setdefault(english, []).append(chinese)

    for act in range(1, 11):
        path = f"common/data/routes/act-{act}.txt"
        upstream = git_lines(args.upstream_ref, path)

        localized: list[str] = []
        missing: list[str] = []
        for line in upstream:
            if line in NEW_LINE_TRANSLATIONS:
                localized.append(NEW_LINE_TRANSLATIONS[line])
            elif candidates := lookup.get(line):
                localized.append(candidates[0])
            else:
                missing.append(line)

        if missing:
            formatted = "\n".join(f"  {line}" for line in missing)
            raise RuntimeError(f"Missing translations in {path}:\n{formatted}")

        cn_text = "\n".join(localized) + "\n"
        (cn_root / f"act-{act}.txt").write_text(cn_text, encoding="utf-8")
        tw_text = (
            "\n".join(
                to_tw(line, english_line, tw_by_english)
                for line, english_line in zip(localized, upstream)
            )
            + "\n"
        )
        (tw_root / f"act-{act}.txt").write_text(tw_text, encoding="utf-8")
        print(f"act-{act}: {len(localized)} lines")


if __name__ == "__main__":
    main()
