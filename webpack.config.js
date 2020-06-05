const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devtool: 'none',
    devServer: {
            contentBase: "public", //本地服务器所加载的页面所在的目录
            historyApiFallback: true, //不跳转
            inline: true,
            hot: true
        }
        ,
    watchOptions: {
            aggregateTimeout: 1000,
            poll: 10000 // Check for changes every 10 second
          },
    module: {
        rules: [
            { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]   
    }
};