const baseConfig = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = Object.assign(
  {},
  baseConfig,
  {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
            sourceMap: true
          },
        }),
      ],
    }
  }
);