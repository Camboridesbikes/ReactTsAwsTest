const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify")
        }
    },
    entry : './out/App.js', 
    output : {
        path : path.resolve(__dirname, 'www/js'),
        filename : 'app.js'
    },
    externals : {
        "react" : 'React',
        "react-dom" : 'ReactDOM'
    }
}