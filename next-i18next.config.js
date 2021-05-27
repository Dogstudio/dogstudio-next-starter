// Dependencies
const { boolean } = require('boolean');

// Constants
const DEFAULT = process.env.NEXT_PUBLIC_I18N_DEFAULT;
const LANGUAGES = process.env.NEXT_PUBLIC_I18N_LANGUAGES.split('|');
// Disable for Production in `.env.local`
const DEBUG = boolean(process.env.NEXT_PUBLIC_I18N_DEBUG || false);
const SAVE_MISSING = boolean(process.env.NEXT_PUBLIC_I18N_SAVE_MISSING || false);

module.exports = {
  i18n: {
    locales: LANGUAGES,
    localeDetection: true,
    defaultLocale: DEFAULT,
  },
  debug: DEBUG,
  saveMissing: SAVE_MISSING,
  saveMissingTo: 'current',
  saveMissingPlurals: true,
};
