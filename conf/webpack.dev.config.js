const merge = require('webpack-merge');
const webpack = require('webpack');
const findPortSync = require('find-port-sync');

const baseWebpackConfig = require('./webpack.base.config.js');

const port = findPortSync();

module.exports = merge(baseWebpackConfig, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dev',
        host: 'localhost',
        port,
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
