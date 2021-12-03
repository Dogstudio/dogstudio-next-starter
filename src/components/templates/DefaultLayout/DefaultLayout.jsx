import React from 'react';

// Dependencies
import ClassNames from 'classnames';

// Styles
import Styles from './DefaultLayout.module.scss';

// Component
const DefaultLayout = ({ children, className }) => {
  /**
   * Dynamic Classnames:
   */
  const classNames = ClassNames(className, Styles['page-wrapper']);

  /**
   * DOM:
   */
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

// Export Pure Component
export default React.memo(DefaultLayout);
