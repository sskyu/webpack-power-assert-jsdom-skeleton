import path from 'path';

export const src = path.resolve(__dirname, '../../src');
export const dist = path.resolve(__dirname, '../../dist');

export default {
  entry: [
    `${src}/js/index.js`
  ],
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: []
};
