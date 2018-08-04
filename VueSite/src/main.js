// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'

var VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueLocalStorage)
Vue.use(VueScrollTo)

Vue.http.options.root = 'https://personalvuewebsite.firebaseio.com/data.json';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
