/**
 * Return the direction of the layout based on the active locale
 *
 * @param {String} locale - Active locale
 * @return {String} Layout direction
 */
export const getLocaleDirection = (lang) => {
  return ['ar', 'az', 'dv', 'he', 'ku', 'fa', 'ur'].includes(lang)
    ? 'rtl'
    : 'ltr'
}
