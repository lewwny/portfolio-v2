import i18n, { t } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json'
import translationFR from './locales/fr.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        translation: translationFR
      },
      en: {
        translation: translationEN
      }
    }
  });

export default i18n;