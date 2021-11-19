import React from 'react';

// Next.js
import Head from 'next/head';

import Icon from 'components/Icon';

// Page Component
const Home = () => (
  <>
    <Head>
      <title>Home | Dogstudio</title>
    </Head>

    <h1>Hello World!</h1>

    <Icon name="apple" width={14} height={16} />
  </>
);

// Export Pure Component
export default React.memo(Home);
