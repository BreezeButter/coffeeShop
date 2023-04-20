///IMPORT: other mode
// const path = require("path");
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");

//IMPORT: our mode
const commonConfig = require('./webpack.config');


const devConfig = merge(commonConfig,{

   mode: 'development',
//     /// if have alot of entry file --->"[name].[hash].js"
//    output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].[hash].js",
//     assetModuleFilename: "images/[hash][ext][query]",
//   },

  //loader do it before code bundle
  module: {


    rules: [
       
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
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],


});


module.exports = devConfig