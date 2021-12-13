import React from 'react'

// Next.js
import Head from 'next/head'

// Page Component
const Home = () => (
  <>
    <Head>
      <title>Home | Dogstudio</title>
    </Head>

    <h1>Hello World!</h1>
  </>
)

// Export Pure Component
export default React.memo(Home)
