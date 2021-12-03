import React from 'react';

// Next.js
import Head from 'next/head';

// Layout
import DefaultLayout from 'components/templates/DefaultLayout';

// React Components
// Atoms
import Icon from 'components/atoms/Icon';

// Styles
import Styles from './index.module.scss';

// Page Component
const Styleguide = () => (
  <DefaultLayout className={Styles['styleguide']}>
    <Head>
      <title>Styleguide | Dogstudio</title>
    </Head>

    <section>
      <header className={Styles['styleguide__header']}>
        <h2>Icons</h2>
      </header>

      <article className={Styles['styleguide__article']}>
        <p className={Styles['styleguide__article-title']}>14px</p>

        <ul className={Styles['styleguide__icons-list']}>
          <li>
            <Icon name="apple" width={14} height={16} />
            <p>Apple</p>
          </li>
        </ul>
      </article>
    </section>
  </DefaultLayout>
);

// Export Pure Component
export default React.memo(Styleguide);
