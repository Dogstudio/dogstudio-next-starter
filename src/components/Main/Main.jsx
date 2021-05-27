import React from 'react';
import { useRouter } from 'next/router';

// Utils
import { DIR } from 'utils/constants';

// Styles
import Styles from './Main.module.scss';

// Component
const Main = ({ children }) => {
  /**
   * Router:
   */
  const { locale } = useRouter();

  /**
   * DOM:
   */
  return (
    <main
      dir={DIR(locale)}
      className={Styles['site-wrapper']}
    >
      {children}
    </main>
  );
};

// Track Re-Renders
Main.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Main);
