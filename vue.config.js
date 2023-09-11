const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const vueSrc = "./src";

module.exports = defineConfig({
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "Dream cars"
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc)
      },
      extensions: [".js", ".vue", ".json"]
    }
  }
});
