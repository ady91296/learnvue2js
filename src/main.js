import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

Vue.use(VueResource);
// import Ninjas from './Ninjas.vue'

// Vue.component('ninjas', Ninjas)


Vue.filter('snippet', function(value){
  return value.slice(0,100) + "..."
})

new Vue({
  el: '#app',
  render: h => h(App)
})
