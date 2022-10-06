// Constants
import { IS_BROWSER } from 'utils/constants'

// Load browser-only code
if (IS_BROWSER) {
  ;(async () => {
    // Utils
    await import('utils/say-hello')

    // Resize
    // prettier-ignore
    const onResize = () => {
      document.documentElement.setAttribute('style', `--real-height: ${window.innerHeight}px`)
    }

    // Initial Resize
    onResize()

    // Window Events
    window.addEventListener('resize', onResize)
  })()
}
