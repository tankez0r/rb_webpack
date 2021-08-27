const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


/** @type {import('webpack').Configuration} */
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', 'sass']
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
                exclude: /node_modules/,
                test: /\.(png|svg|jpg|jpeg|gif|ico|json)$/i,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html",
                filename: './index.html',
                favicon: './public/favicon.ico',
                manifest: './public/manifest.json'

            }
        ),
      
    ]
}
