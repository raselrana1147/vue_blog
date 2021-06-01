import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

const storage=new Vuex.Store({
    state:{
        categories_frond:[],
        posts_frond:[],
        single_post:{},
        all_categories:[],
        latest_post:[],
    },

    getters:{
      
        getPostFrond(state){
            return state.posts_frond;
        },

        getSinglePost(state){
            return state.single_post;
        },

        getCategory(state){
            return state.all_categories;
        },

        getLatestPost(state){
            return state.latest_post;
        },
       
    },

    actions:{
       
        get_post_frond(context){
            axios.get('/api/get_post').then(response=>{
              
                context.commit('GET_POST_FROND',response.data.data)
            })
        },

        get_single_post_frond(context,payload){
            axios.get("/api/get_single_post/"+payload).then(response=>{
               
                context.commit('GET_SINGLE_POST_FROND',response.data.data)
            })
        },

        get_all_category(context){
            axios.get("/api/get_category/").then(response=>{
                context.commit('GET_CATEGORY',response.data.data)
            })
        },

        get_latest_post(context){
            axios.get("/api/get_latest_post/").then(response=>{
                context.commit('GET_LATEST_POST',response.data.data)
            })
        },

        get_category_post(context,payload){
            axios.get("/api/category_post/"+payload).then(response=>{
                context.commit('GET_CATEGORY_POST',response.data.data)
            })
        },
        get_search_data(context,payload){
            axios.get("/api/get_search_post/"+payload).then(response=>{
                context.commit('GET_SEARCH_POST',response.data.data)
            })
        }
    },

    mutations:{
        GET_POST_FROND(state,payload){
            return state.posts_frond=payload;
        },

        GET_SINGLE_POST_FROND(state,payload){
            return state.single_post=payload;
        },

        GET_CATEGORY(state,payload){
            return state.all_categories=payload;
        },

        GET_LATEST_POST(state,payload){
            return state.latest_post=payload;
        },

        GET_CATEGORY_POST(state,payload){
            return state.posts_frond=payload;
        },
        GET_SEARCH_POST(state,payload){
            return state.posts_frond=payload;
        }



       
    }
});
export default storage;



