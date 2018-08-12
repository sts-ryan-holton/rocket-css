module.exports = {
  /*
  ** Router
  */
  router: {
    base: '/rocket-css/',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Rocket CSS - simple, lightweight CSS framework built using Flexbox',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Rocket CSS is an open source, lightweight CSS framework built using Flexbox. Download for FREE today.' }
    ],
    link: [
      { rel: 'icon', type: 'png', href: '/rocket-css/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#4CAF50',
    height: '4px'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '@/assets/scss/rocketcss.scss',
    '@/assets/scss/rocketcss-theme.scss'
  ]
}
