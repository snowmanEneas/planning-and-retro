const webpack = require("webpack")
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg")

    svgRule.uses.clear()

    svgRule
      .oneOf("internal")
      .resourceQuery(/raw/)
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
  },

  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName:
            process.env.NODE_ENV !== "production"
              ? "[name]-[local]-[hash:base64:5]"
              : "[hash:base64:10]",
        },
      },
      sass: {
        data: `
          @import "@/assets/stylesheets/var.scss";
        `,
      },
    },
  },

  configureWebpack: {
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        minSize: 10000,
        maxSize: 250000,
      },
    },
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|pt|es/),
      new BundleAnalyzerPlugin({
        analyzerMode:
          process.env.VUE_APP_BUNDLE_ANALYZER === "true"
            ? "server"
            : "disabled",
      }),
    ],
  },
}
