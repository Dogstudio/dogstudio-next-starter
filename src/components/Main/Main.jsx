import React from 'react';

// Styles
import Styles from './Main.module.scss';

// Component
const Main = ({ children }) => (
  <main className={Styles['site-wrapper']}>
    {children}
  </main>
);

// Track Re-Renders
Main.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Main);
