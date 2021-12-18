/**
 * Return the direction of the layout based on the languages of the user.
 *
 * @param {String} lang - Language used
 * @return {String} Layout direction
 */
export const getLanguageDirection = (lang) => {
  return ['ar', 'az', 'dv', 'he', 'ku', 'fa', 'ur'].includes(lang)
    ? 'rtl'
    : 'ltr'
}
