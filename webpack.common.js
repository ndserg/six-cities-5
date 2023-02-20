const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  entry: `./src/index.js`,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `public`, `index.html`),
      filename: `index.html`,
      inject: `body`,
      scriptLoading: `module`
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [`file-loader`]
      }
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
};
