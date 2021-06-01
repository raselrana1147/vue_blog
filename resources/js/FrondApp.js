require('./bootstrap');
window.Vue = require('vue');

import moment from 'moment'
Vue.filter('post_time_format',(time)=>{
  return moment(time).format('LL')
})

Vue.filter('short_length',function(text,length,suffix){
  return text.substring(0,length)+suffix;
})



import VueRouter from 'vue-router'
Vue.use(VueRouter)
import store from './public/store/index'
import router from './public/router/index'
Vue.component('blog-master', require('./public/Master.vue').default);

const app = new Vue({
    el: '#appFrond',
    router,
    store
});