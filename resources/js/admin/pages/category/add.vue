<template>
  <div id="add_category">
        <div class="row">
          <div class="col-md-8">
            <!-- general form elements -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title float-right"><router-link :to="{name:'category_list'}" class="btn btn-warning">Back</router-link></h3>
              </div>
              <form @submit.prevent="addCategory">
                <div class="card-body">
                  <div class="form-group">
                    <label>Category Name</label>
                    <input type="text" class="form-control" placeholder="Enter email"  v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
                     <has-error :form="form" field="name"></has-error>
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
              name: '',
           })
        }
    },

    methods:{
      addCategory(){
        
        this.form.post('/api/category')
        .then(({ data }) => { 
           Toast.fire({
                icon: 'success',
                title: data.data
               })
           this.$router.push({name:'category_list'})
          }).catch((error)=>{
            console.log(error);
          })
      }
    }
}
</script>

<style>

</style>