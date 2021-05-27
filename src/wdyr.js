import React from 'react';

// Constants
import { PROD, IS_BROWSER } from 'utils/constants';

// WDYR Setup
if (PROD === false && IS_BROWSER) {
  // Dependencies
  const whyDidYouRender = require('@welldone-software/why-did-you-render');

  // Call WDYR
  whyDidYouRender(React, { trackAllPureComponents: true });
}
