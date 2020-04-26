const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const config = require('./webpack.config.js')

module.exports = merge(config, {
    mode: 'production',

    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin()
    ]
});