const merge = require('webpack-merge')
const config = require('./webpack.config.js')

module.exports = merge(config, {
    mode: 'development',

    devServer: {
        open: true
    },

    devtool: 'source-map'
});