/*
 * @file webpack配置文件(开发环境)
 * @author horizon
 * @date 2017-09-24
 */
const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const port = 3000;

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        bundle: './src/index.jsx',
        vendor: ['react', 'react-dom', 'jquery', 'react-router', 'redux'],
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader?#sourceMap',
                    'less-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
        }),
        new OpenBrowserPlugin({
        url: `http://localhost:${port}`
    }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        compress: true, // 启用gzip压缩
        contentBase: path.join(__dirname, 'src'),
        port: port, // 运行端口3000
        inline: true,
        hot: true,
        historyApiFallback: true,
    },
};
