const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    entry: "./src/index.jsx",

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].js',
        publicPath: ""
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html"
            }
        ),
       
    ]
}
