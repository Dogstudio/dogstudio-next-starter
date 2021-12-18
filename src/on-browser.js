// Constants
import { IS_BROWSER } from 'utils/constants'

// Load browser-only code
if (IS_BROWSER) {
  ;(async () => {
    // Utils
    await import('utils/say-hello')
  })()
}
