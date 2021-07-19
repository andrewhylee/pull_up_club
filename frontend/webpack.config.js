const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  // mode is "XX" if you ran webpack like so: webpack watch --mode "XX" (v5 syntax)
  const mode = argv.mode || "development";
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./static/frontend"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    optimization: {
      minimize: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(mode),
        // This has effect on react lib size
      }),
    ],
  };
};

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "./static/frontend"),
//     filename: "[name].js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },
//   optimization: {
//     minimize: true,
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       "process.env.NODE_ENV": JSON.stringify("production"),
//       // This has effect on react lib size
//     }),
//   ],
// };
