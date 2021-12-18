import React from 'react'

// Next.js
import { useRouter } from 'next/router'

// Constants
import { DEFAULT_GRID_GUTTER, DEFAULT_GRID_COLUMNS } from 'utils/constants'

// Styles
import Styles from './Grid.module.scss'

// Component
const Grid = () => {
  /**
   * Router:
   */
  const { query } = useRouter()

  /**
   * Constants:
   */
  const DEBUG_GRID = query.debug === 'grid'
  const DEBUG_GRID_GUTTER = query.gutter || DEFAULT_GRID_GUTTER
  const DEBUG_GRID_COLUMNS = query.columns || DEFAULT_GRID_COLUMNS

  /**
   * DOM:
   */
  return (
    DEBUG_GRID && (
      <div className={Styles['grid']}>
        <div className={Styles['grid__inner']}>
          {(() => {
            const columns = []

            for (let i = 0; i < DEBUG_GRID_COLUMNS; i += 1) {
              // Styles
              const style = {
                marginLeft: 0,
                marginRight: 0,
              }

              if (i !== 0 && DEBUG_GRID_GUTTER) {
                style.marginLeft = `${DEBUG_GRID_GUTTER}px`
              }

              // DOM
              columns.push(
                <span
                  key={i}
                  style={style}
                  className={Styles['grid__column']}
                />
              )
            }

            return columns
          })()}
        </div>
      </div>
    )
  )
}

// Export Pure Component
export default React.memo(Grid)
