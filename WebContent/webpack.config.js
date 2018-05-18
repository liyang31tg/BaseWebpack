const path = require("path");
let fs  = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
let build = require('./build');
let config = {
    mode: 'development',
    entry: build.entries,
    output: {
        path: path.resolve(__dirname,"..", build.dist),
        filename: "publishStatic/[name].bundle.[hash:7].js"
    },
    devtool: 'inline-source-map',//只有在开发的时候使用
    devServer: {
        contentBase: path.resolve(__dirname,"..", build.dist),//根目录
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
        new CleanWebpackPlugin([path.resolve("..",build.dist)]),
        new VueLoaderPlugin(),
        //热替换依赖 start
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //热替换依赖 end
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname,"src","static"),
            to: path.resolve(__dirname,"..", build.dist,"static")
        }])
    ],
    resolveLoader: {
            modules: [
                path.resolve('node_modules'),
            ]
        },

    module: {
        rules: [
           
             {
                 test: /\.js$/,
                 loader: 'babel-loader'
             },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
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
            },
             {
                 test: /\.vue$/,
                 loader:'vue-loader',
                 options:{
                     esModule: false//必须要
                 }

             },
            
        ]
    },

};
build.templates().map(p => {
    config.plugins.push(
        new HtmlWebpackPlugin(p)
    )
});
/*
*  {
        "vue": "Vue",
        "vue-router": "VueRouter"
    }
    将一些资源用cdn引入，而不是一味全部用webpack打包引入，'vue'是资源名，'Vue'对应引入的全局变量
* */
config.externals = build.externals();

module.exports = config;
