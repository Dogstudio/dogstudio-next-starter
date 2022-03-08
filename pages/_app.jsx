// Browser / Server Imports
import 'on-server'
import 'on-browser'

// Next.js
import Head from 'next/head'
import { useRouter } from 'next/router'

// Utilities
import { getLocaleDirection } from 'utils/helpers/language'

// Global Styles
import 'styles/global'

// Custom Application
const CustomApp = ({ Component, pageProps }) => {
  /**
   * Router:
   */
  const { locale } = useRouter()

  /**
   * DOM:
   */
  return (
    <>
      <main dir={getLocaleDirection(locale)} className="site-wrapper">
        <Head>
          {/** See: https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
        </Head>

        <Component {...pageProps} />
      </main>
    </>
  )
}

export default CustomApp
