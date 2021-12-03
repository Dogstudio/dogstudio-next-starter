import React from 'react';

// Next.js
import Head from 'next/head';

// Layout
import DefaultLayout from 'components/templates/DefaultLayout';

// React Components
import Icon from 'components/atoms/Icon';

// Styles
import Styles from './index.module.scss';

// Page Component
const Home = () => (
  <DefaultLayout>
    <Head>
      <title>Home | Dogstudio</title>
    </Head>

    <h1>Hello World!</h1>

    <Icon name="apple" width={14} height={16} />
  </DefaultLayout>
);

// Export Pure Component
export default React.memo(Home);
