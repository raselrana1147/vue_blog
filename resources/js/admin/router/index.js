import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


const route=new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/admin/dashboard',
            component:() => import('../pages/home.vue'),
            name:'admin_dashboard'
        },

        {
            path:'/admin/add-category',
            component:() => import('../pages/category/add.vue'),
            name:'add_category'
        },

        {
            path:'/admin/category',
            component:() => import('../pages/category/index.vue'),
            name:'category_list'
        },

        {
            path:'/admin/category-edit/:id',
            component:() => import('../pages/category/edit.vue'),
            name:'category_edit'
        },

        {
            path:'/admin/post',
            component:() => import('../pages/post/index.vue'),
            name:'post_list'
        },

        {
            path:'/admin/add-post',
            component:() => import('../pages/post/add.vue'),
            name:'add_post'
        },

        {
            path:'/admin/add-edit/:id',
            component:() => import('../pages/post/edit.vue'),
            name:'edit_post'
        },


    ]
})
export default route;
