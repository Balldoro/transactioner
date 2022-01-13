import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_common from "./translations/en/common.json";
import pl_common from "./translations/pl/common.json";
import { LANGUAGES } from "./types";

export const resources = {
  en: { common: en_common },
  pl: { common: pl_common },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    resources,
    fallbackLng: LANGUAGES.EN,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
