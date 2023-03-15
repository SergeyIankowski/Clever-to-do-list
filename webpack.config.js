const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const { NetlifyPlugin } = require("netlify-webpack-plugin");

const isDev = process.env.NODE_ENV == "development";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  devtool: isDev ? "inline-source-map" : undefined,
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    open: true,
    host: "localhost",
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new Dotenv(),
    new NetlifyPlugin({
      redirects: [
        {
          from: "/*",
          to: "/index.html",
          status: 200,
          force: false,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s|[ac]ss$/i,
        use: [
          isDev ? stylesHandler : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath) => resPath.includes(".module."),
                localIdentName: isDev
                  ? "[path][name]__[local]--[hash:base64:5]"
                  : "[hash:base64:8]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  performance: {
    maxAssetSize: 500000,
    maxEntrypointSize: 500000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isDev) {
    config.mode = "development";
  } else {
    config.mode = "production";
  }
  return config;
};
