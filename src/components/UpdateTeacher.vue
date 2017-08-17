<template>
  <div class="container">
    <el-form class="form" ref="form" :model="form" label-width="80px">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="Brithday">
        <el-input v-model="form.birthday"></el-input>
      </el-form-item>
      <el-form-item label="Height">
        <el-input v-model="form.height"></el-input>
      </el-form-item>
      <el-form-item label="Weight">
        <el-input v-model="form.weight"></el-input>
      </el-form-item>
      <el-form-item label="BWH">
        <el-input v-model="form.bwh"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="back">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import cgi from '../modules/cgi'
  export default {
    data () {
      return {
        form: {
          name: null,
          desc: null,
          birthday: null,
          height: null,
          weight: null,
          bwh: null,
          photo: null
        }
      }
    },
    methods: {
      init () {
        let teacher = this.$store.state.teacher
        this.form = {
          name: teacher.name,
          desc: teacher.desc,
          birthday: teacher.birthday,
          height: teacher.height,
          weight: teacher.weight,
          bwh: teacher.bwh,
          photo: teacher.photo,
          _id: teacher._id
        }
      },

      onSubmit () {
        for (let i in this.form) {
          if (this.form[i] === undefined || this.form[i] === '' || this.form[i] === null) {
            console.error(`Form property "${i}" is ${this.form[i]}`)
            return
          }
        }

        cgi.updateTeacher({teacherId: this.form._id}, this.form).then(res => {
          this.$store.commit('setTeacher', { teacher: this.form })
          this.$router.go(-1)
          // this.$router.replace({name: 'teacher'})
        }).catch(err => {
          console.log(err)
        })
      },

      back () {
        this.$router.go(-1)
      }
    },
    created: function () {
      this.init()
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    width: 30%;
  }
</style>
