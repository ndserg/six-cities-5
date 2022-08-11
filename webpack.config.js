const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    path: path.join(__dirname, `public`),
    filename: `bundle.js`,
  },
  devtool: `source-map`,
  devServer: {
    static: {
      directory: path.join(__dirname, `public`),
      watch: true,
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
};
