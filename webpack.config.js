const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */

module.exports = {
    mode: 'production',
    entry: './src/pages/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    resolve:{
        extensions: ['.js']
    },
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}