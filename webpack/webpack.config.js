const path = require('path');
const fs = require('fs');

const externals = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    externals[mod] = `commonjs ${mod}`;
  });

module.exports = {
  externals,
  context: path.resolve('./src'),
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'node',
  entry: {
    index: './index.ts',
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        exclude: [path.resolve(__dirname, '..', 'node_modules')],
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
    ],
  },
};