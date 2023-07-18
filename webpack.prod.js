const baseConfig = require("./webpack.base");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  ...baseConfig({ mode: "production" }),
};
