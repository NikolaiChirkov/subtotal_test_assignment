const baseConfig = require("./webpack.base");

module.exports = {
  mode: "development",
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
  },
  ...baseConfig({ mode: "develompment" }),
};
