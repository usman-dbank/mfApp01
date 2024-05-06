const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public/manifest.json' }, { from: 'public/favicon-32x32.png' }, { from: 'public/group.png' }]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', //replace it with 'server' to run it
      analyzerPort: 8888
    }),
    new webpack.BannerPlugin({
      banner: `Tools Component Library v0.0.1`
    }),
    new CleanWebpackPlugin()
  ],
  performance: {
    hints: 'warning',
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
    assetFilter: (asset) => {
      return /\.(js|css|png|jpe?g|gif|woff2?|ttf|otf)$/.test(asset.name);
    }
  }
};
