/**
 * Return the direction of the layout based on the languages of the user.
 *
 * @param {String} lang - Language used
 * @return {String} Layout direction
 */
export const getLanguageDirection = (lang) => {
  const rtl = ['ar', 'az', 'dv', 'he', 'ku', 'fa', 'ur'];

  return rtl.indexOf(lang) !== -1
    ? 'rtl'
    : 'ltr';
};
