const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  externals: [nodeExternals()],
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