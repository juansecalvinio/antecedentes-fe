const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv').config({ path: './.env.local' });
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/'

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack'
        ],
      },
      {
        test: /\.yml$/,
        use: ['json-loader', 'yaml-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [/\.js$/, /\.html$/, /\.json$/, /\.ejs$/],
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      },
    ],
    
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      assets: path.resolve(__dirname, "src", "assets"),
      app: path.resolve(__dirname, "src", "app"),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: '/.build',
    port: 3000,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed)
    }),
    new ManifestPlugin({
      fileName: './public/manifest.json',
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
   })
  ]
};