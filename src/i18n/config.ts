import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import pt from './locales/pt.json';

i18n
  .use(LanguageDetector) // Detecta a língua do browser
  .use(initReactI18next) // Passa o i18n para o react-i18next
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt }
    },
    lng: 'en',
    fallbackLng: 'en', // Se não detectar nada, vai de inglês
    interpolation: {
      escapeValue: false // React já protege contra XSS
    }
    
  });

export default i18n;