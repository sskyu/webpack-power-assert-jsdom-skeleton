import base from './_base';

const webpackConfig = Object.assign(base, {
  // custom configs on development
  devtool: 'source-map'
});

export default webpackConfig;
