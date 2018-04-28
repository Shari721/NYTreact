module.exports = {

  entry: "./app/App.js",

  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
       include: /App/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devtool: "eval-source-map"
};