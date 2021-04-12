import translationEN from "./locales/en/translation.json";
import translationKO from "./locales/ko/translation.json";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

const Languages = ['en', 'ko']

const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: 'en',
    debug: true,
    resources,
    whitelist: Languages,
    
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;