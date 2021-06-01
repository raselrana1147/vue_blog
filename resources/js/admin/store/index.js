import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

const storage=new Vuex.Store({
    state:{
        categories:[],
        posts:[],
        posts_frond:[],
        error_message:'',
        success_message:''
    },

    getters:{
      
        getCategory(state){
            return state.categories;
        },
        getPost(state){
            return state.posts;
        },

        getPostFrond(state){
            return state.posts_frond;
        },

    },

    actions:{
        setCategory(context){
            axios.get('/api/category').then(response=>{
                context.commit('commit_categories',response.data.data)
            });
        },
        get_post(context){
            axios.get('/api/post').then(response=>{
                context.commit('GET_POST',response.data.data)
            })
        },

        get_post_frond(context){
            axios.get('/api/get_post').then(response=>{
               
                context.commit('GET_POST_FROND',response.data.data)
            })
        }
    },

    mutations:{
        commit_categories(state,payload){
            return state.categories=payload;
        },

        GET_POST(state,payload){
            return state.posts=payload;
        },

        GET_POST_FROND(state,payload){
            return state.posts_frond=payload;
        }

       
    }
});
export default storage;



