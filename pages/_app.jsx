// WDYR
import 'wdyr';

// Browser / Server Imports
import 'on-server';
import 'on-browser';

// Next.js
import Head from 'next/head';

// Global Styles
import 'styles/global';

// Custom Application
const CustomApp = ({ Component, pageProps }) => {
  return (
    <main className='site-wrapper'>
      <Head>
        {/** See: https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no'
        />
      </Head>

      <Component {...pageProps} />
    </main>
  );
};

export default CustomApp;
