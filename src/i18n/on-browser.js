// See: https://lazertechnologies.com/blog/how-to-add-localization-to-your-nextjs-app
import { boolean } from 'boolean';

// Next i18n
import NextI18Next from 'next-i18next';

// React i18n
import { initReactI18next } from 'react-i18next';

// Translation Dependencies
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Constants
const DEBUG = boolean(process.env.NEXT_PUBLIC_I18N_DEBUG);
const DEFAULT = process.env.NEXT_PUBLIC_I18N_DEFAULT || 'en';
const LANGUAGES = (process.env.NEXT_PUBLIC_I18N_LANGUAGES || 'en|fr').split('|');
const SAVE_MISSING = boolean(process.env.NEXT_PUBLIC_I18N_SAVE_MISSING);

// Browser Configuration
const i18n = new NextI18Next({
  // Dependencies
  use: [
    Backend,
    LanguageDetector,
    initReactI18next
  ],

  // See: https://www.i18next.com/overview/configuration-options
  debug: DEBUG,
  fallbackLng: DEFAULT,
  saveMissing: SAVE_MISSING,
  nsSeparator: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false
  },

  // See: https://www.npmjs.com/package/next-i18next?activeTab=readme#options
  defaultNS: 'translation',
  defaultLanguage: DEFAULT,
  localePath: '/locales',
  localeStructure: '{{lng}}/{{ns}}',
  localeExtension: 'json',
  otherLanguages: LANGUAGES,

  // Detection
  detection: {
    // See: https://github.com/i18next/i18next-browser-languageDetector#detector-options
    order: ['path', 'htmlTag', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'subdomain'],

    // Next-i18next by default searches for the `next-i18next` cookie on server requests
    lookupCookie: 'next-i18next',
    lookupLocalStorage: 'i18nextLng',
    
    // Cache the language in cookies and local storage
    caches: ['cookie', 'localStorage']
  },

  // React Specifics
  react: {
    useSuspense: false
  }
});

// Methods
export const useTranslation = i18n.useTranslation;

// Default
export default i18n;
