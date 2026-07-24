import { persistentAtom } from ".";
import type { Locale } from "../i18n";

export const localeSelector = persistentAtom<Locale>("locale", "zh-CN", 0);
