const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'app', 'index.pug'),
  filename: 'index.html',
  inject: 'body'
})

const environment = process.env.NODE_ENV || 'production'

const paths = {
  ENTRY: path.join(__dirname, 'app', 'main.jsx'),
  OUTPUT_FILENAME: 'bundle.js',
  OUTPUT: path.join(__dirname, 'build', 'static'),
  APP: path.join(__dirname, 'app')
}

const config = {
  entry: [
    paths.ENTRY
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        enforce: 'pre',
        include: paths.APP,
        exclude: [/node_modules/, path.join(__dirname, 'build'), paths.OUTPUT],
        use: ['babel-loader', 'standard-loader']
      },
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: path.join(__dirname, 'public', 'css')
        })
      },
      { test: /\.pug$/,
        include: paths.APP,
        use: [
          { loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: paths.OUTPUT_FILENAME,
    path: paths.OUTPUT,
    chunkFilename: '[id].js'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        babel: {
          babelrc: true
        }
      }
    })
  ]
}

if (environment === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  )
}

module.exports = config
