const path = require('path')
const htmlWebPackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopmnet = process.env.NODE_ENV !== 'production'
module.exports = {
    mode: isDevelopmnet ? 'development' : 'production',
    devtool: isDevelopmnet ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx','.ts', '.tsx']
    },

    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true,
    },

    plugins: [
        isDevelopmnet && new ReactRefreshWebpackPlugin(),
        new htmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopmnet && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }

};