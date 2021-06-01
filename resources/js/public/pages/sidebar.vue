<template>
    <span id="sidebar">
             <aside class="right-sidebar">
              <div class="widget">
                <form class="form-search">
                  <input @keyup="realSearch" placeholder="Type something" v-model="keyword" type="text" class="input-medium search-query">
                  <button type="submit" @click.prevent="realSearch" class="btn btn-square btn-theme">Search</button>
                </form>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Categories</h5>
                <ul class="cat">
                  <li v-for="category in categories" :key="category.index">
                  <i class="icon-angle-right"></i>
                  <router-link :to="`/blog_category/${category.id}`">{{ category.name }}</router-link>
                     <span > ({{category.posts.length}})</span>
                  </li>
                </ul>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Latest posts</h5>
                <ul class="recent">
                  <li v-for="post in posts" :key="post.index">
                    <img  :src="`/backend/img/${post.image}`" alt="post.title" style="width:70px;height:50px"/>
                    <h6><router-link :to="`/single_blog/${post.id}`">{{ post.title }}</router-link></h6> 
                  </li>
                </ul>
              </div>
               <div class="widget">
                <h5 class="widgetheading">Popular tags</h5>
                <ul class="tags">
                  <li><a href="#">Web design</a></li>
                  <li><a href="#">Trends</a></li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Internet</a></li>
                  <li><a href="#">Tutorial</a></li>
                  <li><a href="#">Development</a></li>
                </ul>
              </div>
            </aside>
    </span>
</template>
<script>

import _ from "lodash";
export  default({
    data() {
        return{
            keyword:""
        }
    },
    mounted(){
       this.getCategory();
       this.getPost();
    },
    methods:{
        getCategory(){
           return this.$store.dispatch('get_all_category');
        },
        getPost(){
           return this.$store.dispatch('get_latest_post');
        },
      //    realSearch(){

      //      if (this.keyword.length>0) {
      //         return this.$store.dispatch('get_search_data',this.keyword);
      //      }else{
      //        this.getPost();
      //    }
      //  }

       realSearch:_.debounce(function(){
        if (this.keyword.length>0) {
              return this.$store.dispatch('get_search_data',this.keyword);
           }else{
             this.getPost();
         }
     },100),
      
    },
    
    computed:{
        categories(){
          return this.$store.getters.getCategory
        },
        posts(){
          return this.$store.getters.getLatestPost
        }
    },
   
})
</script>


