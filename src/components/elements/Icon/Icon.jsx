import React from 'react'

// Next.js
import dynamic from 'next/dynamic'

// Dependencies
import ClassNames from 'classnames'

// Component
const Icon = (props) => {
  /**
   * Properties:
   */
  const { className, name, width, height } = props

  /**
   * Dynamic Import:
   */
  const Component = dynamic(() => import(`./Icons/icon-${name}.jsx`), {
    ssr: false,
  })

  /**
   * Dynamic Classnames:
   */
  const classNames = ClassNames(className, 'svg', `svg--${name}`)

  /**
   * Inline CSS:
   */
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
  }

  /**
   * DOM:
   */
  return (
    Component && (
      <span style={styles} className={classNames}>
        <Component width={width} height={height} />
      </span>
    )
  )
}

// Export Pure Component
export default React.memo(Icon)
