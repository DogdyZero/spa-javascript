const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: ['./src/js/index.js','./src/style/app.scss'], //location of your main js file
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'  // where js files would be bundled to
    },
    devServer: {
        contentBase: './dist' //where contents are served from
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // name of html file to be created
            template: './src/index.html' // source from which html file would be created
        }),
    ],
    externals: {
        moment: 'moment'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  presets: ['@babel/preset-env'],
                },
                // exclude: '/node_modules',
                // use: {
                //     loader: 'babel-loader',
                // }
                // query: { presets: ['es2015'] },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['./node_modules']
                            },
                            // Prefer Dart Sass
                            implementation: require('sass'),

                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter: false,
                        }
                    },
                ]
            }


        ]
    }
} 