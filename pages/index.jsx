import React from 'react';
import Head from 'next/head';

// i18n
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Styles
import Styles from './index.module.scss';

// Page Component
const Home = () => {
  /**
   * i18n:
   */
  const { t } = useTranslation();

  /**
   * DOM:
   */
  return (
    <>
      <Head>
        <title>Home | Motley Crowd</title>
      </Head>

      <div className={Styles['page']}>
        <h1>{t('Hello World!')}</h1>
      </div>
    </>
  );
};

// Load Translations
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

// Track Re-Renders
Home.whyDidYouRender = false;

// Export Pure Component
export default React.memo(Home);
