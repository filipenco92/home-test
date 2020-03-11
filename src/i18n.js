import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { messages } from './locales/translations'

Vue.use(VueI18n)

const langFromLocalstorage = localStorage.getItem('lang');
export const locale = langFromLocalstorage ? langFromLocalstorage : 'en';

export default new VueI18n({
  locale,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
})

