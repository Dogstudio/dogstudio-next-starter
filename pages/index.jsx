import React from 'react';

// Next.js
import Head from 'next/head';

// Layout
import DefaultLayout from 'components/templates/DefaultLayout';

// Page Component
const Home = () => (
  <DefaultLayout>
    <Head>
      <title>Home | Dogstudio</title>
    </Head>

    <h1>Hello World!</h1>
  </DefaultLayout>
);

// Export Pure Component
export default React.memo(Home);
