const path = require(`path`);
const {merge} = require(`webpack-merge`);
const common = require(`./webpack.common.js`);

module.exports = merge(common, {
  mode: `development`,
  devtool: `source-map`,
  output: {
    filename: `js/bundle.js`,
    path: path.resolve(__dirname, `public`),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, `public`),
    },
    open: true,
    port: 8000,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
});
