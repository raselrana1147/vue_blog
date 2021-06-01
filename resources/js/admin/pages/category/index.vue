<template>
  <div id="show-category">
           <div class="row">
          <div class="col-8 offset-2">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title float-right"><router-link :to="{name:'add_category'}" class="btn btn-warning">Add New Category</router-link></h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>
                        <p>
                            <span class="pr-2"><input type="checkbox" v-model="select_all" @click="seleteAll"><span class="pl-2">Checkbox</span></span><br>
                            <span><select v-model="select" @change="deleteAll">
                               <option value="">Select</option>
                               <option value="">Delete All</option>
                            </select></span>
                            
                        </p>
                    </th>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(data,index) in get_categories" :key="index">
                  <td><input type="checkbox" v-model="categoryId" :value="data.id"></td>
                    <td>{{index+1}}</td>
                    <td>{{ data.name }}</td>
                     <td>{{ data.created_at | time_format }}</td>
                    <td>
                      <router-link :to="{name:'category_edit', params:{id:data.id}}" class="btn btn-success">Edit</router-link>
                       <a href="" class="btn btn-danger" @click.prevent="delete_item(data.id)">Delete</a>
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
  name:'List',
    data(){
      return{
        categoryId:[],
        select:'',
        select_all:false
      }
    },
    methods:{
      delete_item(id){
       
        axios.post(`/api/delete_category`,{id:id}).then((response)=>{
          Toast.fire({
                icon: 'success',
                title: response.data.data
               })
          return this.$store.dispatch('setCategory');

        })
      },

       deleteAll(){
          axios.get('/api/delete_multiple_category/'+this.categoryId).then((response)=>{
                this.$store.dispatch('setCategory');
                this.categoryId=[];
               Toast.fire({
                icon: 'success',
                title: "Category Deleted successfully"
               })
            
          })
      },

      seleteAll(){
        if (this.select_all==false) {
           this.select_all=true;
          for(var category in this.get_categories){
              this.categoryId.push(this.get_categories[category].id);
          }
          alert(this.categoryId);
        }else{
           this.select_all=false;
          for(var category in this.get_categories){
              this.categoryId=[]
          }
        }
      }
    },

    computed:{
        get_categories(){
         return this.$store.getters.getCategory
        }
    },
    mounted(){
        return this.$store.dispatch('setCategory');
    },
   
}
</script>

<style>

</style>