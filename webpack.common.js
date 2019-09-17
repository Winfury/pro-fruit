const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "FRUIT",
            template: 'index.html',
        }),
        new VueLoaderPlugin(),
        // new CopyWebpackPlugin([{from:path.join(__dirname,"images"),to:path.join(__dirname,"dist/images")}])
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist/Scripts/game")
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules:
            [{
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            name:'images/[name].[ext]',
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(mp3|ogg)$/,
                loader: 'url-loader',
                options: {
                    name: 'sound/[name].[ext]',
                    limit: 1
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
            ]
    }
}