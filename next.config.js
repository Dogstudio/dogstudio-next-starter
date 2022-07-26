// Dependencies
const path = require('path')

// Extensions
const withImages = require('next-images')

// Constants
const DEFAULT = process.env.NEXT_PUBLIC_DEFAULT_LOCALE
const LOCALES = process.env.NEXT_PUBLIC_SUPPORTED_LOCALES.split('|')

// Configuration
const config = {
  // Locales Options
  i18n: {
    locales: LOCALES,
    localeDetection: true,
    defaultLocale: DEFAULT,
  },

  // Images Options
  images: {
    deviceSizes: [320, 450, 600, 768, 1024, 1340, 1440, 1920],
    disableStaticImages: true,
  },

  // SASS Options
  sassOptions: {
    includePaths: [path.join(__dirname), path.join(__dirname, 'src')],
  },

  // Extend Webpack Configuration
  webpack(_config, { webpack }) {
    // Variables
    const name = '[name].[hash].[ext]'

    // Loaders
    const rules = [
      // Medias
      {
        test: /\.(mp3|wav|ogg|mp4|webm|ogv)$/,
        use: {
          loader: 'file-loader',
          options: {
            name,
            outputPath: 'static/media/',
            publicPath: '/_next/static/media',
          },
        },
      },

      // Shaders
      {
        test: /\.(glsl|frag|vert)$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
          {
            loader: 'glslify-loader',
            options: {
              transform: ['glslify-import'],
            },
          },
        ],
      },
    ]

    // Plugins
    const plugins = []

    // Add Loaders
    /* eslint-disable-next-line */
    for (const rule of rules) {
      _config.module.rules.push(rule)
    }

    // Add Plugins
    /* eslint-disable-next-line */
    for (const plugin of plugins) {
      _config.plugins.push(plugin)
    }

    // Resolve Extensions
    _config.resolve.extensions.push('.css')
    _config.resolve.extensions.push('.sass')
    _config.resolve.extensions.push('.scss')
    _config.resolve.extensions.push('.json')

    // Resolve Modules
    _config.resolve.modules.push('.')
    _config.resolve.modules.push('src')

    // Result HMR Warnings
    // See: https://github.com/vercel/next.js/issues/19865#issuecomment-810738415
    const major = webpack.version.split('.')[0]

    if (major === '5') {
      _config.output.hotUpdateMainFilename =
        'static/webpack/[fullhash].[runtime].hot-update.json'
    }

    // Return Configuration
    return _config
  },
}

// Export Configuration
module.exports = withImages(config)
