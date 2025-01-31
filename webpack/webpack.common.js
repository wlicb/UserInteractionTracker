const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const srcDir = path.join(__dirname, '..', 'src')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    popup: path.join(srcDir, 'popup.ts'),
    background: path.join(srcDir, 'background.ts'),
    content_script: path.join(srcDir, 'content_script.ts'),
    injected: path.join(srcDir, 'injected.ts')
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [{ from: '.', to: '../', context: 'public' }]
    })
  ]
}
