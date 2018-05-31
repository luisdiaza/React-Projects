const path = require('path'); //accesses the node path module

module.exports = { // a way way to expose things to another file
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),// absolute path on machine where you want to output webpack file
        filename: 'bundle.js'
    }
};
