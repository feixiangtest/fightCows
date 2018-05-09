/*
 * @Author: ZhangShuai 
 * @Date: 2018-05-08 08:33:00 
 * @Last Modified by: Janson
 * @Last Modified time: 2018-05-09 18:30:08
 */

import Vue from 'vue';
import router from './routes.js';
import store from './store.js';
import request from './common/request';
import '../assets/css/base.scss';
Vue.prototype.$http = request;
var app = new Vue({
    router,
    store
}).$mount('#app');

//根据不同设备设置字体大小
let elWidth = document.documentElement.clientWidth;
if (elWidth >= 768) {
    elWidth = 768;
    document.body.style.margin = '0 auto';
     document.body.style.width = "768px";
}
document.documentElement.style.fontSize = elWidth / 15 + 'px';

