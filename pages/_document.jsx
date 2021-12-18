// Next.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

// Custom Document
class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />

          {/** Primary Meta Tags */}
          <meta name="title" content="Dogstudio | Next.js Starter" />
          <meta
            name="description"
            content="Opinionated Next.js starter by Dogstudio"
          />

          {/** Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://localhost:3000" />
          <meta property="og:title" content="Dogstudio | Next.js Starter" />
          <meta property="og:image" content="/assets/images/share.png" />
          <meta
            property="og:description"
            content="Opinionated Next.js starter by Dogstudio"
          />

          {/** Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="http://localhost:3000" />
          <meta
            property="twitter:title"
            content="Dogstudio | Next.js Starter"
          />
          <meta
            property="twitter:description"
            content="Opinionated Next.js starter by Dogstudio"
          />
          <meta property="twitter:image" content="/assets/images/share.png" />

          {/** Favicon */}
          <link rel="icon" type="image/png" href="/favicon.ico" />

          {/** Modernizr */}
          <script type="text/javascript" src="/vendors/modernizr.js" async />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
