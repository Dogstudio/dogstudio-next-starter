import Document, { Html, Head, Main, NextScript } from 'next/document';

// Custom Document
class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1' />

          {/** Primary Meta Tags */}
          <meta name='title' content='Next | Dogstudio' />
          <meta name='description' content='Next kit by Dogstudio' />

          {/** Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='http://localhost:3000' />
          <meta property='og:title' content='Next | Dogstudio' />
          <meta property='og:image' content='/assets/images/share-cover.png' />
          <meta property='og:description' content='Next kit by Dogstudio' />

          {/** Twitter */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='http://localhost:3000' />
          <meta property='twitter:title' content='Next | Dogstudio' />
          <meta
            property='twitter:description'
            content='Next kit by Dogstudio'
          />
          <meta
            property='twitter:image'
            content='/assets/images/share-cover.png'
          />

          {/** Touch Icon */}
          <link rel='apple-touch-icon' sizes='57x57' href='#' />
          <link rel='apple-touch-icon' sizes='76x76' href='#' />
          <link rel='apple-touch-icon' sizes='120x120' href='#' />
          <link rel='apple-touch-icon' sizes='152x152' href='#' />

          {/** Favicon */}
          <link rel='icon' type='image/png' href='/favicon.ico' />

          {/** Custom Fonts */}
          <link rel='stylesheet' href='/assets/fonts/fonts.css' />

          {/** Modernizr */}
          <script
            type='text/javascript'
            src='/vendors/modernizr.js'
            async
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
