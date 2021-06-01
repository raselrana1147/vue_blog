import Vue from 'vue';
import moment from 'moment'
import { stubString } from 'lodash';
Vue.filter('time_format',(time)=>{
  return moment(time, "YYYYMMDD").fromNow();
  
})

Vue.filter('short_length',function(text,length,suffix){
  return text.substring(0,length)+suffix;
})