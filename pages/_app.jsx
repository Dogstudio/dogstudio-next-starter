// Why Did You Render
// See: https://github.com/welldone-software/why-did-you-render#installation
import 'wdyr';

// Browser / Server Imports
import 'on-server';
import 'on-browser';

// i18n
import i18n from 'i18n';

// Next.js / React
import Head from 'next/head';
import { useImmer } from 'use-immer';
import { useMount } from 'react-use';

// Global Styles
import 'styles/global';

// Custom Application
const CustomApp = ({ Component, pageProps }) => {
  /** Local State */
  const [state, mutate] = useImmer({ init: false });

  /** Lifecycle */
  useMount(() => {
    i18n?.initPromise?.then(() => {
      mutate((draft) => {
        draft.init = true;
      });
    });
  });

  /** DOM */
  return (
    state.init && (
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
    )
  );
};

export default CustomApp;
