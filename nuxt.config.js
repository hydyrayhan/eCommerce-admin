import colors from 'vuetify/es5/util/colors'
require('dotenv').config({
  path: './config/config.env',
})
export default {
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 4000,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - eCommerceAdmin',
    title: 'eCommerceAdmin',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/sass/main.scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/redirect'},
    {src:'~/plugins/vue-confirm-dialog', mode: 'client'},
    // {src:'~/plugins/vue-tinymce-editor', ssr:false}
    // {src:'~/plugins/own-tiny', ssr: false},
    { src: '~/plugins/vue-quill-editor', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  moment: {
    defaultLocale: 'RU',
    locales: ['RU', 'TM'],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        strategy: 'no_prefix',
        locales: [
          {
            code: 'RU', 
            file: 'ru_RU.js',
            name: 'RU',
          },
          {
            code: 'TM',
            file: 'tm_TM.js',
            name: 'TM',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'RU',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: process.env.SERVER_URL || 'http://localhost:5000',
    baseURL: process.env.SERVER_URL || 'http://localhost:5000',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  publicRuntimeConfig:{
    url:process.env.SERVER_URL || 'http://localhost:4000'
  } 

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   vendor: ['tinymce', 'tinymce-vue-2'],
  // },
}
