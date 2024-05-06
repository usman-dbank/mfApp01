const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const { micro_fe_path_prefix } = require('../public/manifest.json');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    devMiddleware: {
      publicPath: `/${micro_fe_path_prefix}`
    },
    static: {
      directory: path.join(__dirname, '..', 'public'),
      publicPath: `/${micro_fe_path_prefix}`
    },
    historyApiFallback: { index: `/${micro_fe_path_prefix}/index.html` },
    hot: true,
    open: [`/${micro_fe_path_prefix}/`],
    client: {
      overlay: false
    },
    compress: true,
    port: 3002
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new ReactRefreshWebpackPlugin() // Add this line
  ]
};
