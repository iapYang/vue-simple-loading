const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config.js');

const jsFiles = glob.sync('./dev/component/src/*.js');

const entry = {};
jsFiles.forEach((file, i) => {
    entry[path.basename(file, '.js')] = file;
});

module.exports = merge(baseWebpackConfig, {
    entry,
    output: {
        path: path.join(process.cwd(), 'bundle'),
        filename: '[name].min.js',
        libraryTarget: 'umd',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true,
            },
        }),
    ],
});
