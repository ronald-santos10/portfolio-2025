"use client";
import { type Locale, i18n } from "@/config/i18n.config";

import { defaultDictionary } from "./default-dicionaries";
import { interpolation } from "./interpolation";

export const getDictionaryUseClient = (locale: Locale) => {
  const dictionary =
    defaultDictionary[locale] ??
    defaultDictionary[i18n.defaultLocale as Locale];
  return { dictionary, interpolation };
};
