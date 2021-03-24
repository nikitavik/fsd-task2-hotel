const path =require("path")
const fs = require("fs")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
// const WriteFilePlugin = require('write-file-webpack-plugin')
const webpack = require("webpack")
const PAGES_DIR = path.resolve(__dirname, "src")
const PROD_DIR = path.resolve(__dirname, "src/pages")
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))
const PROD_PAGES = fs.readdirSync(PROD_DIR).filter(fileName => fileName.endsWith('.pug'))
// const Inputmask=(typeof(window)!="undefined")?require("inputmask"):{};

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
        contentBase: path.join(__dirname,"dist")

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
                { from: path.resolve(__dirname,"assets/img"), to: path.resolve(__dirname,"dist/img") },
            ],


        }),
        ...PAGES.map(page => new HTMLWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        })),
        ...PROD_PAGES.map(page => new HTMLWebpackPlugin({
            template: `${PROD_DIR}/${page}`,
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