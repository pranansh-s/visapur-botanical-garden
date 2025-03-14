import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../public/locales/en/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    partialBundledLanguages: true,
    resources: {
      en: {
        translation: enTranslation,
      },
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
