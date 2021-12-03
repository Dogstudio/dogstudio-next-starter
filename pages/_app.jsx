// Browser / Server Imports
import 'on-server';
import 'on-browser';

// Next.js / React
import Head from 'next/head';

// React Components
import Grid from 'components/molecules/Grid';
import Main from 'components/organisms/Main';

// Global Styles
import 'styles/global';

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
);

export default CustomApp;
