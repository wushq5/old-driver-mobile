<template>
  <el-menu theme="dark" :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="favourite">首页</el-menu-item>
    <el-menu-item index="upload_teacher">添加老师</el-menu-item>
    <el-menu-item index="sign_in" v-if="!$store.state.isAuth">登录</el-menu-item>
    <!-- <el-menu-item index="sign_up">注册</el-menu-item> -->
  </el-menu>
</template>


<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      activeIndex: function () {
        return this.$store.state.navIndex
      }
    },
    methods: {
      handleSelect (key, keyPath) {

      }
    }
  }
</script>
