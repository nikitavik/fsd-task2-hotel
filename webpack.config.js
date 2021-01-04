const path =require("path")
const fs = require("fs")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const webpack = require("webpack");
const PAGES_DIR = path.resolve(__dirname, "src")
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: "./index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/dist',
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQueryL: 'jquery'
        }),
        new CleanWebpackPlugin(),
        new miniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname,"src/img"), to: path.resolve(__dirname,"dist/img") },
            ],
        }),
        ...PAGES.map(page => new HTMLWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        }))

    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader , "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["css-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use:["file-loader"]
            },
            {
                test: /\.pug$/,
                use:["pug-loader"]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
            }
        ]
    }
}