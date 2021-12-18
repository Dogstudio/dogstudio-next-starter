import React from 'react'

// Next.js
import { useRouter } from 'next/router'

// Helpers
import { getLanguageDirection } from 'utils/helpers/language'

// Styles
import Styles from './Main.module.scss'

// Component
const Main = ({ children }) => {
  /**
   * Router:
   */
  const { locale } = useRouter()

  /**
   * DOM:
   */
  return (
    <main dir={getLanguageDirection(locale)} className={Styles['site-wrapper']}>
      {children}
    </main>
  )
}

// Export Pure Component
export default React.memo(Main)
