const path =require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: "./index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "index.pug",
            inject: true,
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

    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader , "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use:["file-loader"]
            },
            {
                test: /\.pug$/,
                use:["pug-loader"]
            },
        ]
    }
}