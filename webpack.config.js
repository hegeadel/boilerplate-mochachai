const path = require("path");

module.exports = {
  mode: "development", // Set to 'production' for production mode
  entry: "./public/client.js", // Specify the entry point of your application
  output: {
    filename: "bundle.js", // Specify the output file name
    path: path.resolve(__dirname, "build"), // Specify the output directory
  },
};
