<template>
  <div class="container">
    <navMenu class="nav"></navMenu>
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navMenu from './comps/navMenu'
  import sidebar from './comps/sidebar'
  export default {
    name: 'home',
    components: {
      navMenu,
      sidebar
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav {
    width: 100%;
  }

  .form {
    width: 100%;
    margin-top: 10px;
  }

  .el-card {
    margin-top: 10px;
  }

  .name {
    padding: 14px;
    text-align: center;
  }

  .image {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
