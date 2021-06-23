const path =require("path");
const fs = require("fs");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const PAGES_MAIN_DIR = path.resolve(__dirname, "src");
const PAGES_DIR = path.resolve(__dirname, "src/pages");
const PAGES_MAIN = fs.readdirSync(PAGES_MAIN_DIR)
    .filter(fileName => fileName
        .endsWith(".pug"));
const PAGES = fs.readdirSync(PAGES_DIR)
    .filter(fileName => fileName
        .endsWith(".pug"));

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

const filename = ext =>
  isDevelopment ?
    `bundle.${ext}` :
    `bundle.[hash].${ext}`;


module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ["@babel/polyfill", "./index.js"],
  devtool: isDevelopment ? "eval-source-map" : "hidden-source-map",
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      "@cards": path.resolve(__dirname, "src/components/form-elements/"),
      "@forms": path.resolve(__dirname, "src/components/cards/"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: !isDevelopment,
    hot: isDevelopment,
    port: 8080,
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename("css"),
      chunkFilename: filename("css"),
    }),
    new ESLintPlugin({

    }),
    // new WriteFilePlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "assets"),
          to: path.resolve(__dirname, "dist"),
        },
      ],


    }),
    ...PAGES_MAIN.map(page => new HTMLWebpackPlugin({
      template: `${PAGES_MAIN_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/, ".html")}`,
    })),
    ...PAGES.map(page => new HTMLWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/, ".html")}`,
    })),

  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
