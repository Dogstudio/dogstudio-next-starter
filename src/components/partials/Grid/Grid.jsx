import React, { useRef, useState, useEffect, useCallback } from 'react'

// Dependencies
import ClassNames from 'classnames'

// Utils
import Helper from 'utils/helpers/grid'

// Component
const Grid = () => {
  /**
   * Local State:
   */
  const [state, mutate] = useState({
    showToolbar: true,
  })

  /**
   * References:
   */
  const grid = useRef(null)
  const toolbar = useRef(null)

  /**
   * Dynamic Classnames:
   */
  const classNames = ClassNames({
    'site-grid__toolbar': true,
    'site-grid__toolbar--hidden': !state.showToolbar,
  })

  /**
   * Methods:
   */
  const handleToolbarToggle = useCallback(() => {
    mutate({
      showToolbar: !state.showToolbar,
    })
  }, [mutate, state.showToolbar])

  /**
   * Lifecycle:
   */
  useEffect(() => {
    const Grid = new Helper(grid.current, toolbar.current)

    // Grid Observer
    Grid.observe(document.documentElement, ['--grid-columns', '--grid-gutters'])
  }, [])

  /**
   * DOM:
   */
  return (
    <section className="site-grid">
      <div ref={grid} className="site-grid__layout" />

      <div ref={toolbar} className={classNames}>
        <div className="site-grid__toolbar-inner">
          <div className="site-grid__toolbar-item">
            <input id="toggle-columns" type="checkbox" />
            <label htmlFor="toggle-columns">Show Columns</label>
          </div>

          <div className="site-grid__toolbar-item">
            <input id="toggle-gutters" type="checkbox" />
            <label htmlFor="toggle-gutters">Show Gutters</label>
          </div>

          <div className="site-grid__toolbar-item">
            <input id="toggle-edges" type="checkbox" />
            <label htmlFor="toggle-edges">Show Edges</label>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToolbarToggle}
          className="site-grid__toolbar-toggle"
        >
          <span className="u-visually-hidden">Toggle Toolbar</span>
        </button>
      </div>
    </section>
  )
}

// Export Pure Component
export default React.memo(Grid)
