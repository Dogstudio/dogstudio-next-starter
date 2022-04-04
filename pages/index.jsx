import React from 'react'

// Next.js
import Head from 'next/head'

// Page Component
const Home = () => (
  <article className="home">
    <Head>
      <title>Home | Dogstudio</title>
    </Head>

    <h1>Hello World!</h1>
  </article>
)

// Export Pure Component
export default React.memo(Home)
