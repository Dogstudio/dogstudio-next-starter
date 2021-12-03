import React from 'react';
import ClassNames from 'classnames';

// Styles
import Styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children, className}) => {
  return (
    <div className={ClassNames(className, Styles['page-wrapper'])}>
      {children}
    </div>
  )
}

// Export Pure Component
export default React.memo(DefaultLayout);
