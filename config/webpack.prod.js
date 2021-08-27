const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "production",
    devtool: "source-map",
    optimization: {
        splitChunks: { chunks: "all" },
        runtimeChunk: { name: "runtime" }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "./public/manifest.json", to: "" }
            ]
        })],
    module: {
        rules: [{
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            test: /\.(css|sass|scss)$/i

        }
        ]
    }

}

module.exports = merge([common, devConfig, { recordsPath: path.join(__dirname, "manifest.json") }])