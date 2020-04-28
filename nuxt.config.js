export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],

  eslint: {
    cache: true,
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  firebase: {
    config: {
      apiKey: 'AIzaSyC4ChOinqC7RcB_5k6Ybh-kiAVYLEXngsM',
      authDomain: 'm2s-platform.firebaseapp.com',
      databaseURL: 'https://m2s-platform.firebaseio.com',
      projectId: 'm2s-platform',
      storageBucket: 'm2s-platform.appspot.com',
      messagingSenderId: '933730425131',
      appId: '1:933730425131:web:7d88c26ef34a01439b8d6e',
    },
    services: {
      auth: {
        ssr: true,
      },
    },
  },

  pwa: {
    workbox: {
      ...(process.env.WORKBOX_POSITION === 'before'
        ? { routingExtensions: ['~/static/firebase-auth-sw.js'] }
        : { importScripts: ['/firebase-auth-sw.js'] }),
      dev: true,
    },
  },

  env: {
    WORKBOX_POSITION: process.env.WORKBOX_POSITION || 'after',
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(_config, _ctx) {},
  },
}
