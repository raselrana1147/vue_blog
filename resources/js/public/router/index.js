import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


const route=new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            component:() => import('../pages/home.vue'),
            name:'home'
        },
        {
            path:'/blog',
            component:() => import('../pages/blog.vue'),
            name:'blog'
        },

        {
            path:'/single_blog/:id',
            component:() => import('../pages/singleBlog.vue'),
            name:'single_blog'
        },

        {
            path:'/blog_category/:id',
            component:() => import('../pages/categoryPost.vue'),
            name:'category_blog'
        },


    ]
})
export default route;
