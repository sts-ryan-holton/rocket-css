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
    title: 'Rocket CSS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The home of the open source lightweight Rocket CSS framework.' }
    ],
    link: [
      { rel: 'icon', type: 'png', href: '/rocket-css/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
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
