const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
/** @type {import('webpack').Configuration} */
const prodConfig = {
    mode: "development",
    devServer: {
        port: '3000',
        contentBase: "../dist",
        open: "brave",
        hot: true
    },
    target: "web",
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),],
    devtool: "eval-source-map",
    module: {
        rules: [{
            use: ["style-loader", "css-loader", "sass-loader"],
            test: /\.(css|sass|scss)$/
        },]
    }

}

module.exports = merge(common, prodConfig)