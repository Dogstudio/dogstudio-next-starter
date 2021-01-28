// See: https://lazertechnologies.com/blog/how-to-add-localization-to-your-nextjs-app
// Next i18n
const NextI18Next = require("next-i18next").default;

// Constants
const DEFAULT = process.env.NEXT_PUBLIC_I18N_DEFAULT || 'en';
const LANGUAGES = (process.env.NEXT_PUBLIC_I18N_LANGUAGES || 'en|fr').split('|');

// Server Configuration
module.exports = new NextI18Next({
  // See: https://www.i18next.com/overview/configuration-options
  fallbackLng: DEFAULT,
  nsSeparator: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false
  },

  // See: https://www.npmjs.com/package/next-i18next?activeTab=readme#options
  defaultNS: 'translation',
  defaultLanguage: DEFAULT,
  localePath: 'public/locales',
  localeStructure: '{{lng}}/{{ns}}',
  localeExtension: 'json',
  otherLanguages: LANGUAGES
});
