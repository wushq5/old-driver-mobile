<template>
  <el-row class="form">
    <el-col>
      <p class="txt-tag">Username</p>
      <el-input v-model="name" placeholder="username"></el-input>
      <p class="txt-tag">Password</p>
      <el-input v-model="password" type="password" placeholder="password"></el-input>
      <el-button class="btn-login" type="info" @click="signUp">Sign Up</el-button>
    </el-col>
  </el-row>
</template>

<script>
import cgi from '../modules/cgi'
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      cgi.signUp({
        name: this.name,
        password: this.password
      }).then(res => {
        console.info(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .form {
    width: 15%;
  }
  .txt-tag {
    font-size: 15px;
  }
	.btn-login {
    margin-top: 20px;
    width: 100%;
  }
</style>
