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

              <article>
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                     <h3><router-link :to="`/single_blog/${post.id}`">{{ post.title }}</router-link></h3>
                    </div>
                    <img  :src="`/backend/img/${post.image}`" alt="" style="width:100%;height:400px"/>
                  </div>
                  <p>
                   {{ post.description }}
                  </p>
                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li><i class="icon-user"></i><a href="#" v-if="post.author"> {{ post.author.name }}</a></li>
                      <li><i class="icon-folder-open"></i><a href="#" v-if="post.category"> {{ post.category.name }}</a></li>
                      <li><i class="icon-tags"></i><a href="#">Web design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
            
            
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
      getSinglePost(){
        return this.$store.dispatch('get_single_post_frond',this.$route.params.id);
      }
  },

  components:{
    sidebar
  },
  mounted(){
    this.getSinglePost();
  },
  computed:{
      post(){
         return this.$store.getters.getSinglePost
        }
  },

  watch:{
    $route(to,from){
      this.getSinglePost()
    }
  }

})
</script>
