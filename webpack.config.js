const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
    assetModuleFilename: "images/[hash][ext][query]",
  },

  //loader do it before code bundle
  module: {
    rules: [
        {
            test: /\.html$/,
            use: ["html-loader"],
          },
      {
        test: /\.s?css$/i,
        use: [
          "style-loader", // append <link > in html
          "css-loader",
          "sass-loader", // allow import '.index.css'
        ],
      },
      
    ],
  },

  //plug-in after bundle
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],

  
};
