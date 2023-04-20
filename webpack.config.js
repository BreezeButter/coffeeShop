
module.exports = {

  entry: {
    main: "./src/index.js",
    vendor: './src/vendor.js'
  },
  

  //loader do it before code bundle
  module: {


    rules: [
        {
            test: /\.html$/,
            use: ["html-loader"],
          },
      
    ],
  },

  
};
