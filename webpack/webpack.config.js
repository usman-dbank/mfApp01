const webpack = require('webpack');
const { merge } = require('webpack-merge');

const packageJson = require('../package.json');

const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);

  const config = merge(commonConfig, envConfig, {
    plugins: [
      new webpack.DefinePlugin({
        frontendVersion: JSON.stringify(packageJson.version)
      })
    ]
  });

  return config;
};
