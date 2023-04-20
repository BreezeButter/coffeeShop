const path = require("path");
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


//IMPORT: our mode
const commonConfig = require('./webpack.config');


const devConfig = merge(commonConfig,{
    mode: 'production',
    /// if have alot of entry file --->"[name].[has`h].js"
    output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[hash].min.js",
    assetModuleFilename: "images/[hash][ext][query]",
  },

  //loader do it before code bundle
  module: {


    rules: [
       
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      
    ],
  },


   //plug-in after bundle
   plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "./src/template/index.html",
    // }),
  ],
///op
  optimization: {
    minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
    ],
    
},

});

///.min = minify remove all comment and whtiespace


module.exports = devConfig