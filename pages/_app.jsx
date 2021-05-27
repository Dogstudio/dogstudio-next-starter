// Why Did You Render
// See: https://github.com/welldone-software/why-did-you-render#installation
import 'wdyr';

// Browser / Server Imports
import 'on-server';
import 'on-browser';

// i18n
import { appWithTranslation } from 'next-i18next';

// Next.js / React
import Head from 'next/head';

// React Components
import Main from 'components/Main';
import Grid from 'components/Grid';

// React Contexts
import { SampleProvider } from 'contexts/SampleContext';

// Global Styles
import 'styles/global';

// Custom Application
const CustomApp = ({ Component, pageProps }) => (
  <Main>
    <Head>
      {/** See: https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no"
      />
    </Head>

    <SampleProvider>
      <Component {...pageProps} />
    </SampleProvider>

    <Grid />
  </Main>
);

export default appWithTranslation(CustomApp);
