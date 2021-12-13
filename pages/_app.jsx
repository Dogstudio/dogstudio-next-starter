// Browser / Server Imports
import 'on-server'
import 'on-browser'

// Next.js
import Head from 'next/head'

// React Components
import Main from 'components/Main'
import Grid from 'components/Grid'

// Global Styles
import 'styles/global'

// Custom Application
const CustomApp = ({ Component, pageProps }) => (
  <>
    <Main>
      <Head>
        {/** See: https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no"
        />
      </Head>

      <Component {...pageProps} />
    </Main>

    <Grid />
  </>
)

export default CustomApp
