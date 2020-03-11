import i18n, { locale } from '@/i18n'
import { languages } from '@/locales/translations'
export default {
    namespaced:true,
    state: {
        language: locale,
        languageOptions: languages,
    },
    getters: {
        getLanguageOptions: state => state.languageOptions,
        getLanguage: state => state.languageOptions.find(({locale}) => locale === state.language)
    },
    mutations: {
        updateLanguage(state, newLanguage) {
            state.language = newLanguage;
        },
    },
    actions: {
        changeLanguage({ commit }, newLanguage) {
            i18n.locale = newLanguage;
            localStorage.setItem('lang', newLanguage);
            commit('updateLanguage', newLanguage);
        },
    },
}
