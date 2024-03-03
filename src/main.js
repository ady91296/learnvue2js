import Vue from 'vue'
import App from './App.vue'
import Routes from './routes';

import VueResource from 'vue-resource'

import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(VueRouter);
// import Ninjas from './Ninjas.vue'

// Vue.component('ninjas', Ninjas)


Vue.filter('snippet', function(value){
  return value.slice(0,100) + "..."
})

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
