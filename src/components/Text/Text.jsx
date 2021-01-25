import React from 'react';
import ClassNames from 'classnames'

// Styles
import Styles from './Text.module.scss';

const Text = ({ children }) => {
  const classes = ClassNames({
    [Styles['text-black']]: true,
    [Styles['text-white']]: false
  });

  return (
    <p className={classes}>{children}</p>
  );
};

// Track Re-Renders
Text.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Text);
