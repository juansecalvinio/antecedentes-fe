const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ ENV_FILE }, argv ) => ({
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].[hash].bundle.js',
    publicPath: './'
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
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
      assets: path.resolve(__dirname, "src", "assets"),
      app: path.resolve(__dirname, "src", "app"),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...dotenv.config({ path: `./.env.${ENV_FILE}` }).parsed,
        NODE_ENV: argv.mode
      })
    }),
    new ManifestPlugin({
      fileName: './public/manifest.json',
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
   }),
   new MiniCssExtractPlugin({
     filename: 'css/[name].[hash].css',
     chunkFilename: 'css/[id].[hash].css'
   })
  ]
});