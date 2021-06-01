<template>
    <div id="blog">
    <section id="inner-headline">
      <div class="container">
        <div class="row">
          <div class="span4">
            <div class="inner-heading">
              <h2>Blog left sidebar</h2>
            </div>
          </div>
          <div class="span8">
            <ul class="breadcrumb">
              <li><a href="#"><i class="icon-home"></i></a><i class="icon-angle-right"></i></li>
              <li><a href="#">Blog</a><i class="icon-angle-right"></i></li>
              <li class="active">Blog with left sidebar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="span8">

            <article v-for="post in posts" :key="post.index">
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                     <h3><router-link :to="`/single_blog/${post.id}`">{{ post.title }}</router-link></h3>
                    </div>
                    <img :src="`backend/img/${post.image}`" alt="" style="width:100%;height:400px" />
                  </div>
                  <p>
                   {{ post.description }}
                  </p>
                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li><i class="icon-calendar"></i><a href="#"> {{post.created_at | post_time_format }}</a></li>
                      <li><i class="icon-user"></i><a href="#"> {{ post.author.name }}</a></li>
                      <li><i class="icon-folder-open"></i><a href="#"> {{ post.category.name }}</a></li>
                    </ul>
                    <router-link :to="`single_blog/${post.id}`" class="pull-right">Continue reading <i class="icon-angle-right"></i></router-link>
                  </div>
                </div>
              </div>
            </article>
            
            <div id="pagination">
              <span class="all">Page 1 of 3</span>
              <span class="current">1</span>
              <a href="#" class="inactive">2</a>
              <a href="#" class="inactive">3</a>
            </div>
          </div>
          <div class="span4">
            <sidebar/>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
import sidebar from './sidebar.vue'

export default({
  data() {
    return{

    }
  },

  methods:{
      
  },

  components:{
    sidebar
  },
  mounted(){
     
    
    return this.$store.dispatch('get_post_frond');
  },
  computed:{
      posts(){
         return this.$store.getters.getPostFrond
        }
  },

})
</script>
