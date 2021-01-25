import React from 'react'

// Constants
import { IS_BROWSER } from 'utils/constants';

// WDYR Setup
if (process.env.NODE_ENV === 'development') {
  if (IS_BROWSER) {
    // Dependencies
    const whyDidYouRender = require('@welldone-software/why-did-you-render');

    // Call WDYR
    whyDidYouRender(React, { trackAllPureComponents: true });
  }
}
