const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.tsx",
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  module: {
    rules: [
      {
        //拡張子cssのファイル（正規表現）
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        //拡張子ts、tsxの場合
        test: /(\.ts|\.tsx)$/,
        //TypeScriptをコンパイルするためのts-loaderを使用
        use: "ts-loader",
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    //import文で.ts,.tsxファイルを指定できるようにする 書き方：拡張子を配列で指定する
    extensions: [".tsx", ".ts", ".js"],
  },
};