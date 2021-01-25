import Head from 'next/head';
import React from 'react';

// React Components
import Text from 'components/Text';

// Styles
import Styles from './404.module.scss';

const Custom404 = () => {
  return (
    <div className={Styles['page']}>
      <Head>
        <title>404 | Dogstudio</title>
      </Head>

      <Text>404 - Error</Text>
    </div>
  );
};

// Track Re-Renders
Custom404.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Custom404);
