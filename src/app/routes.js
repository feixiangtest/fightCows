import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({  
    routes: [
        { path: '/', name: 'home',  component:resolve => require(['./home/index.vue'], resolve)},
        { path: '/usercenter', name: 'usercenter',  component:resolve => require(['./usercenter/index.vue'], resolve)},
        
    ]
});
export default router
