import dynamic from 'next/dynamic';

// Constants
import { IS_BROWSER } from 'utils/constants';

// Load browser-only code
if (IS_BROWSER) {
  (async () => {
    await import('utils/say-hello');

    const ObjectFitImages = (await import('object-fit-images')).default;
    const ObjectFitVideos = (await import('object-fit-videos')).default;

    ObjectFitImages();
    ObjectFitVideos();
  })();
}
