import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import store from '@/store'
import { languages } from '@/locales/translations'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    beforeEnter(to, from, next) {
      next(store.getters['localization/getLanguage'].locale);
    },
  },
  {
    path: '/:lang/',
    component: { render (c) { return c('router-view') } },
    beforeEnter(to, from, next) {
      let lang = to.params.lang
      const newLang=languages.find(({locale}) => locale === lang)
      if (newLang) {
        if (store.getters['localization/getLanguage'].locale !== lang) {
          store.dispatch('localization/changeLanguage', newLang.locale)
        }
        return next()
      }
      return next({ path: store.getters['localization/getLanguage'].locale })
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: About
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
