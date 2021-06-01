<template>
  <div id="add_category">
        <div class="row">
          <div class="col-12">
            <!-- general form elements -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title float-right"><router-link :to="{name:'post_list'}" class="btn btn-warning">Back</router-link></h3>
              </div>
              <form @submit.prevent="updatePost" enctype="multipart/form-data">
                <div class="card-body">
                  <div class="form-group">
                    <label>Post title</label>
                    <input type="text" class="form-control" v-model="form.title" :class="{ 'is-invalid': form.errors.has('title') }">
                     <has-error :form="form" field="title"></has-error>
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                     <markdown-editor v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }"></markdown-editor>
                     <has-error :form="form" field="description"></has-error>
                  </div>
                   <div class="form-group">
                    <label>Image</label>
                     <input type="file" class="form-control" @change="setImage($event)" >
                       <img :src="showImage()" alt="" width="100">
                  </div>
              
                   <div class="form-group">
                    <label>Category</label>
                    <select v-model="form.category_id" class="form-control" :class="{ 'is-invalid': form.errors.has('category_id') }">
                        
                        <option :value="category.id" v-for="(category,index) in categories" :key="index"> {{ category.name   }}</option>
                    </select>
                    <has-error :form="form" field="category_id"></has-error>
                  </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary" :disabled="form.busy">Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){

        return{
            form: new Form({
              title: '',
              description: '',
              image:'',
              category_id:'' 
           })
        }
    },

    mounted(){
      this.get_current_post_data();
      this.$store.dispatch('setCategory');
     // this.showImage();
    },

    computed:{
        categories(){
          return this.$store.getters.getCategory
        }
    },

    

    methods:{

        showImage(){
            let img=this.form.image;
            if (img.length>100) {
                return this.form.image;
            }else{
                return "/backend/img/"+this.form.image
            }
        },

        get_current_post_data(){
              axios.get('/api/post/edit/'+this.$route.params.id).then(response=>{
               this.form.fill(response.data.data)
            })
        },

      setImage(event){
      
        var file = event.target.files[0];
       
         var reader = new FileReader();
         reader.onload = event=> {
            this.form.image=event.target.result;
            
          };
         reader.readAsDataURL(file);
      },

            
     updatePost(){
        this.form.post('/api/post/update/'+this.$route.params.id)
        .then(({ data }) => { 
           Toast.fire({
                icon: 'success',
                title: data.data
               })
          }).catch((error)=>{
            console.log(error);
          })
     }
    }
}
</script>

<style>

</style>