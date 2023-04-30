const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commontConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',  // not required for a "host" module
      remotes: {
        marketing: `marketing@http://${domain}/marketing/remoteEntry.js`,
        // dashboard: `dashboard@http://${domain}/dashboard/remoteEntry.js`,
        // auth: `auth@http://${domain}/auth/remoteEntry.js`,
      },
      shared: packageJson.dependencies
    }),
  ]
};

module.exports = merge(commontConfig, prodConfig);