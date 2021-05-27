// Constants
import { IS_BROWSER } from 'utils/constants';

// Load browser-only code
if (IS_BROWSER) {
  (async () => {
    // Utils
    await import('utils/say-hello');

    // Fetch Polyfill
    await import('whatwg-fetch');

    // Polyfills
    const ObjectFitImages = (await import('object-fit-images')).default;
    const ObjectFitVideos = (await import('object-fit-videos')).default;

    ObjectFitImages();
    ObjectFitVideos();
  })();
}
