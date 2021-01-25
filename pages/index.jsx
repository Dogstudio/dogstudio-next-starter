import Head from 'next/head';
import React from 'react';

// i18n
import { useTranslation } from 'i18n';

// React Components
import Text from 'components/Text';

// Styles
import Styles from './index.module.scss';

const Home = () => {
  /** i18n */
  const { t } = useTranslation();

  /** DOM */
  return (
    <div className={Styles['page']}>
      <Head>
        <title>Next | Dogstudio</title>
      </Head>

      <Text>{t('Hello World!')}</Text>
    </div>
  );
};

// Track Re-Renders
Home.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Home);
