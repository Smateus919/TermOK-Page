const Path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const { mainModule } = require('process')

module.exports = {
    entry: './src/pages/index.js',
    mode: 'development',
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'js/index.js'
    },
    resolve: {
        extensions:['.js']
    },
    devServer: {
        hot: true,
        open: true
    },
    module:{
        rules: [
            {
                test:/\.js?/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TermOK',
            inject: true,
            template: './public/index.html',
            filename: './dist/index.html'            
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}