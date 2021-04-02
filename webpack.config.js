const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  plugins: [
    htmlPlugin,
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }
      ]
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf|otf)$/,
        loader: "file-loader",
        options: { name: '/static/[name].[ext]' }
      }
    ]
  }
};

styleLoaderRules = {
  dev: {
    test: /\.less$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'less-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },
  prod: {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader'
    ]
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'eval-source-map';
    config.module.rules.push(styleLoaderRules.dev);
  } else {
    config.module.rules.push(styleLoaderRules.prod);
  }
  return config;
};