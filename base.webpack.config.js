const alias = require('./aliases.config.js'),
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9421
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias : {
            ...alias
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                  use: [{
                    loader: "style-loader"
                  }, {
                    loader: "css-loader" 
                  }, {
                    loader: "sass-loader"
                  }]
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
        new CopyWebpackPlugin([
            { from: './node_modules/react-dom/umd/react-dom.development.js', to: 'js' },
            { from: './node_modules/react/umd/react.development.js' , to: 'js'},
            { from: './src/static' }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        dns: 'empty',
        tls: 'empty'
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}
