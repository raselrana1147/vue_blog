<template>
   <div id="app-sidebar">
          <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img :src="'backend/dist/img/user2-160x160.jpg'" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Rasel Rana</a>
        </div>
      </div>


      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
          <li class="nav-item menu-open">
            <router-link :to="{name:'admin_dashboard'}" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                
              </p>
            </router-link>
          </li>
          
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Category
                <i class="fas fa-angle-left right"></i>
             
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{name:'add_category'}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Add New Category</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'category_list'}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Catgory List</p>
                </router-link>
              </li>
            </ul>
          </li>


            <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Post
                <i class="fas fa-angle-left right"></i>
             
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{name:'add_post'}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Add New Post</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'post_list'}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Post List</p>
                </router-link>
              </li>
            </ul>
          </li>
         
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
   </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>