import HtmlWebpackPlugin from 'html-webpack-plugin';
import base, { src } from './_base';

const webpackConfig = Object.assign(base, {
  // custom configs on development
  devtool: 'source-map'
});

webpackConfig.plugins.push(
  new HtmlWebpackPlugin({
    template: `${src}/index.html`,
    filename: 'index.html'
  })
);

export default webpackConfig;
