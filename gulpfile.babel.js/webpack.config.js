/*
 * @title Webpack Config
 */

// Dependencies
import webpack from "webpack";

// Config
import { paths } from "./config";

const path = require("path");

// Plugins
var WebpackNotifierPlugin = require("webpack-notifier");
var SVGSpriteMapPlugin = require("svg-spritemap-webpack-plugin");

const webpackConfig = {
  mode: process.env.NODE_ENV ? "production" : "development",

  entry: {
    main: paths.scripts.src,
  },
  output: {
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Inject les styles dans le DOM
          'css-loader',   // Charge les fichiers CSS
          'sass-loader'   // Compile le SCSS en CSS
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new SVGSpriteMapPlugin(paths.assets.icons, {
      output: {
        filename: `../assets/icons.svg`,
        svgo: {
          plugins: [
            "removeTitle",
            { name: "removeAttrs", params: { attrs: "(stroke|fill)" } },
          ],
        },
      },
      sprite: {
        prefix: "icon-",
      },
      styles: {
        keepAttributes: false,
      },
    }),
    new WebpackNotifierPlugin({
      skipFirstNotification: true,
    }),
  ],
};

if (process.env.NODE_ENV === "production") {
  // console.log('Welcome to production');
  webpackConfig.devtool = "source-map";
}
if (process.env.NODE_ENV === "development") {
  // console.log('Welcome to development');
  webpackConfig.devtool = "source-map";
}

module.exports = webpackConfig;

