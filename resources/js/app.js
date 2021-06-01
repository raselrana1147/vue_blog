
require('./bootstrap');
window.Vue = require('vue');
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './admin/router/index'
// v form
 import {Form, HasError, AlertError } from 'vform';
 Vue.component(HasError.name, HasError)
 Vue.component(AlertError.name, AlertError) 
 window.Form=Form;
// end

// sweet alert 
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  window.Toast=Toast;
  // end 
      import store from './admin/store/index'
  // vuex 
  // time format
  import {filter} from "./filter"
  //end

import 'v-markdown-editor/dist/v-markdown-editor.css';
import Editor from 'v-markdown-editor'
Vue.use(Editor);

Vue.component('app-header', require('./admin/common/header.vue').default);
Vue.component('app-sidebar', require('./admin/common/sidebar.vue').default);
Vue.component('app-footer', require('./admin/common/footer.vue').default);
Vue.component('app-login', require('./admin/pages/login.vue').default);

const app = new Vue({
    el: '#app',
    router,
    store, 
});
