<template>
  <el-row class="form">
    <el-col>
      <p class="txt-tag">Username</p>
      <el-input v-model="name" placeholder="username"></el-input>
      <p class="txt-tag">Password</p>
      <el-input v-model="password" type="password" placeholder="password"></el-input>
      <el-button class="btn-login" type="success" @click="login">Login</el-button>
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
    login: function () {
      cgi.signIn({
        name: this.name,
        password: this.password
      }).then(res => {
        this.$router.replace({name: 'favourite'})
        // cgi.getInfo().then((res) => {
        //   console.log('OOOOOK')
        // })
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
