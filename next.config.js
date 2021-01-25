const path = require('path');

// Plugins
const WorkerPlugin = require('worker-plugin');

// Extensions
const withImages = require('next-images');

module.exports = withImages({
  // Locales Options
  i18n: {
    locales: ['en', 'fr'],
    localeDetection: true,
    defaultLocale: 'en'
  },

  // Images Options
  images: {
    deviceSizes: [
      320,
      450,
      600,
      768,
      1024,
      1160,
      1440
    ]
  },

  // SASS Options
  sassLoaderOptions: {
    includePaths: [
      path.join(__dirname),
      path.join(__dirname, 'src')
    ]
  },

  // Images Options
  fileExtensions: ['jpg', 'jpeg', 'png', 'svg', 'gif', 'ico', 'webp', 'jp2', 'avif'],
  inlineImageLimit: false,

  // Extend Webpack Configuration
  webpack(config) {
    // Variables
    const name = '[name].[hash].[ext]';

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
            publicPath: '/_next/static/media'
          }
        }
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
              transform: ['glslify-import']
            }
          }
        ]
      }
    ];

    // Plugins
    const plugins = [
      // Enable Web Workers
      new WorkerPlugin({
        globalObject: 'self'
      })
    ];

    // Add Loaders
    for (const rule of rules) {
      config.module.rules.push(rule);
    }

    // Add Plugins
    for (const plugin of plugins) {
      config.plugins.push(plugin);
    }

    // Resolve Extensions
    config.resolve.extensions.push('.css');
    config.resolve.extensions.push('.sass');
    config.resolve.extensions.push('.scss');
    config.resolve.extensions.push('.json');

    // Resolve Modules
    config.resolve.modules.push('.');
    config.resolve.modules.push('src');

    // Return Configuration
    return config;
  }
});
