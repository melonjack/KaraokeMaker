const path = require('path');

module.exports = {
    entry: [
        './src/app.js',
        // './src/index.js',
        './src/playlist.js'],

    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    }
};