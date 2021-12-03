import React from 'react';

// Next.js
import Head from 'next/head';

// Layout
import DefaultLayout from 'components/templates/DefaultLayout';

// Page Component
const Custom404 = () => (
  <DefaultLayout>
    <Head>
      <title>404 | Dogstudio</title>
    </Head>

    <p>404 - Error</p>
  </DefaultLayout>
);

// Export Pure Component
export default React.memo(Custom404);
