import webpack from "webpack"

export default {
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  // plugins: ["~/plugins/bootstrap.js"],
  head: {
    title: 'test-webpage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'test page' }
    ]
  },
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    // extend(config, { isDev, isClient }) {
    //     if (isDev && isClient) {
    //       config.module.rules.push({
    //         enforce: "pre",
    //         test: /\.(js|vue)$/,
    //         loader: "eslint-loader",
    //         exclude: /(node_modules)/
    //       });
    //     }
    //   }
  },
  modules: [
    ['bootstrap-vue/nuxt', '@nuxtjs/axios']
  ],
  componentPlugins: [
    'LayoutPlugin',
    'FormPlugin',
    'FormCheckboxPlugin',
    'FormInputPlugin',
    'FormRadioPlugin',
    'ModalPlugin'
  ],
}