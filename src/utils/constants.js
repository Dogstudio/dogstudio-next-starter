// Dependencies
import qs from 'query-string';
import UAParser from 'ua-parser-js';

// Server vs Browser
// See: https://github.com/vercel/next.js/issues/5354#issuecomment-520305040
export const IS_SERVER = typeof window === 'undefined';
export const IS_BROWSER = typeof window !== 'undefined';

// URL Queries
export const QUERIES = IS_BROWSER ? qs.parse(window.location.search) : {};

// Environment Constants
export const PROD = process.env.NODE_ENV !== 'development';
export const MODE = process.env.NEXT_PUBLIC_APP_MODE || 'app';
export const PREVIEW = process.env.NEXT_PUBLIC_APP_PREVIEW === 'true';

// Responsive Constants
export const BREAKPOINTS = {
  XXS: 320,
  XS: 450,
  S: 600,
  M: 768,
  L: 1024,
  XL: 1360,
  XXL: 1440,
};

// UA Constants
// UA Parser
const PARSER = new UAParser();

// Set UA Parser
if (IS_BROWSER) PARSER.setUA(navigator.userAgent);

export const OS = PARSER.getOS();
export const DEVICE = PARSER.getDevice();
export const BROWSER = PARSER.getBrowser();

export const IS_MOBILE = DEVICE.type === 'mobile';
export const IS_TABLET = DEVICE.type === 'tablet';

// i18n
export const DIR = (locale) => {
  const rtl = ['ar', 'az', 'dv', 'he', 'ku', 'fa', 'ur'];

  return rtl.indexOf(locale) !== -1
    ? 'rtl'
    : 'ltr';
};
