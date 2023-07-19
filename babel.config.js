module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        { development: api.env("development"), runtime: "automatic" },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [...(api.env("test") && ["babel-plugin-transform-scss"])],
    ...(api.env("development") && { plugins: ["react-refresh/babel"] }),
  };
};
