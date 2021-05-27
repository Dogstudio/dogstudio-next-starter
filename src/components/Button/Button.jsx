import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

// Styles
import Styles from './Button.module.scss';

// Component
const Button = (props) => {
  /**
   * Properties:
   */
  const { className, tag, href, label, target, ...rest } = props;

  /**
   * Dynamic Classnames:
   */
  const classNames = ClassNames(className, 'button', {
    [Styles['button']]: true,
  });

  // Inside link
  if ((href && !target) || (href && target === '_self')) {
    return (
      <Link href={href}>
        <a
          {...rest}
          className={classNames}
        >
          {label}
        </a>
      </Link>
    );
  }

  // Outside link
  if (target && target !== '_self') {
    return (
      <a
        rel="noopener noreferrer"
        href={href}
        target={target}
        className={classNames}
        {...rest}
      >
        {label}
      </a>
    );
  }

  /**
   * DOM:
   */
  const TAG = tag;

  return (
    <TAG
      {...rest}
      className={classNames}
    >
      {label}
    </TAG>
  );
};

// Properties Schema
Button.propTypes = {
  /**
   * What's the component's tag?
   */
  tag: PropTypes.string,
  /**
   * What's the component's href?
   */
  href: PropTypes.string,
  /**
   * What's the component's label?
   */
  label: PropTypes.string,
  /**
   * What's the component's target?
   */
  target: PropTypes.string,
};

// Default Properties
Button.defaultProps = {
  tag: 'button',
  href: null,
  label: null,
  target: null,
};

// Track Re-Renders
Button.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Button);
