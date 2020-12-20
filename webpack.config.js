const path =require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const miniCss= require("mini-css-extract-plugin")
module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "index.pug",
            inject: true
        }),
        new CleanWebpackPlugin(),
        new miniCss({
            filename: "style.css"
        })

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["miniCss.loader", "css-loader", "sass-loader"]
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