const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
let build = require('./build');
let config = {
    mode: 'production',
    entry: build.entries,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "publishStatic/[name].bundle.[hash:7].js"
    },
    devtool: 'inline-source-map',//只有在开发的时候使用
    devServer: {
        contentBase: './dist',//根目录
        hot: true //热替换
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 1
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        //热替换依赖 start
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
        //热替换依赖 end
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};
build.templates().map(p => {
    config.plugins.push(
        new HtmlWebpackPlugin(p)
    )
});

module.exports = config;