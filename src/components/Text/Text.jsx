import React from 'react';

// Styles
import Styles from './Text.module.scss';

// Component
const Text = ({ children }) => {
  return <p className={Styles['text-black']}>{children}</p>;
};

// Track Re-Renders
Text.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Text);
