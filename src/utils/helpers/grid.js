// Dependencies
import equal from 'fast-deep-equal'

class Grid {
  constructor(grid, toolbar) {
    this.root = grid
    this.toolbar = toolbar

    this.values = {}

    this.toggleEdges = this.toolbar.querySelector('#toggle-edges')
    this.toggleColumns = this.toolbar.querySelector('#toggle-columns')
    this.toggleGutters = this.toolbar.querySelector('#toggle-gutters')

    this.timeout = null
    this.timeoutDuration = 150

    // Init
    this.toggle('edges', this.toggleEdges.checked)
    this.toggle('columns', this.toggleColumns.checked)
    this.toggle('gutters', this.toggleGutters.checked)

    // Events
    this.toggleEdges.addEventListener('change', (e) =>
      this.toggle('edges', e.currentTarget.checked)
    )
    this.toggleColumns.addEventListener('change', (e) =>
      this.toggle('columns', e.currentTarget.checked)
    )
    this.toggleGutters.addEventListener('change', (e) =>
      this.toggle('gutters', e.currentTarget.checked)
    )
  }

  build() {
    const columns = Number(this.values['--grid-columns'])
    const gutters = Number(this.values['--grid-gutters'])

    this.root.innerHTML = ''

    for (let i = 0; i < columns; i++) {
      const el = document.createElement('div')

      el.id = `site-grid-column-${i}`
      el.className = `site-grid__column site-grid__column--${i}`

      this.root.append(el)
    }

    for (let i = 0; i < gutters; i++) {
      const el = document.createElement('div')
      const column = document.querySelector(`#site-grid-column-${i + 1}`)

      el.id = `site-grid-gutter-${i}`
      el.className = `site-grid__gutter site-grid__gutter--${i}`

      this.root.insertBefore(el, column)
    }

    const edge0 = document.createElement('div')
    const edge1 = document.createElement('div')

    edge0.id = 'site-grid-edge-0'
    edge0.className = 'site-grid__edge site-grid__edge--0'

    edge1.id = 'site-grid-edge-1'
    edge1.className = 'site-grid__edge site-grid__edge--1'

    this.root.append(edge1)
    this.root.prepend(edge0)
  }

  toggle(option, value) {
    switch (option) {
      case 'edges': {
        this.root.classList.toggle('site-grid--no-edges', !value)
        break
      }

      case 'columns': {
        this.root.classList.toggle('site-grid--no-columns', !value)
        break
      }

      case 'gutters': {
        this.root.classList.toggle('site-grid--no-gutters', !value)
        break
      }
    }
  }

  observe(el, variables) {
    const crawler = () => {
      const values = {}

      for (const variable of variables) {
        values[variable] = getComputedStyle(el).getPropertyValue(variable)
      }

      if (!equal(values, this.values)) {
        this.values = values
        this.build()
      }

      this.timeout ? clearTimeout(this.timeout) : null
      this.timeout = setTimeout(crawler, this.timeoutDuration)
    }

    crawler()
  }

  unobserve() {
    this.timeout ? clearTimeout(this.timeout) : null
    this.timeout = null
  }
}

export default Grid
