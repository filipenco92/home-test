module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/home-test/' : '/',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales/translations',
      enableInSFC: true
    }
  }
}
