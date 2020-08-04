import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  loading: require('assets/img/common/placeholder.png'),
  attempt: 1
})

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue({})
Vue.use(toast)

FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
