var path = require('path');
module.exports = {
    entry: path.join(process.cwd(), 'client/index.js'),
    output: {
        path: './public/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
}