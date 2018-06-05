// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueAffix from 'vue-affix'

import VueCountdown from '@xkeshi/vue-countdown'

import vueSmoothScroll from 'vue-smooth-scroll'

import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAffix)
Vue.component('countdown', VueCountdown)
Vue.use(vueSmoothScroll)
Vue.use(vueEventCalendar, {locale: 'ko'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
