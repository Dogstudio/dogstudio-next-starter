import React from 'react'

// Next.js
import Head from 'next/head'

// Page Component
const Custom404 = () => (
  <>
    <Head>
      <title>404 | Dogstudio</title>
    </Head>

    <p>Error 404</p>
  </>
)

// Export Pure Component
export default React.memo(Custom404)
