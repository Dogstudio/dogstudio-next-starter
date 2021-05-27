import React from 'react';

// Styles
import Styles from './Grid.module.scss';

// Component
const Grid = () => (
  <div className={Styles['debug-grid']}>
    <div className={Styles['horizontal']}>
      <div className={Styles['color']} />

      <div className={Styles['left-side']}>
        <div className={Styles['color']} />
        <div className={Styles['color']} />
      </div>

      <div className={Styles['center']}>
        <div className={Styles['color']} />
        <div className={Styles['color']} />
        <div className={Styles['color']} />
      </div>

      <div className={Styles['right-side']}>
        <div className={Styles['color']} />
        <div className={Styles['color']} />
      </div>

      <div className={Styles['color']} />
    </div>

    <div className={Styles['vertical']}>
      <div className={Styles['color']} />

      <div className={Styles['center']}>
        <div className={Styles['color']} />
        <div className={Styles['color']} />
      </div>

      <div className={Styles['color']} />
    </div>
  </div>
);

// Track Re-Renders
Grid.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Grid);
