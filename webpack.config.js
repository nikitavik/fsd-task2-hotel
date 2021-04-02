const path =require("path")
const fs = require("fs")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const webpack = require("webpack")
const PAGES_MAIN_DIR = path.resolve(__dirname, "src")
const PAGES_DIR = path.resolve(__dirname, "src/pages")
const PAGES_MAIN = fs.readdirSync(PAGES_MAIN_DIR).filter(fileName => fileName.endsWith('.pug'))
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: "./index.js",
    },
    devtool: false,
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '',
    },
    devServer: {
        overlay: true,
        contentBase: path.join(__dirname,"assets")

    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
            "window.jQuery":"jquery",
            "window.$": "jquery"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        // new WriteFilePlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname,"assets"), to: path.resolve(__dirname,"dist") },
            ],


        }),
        ...PAGES_MAIN.map(page => new HTMLWebpackPlugin({
            template: `${PAGES_MAIN_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        })),
        ...PAGES.map(page => new HTMLWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        }))

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    // "sass?sourceMap",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use:["file-loader"],
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