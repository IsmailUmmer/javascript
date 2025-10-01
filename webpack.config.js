const path = require('path');

module.exports = {
  entry: 'C:/Users/ismail/OneDrive/Desktop/javascript/javascript/.vscode/npm/main.js', // Correct relative path to your entry file
  output: {
    path: path.resolve(__dirname, '.vscode/npm'), // Output to the npm folder
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool : "source-map"
};