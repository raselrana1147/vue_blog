<template>
  <div id="show-category">
           <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title float-right"><router-link :to="{name:'add_post'}" class="btn btn-warning">Add New Category</router-link></h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                   
                    <th>Serial</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Category</th>
                     <th>Description</th>
                     <th>Author</th>
                    <th>Posted At</th>
                    <th width="15%">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(post,index) in posts" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ post.title }}</td>
                    <td>
                    <span v-if="post.image">
                      <img :src="'/backend/img/'+post.image" alt="post.title" width="120" height="80">
                    </span>
                    <span v-else>NA</span>
                        
                    </td>
                    <td>{{ post.category.name }}</td>
                    <td>{{ post.description | short_length(50,'...')}}</td>
                    <td>{{ post.author.name }}</td>
                    <td>{{ post.created_at | time_format }}</td>
                    <td>
                      <router-link :to="{name:'edit_post',params:{id:post.id}}" class="btn btn-success">Edit</router-link>
                       <a href="" class="btn btn-danger" @click.prevent="delete_item(post.id)">Delete</a>
                    </td>
                    
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name:'Post',
 

    computed:{
        posts(){
            return this.$store.getters.getPost
        }
    },

    mounted(){
        return this.$store.dispatch('get_post'); 
        
    },
    methods:{
       delete_item(id){
         axios.post(`/api/post_delete`,{id:id}).then((response)=>{
          Toast.fire({
                icon: 'success',
                title: response.data.data
               })
          return this.$store.dispatch('get_post');

        })
       }
    }
 
}
</script>

<style>

</style>