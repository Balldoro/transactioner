import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_common from "./translations/en/common.json";
import pl_common from "./translations/pl/common.json";
import en_layout from "./translations/en/layout.json";
import pl_layout from "./translations/pl/layout.json";
import en_dashboard from "./translations/en/dashboard.json";
import pl_dashboard from "./translations/pl/dashboard.json";
import en_validations from "./translations/en/validations.json";
import pl_validations from "./translations/pl/validations.json";

import { LANGUAGES } from "./types";

export const resources = {
  en: {
    common: en_common,
    layout: en_layout,
    dashboard: en_dashboard,
    validations: en_validations,
  },
  pl: {
    common: pl_common,
    layout: pl_layout,
    dashboard: pl_dashboard,
    validations: pl_validations,
  },
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
