const languages = [];
const messages = {};

(function loadLocaleMessages () {
  const locales = require.context('./translations', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  locales.keys().forEach(key => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)
      if (matched && matched.length > 1) {
          const locale = matched[1]
          messages[locale] = locales(key)
      }
      languages.push({
          language:locales(key).name,
          locale:key.match(/([A-Za-z0-9-_]+)\./i)[1]
      })
  })
})()

export { languages, messages };
