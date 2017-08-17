<template>
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
    <el-form-item label="Photo">
      <div class="upload-container">
        <input type="file" id="photo" class="upload" @change="onChange()" />
        <img class="img-preview" id="imgPre" src="" width="200px" height="200px" />
      </div>
    </el-form-item>
    <el-form-item style="margin-top: 200px">
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="back">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import navMenu from './comps/navMenu'
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
    components: {
      navMenu
    },
    methods: {
      onSubmit () {
        for (let i in this.form) {
          if (!this.form[i]) {
            console.error(`Form property "${i}" is undefined`)
            return
          }
        }

        let data = new FormData()
        data.append('name', this.form.name)
        data.append('desc', this.form.desc)
        data.append('birthday', this.form.birthday)
        data.append('height', this.form.height)
        data.append('weight', this.form.weight)
        data.append('bwh', this.form.bwh)
        data.append('photo', this.form.photo)

        cgi.createOneTeacher(data).then(res => {
          // redirect
          this.$router.replace({name: 'favourite'})
        }).catch(err => {
          console.log(err)
        })
      },

      onChange () {
        this.form.photo = document.querySelector('#photo').files[0]

        let url = window.URL.createObjectURL(this.form.photo)
        let imgPre = document.getElementById('imgPre')
        imgPre.src = url
      },

      back () {
        this.$router.go(-1)
      }
    }

  }
</script>

<style scoped>
  .form {
    width: 25%;
  }

  .upload-container {
    padding-bottom: 10px;
    position: relative;
  }

  .upload {
    z-index: 2;
    position: absolute;
    opacity: 0;
    filter: alpha(opacity=0);
    width: 200px;
    height: 200px;
  }

  .img-preview {
    border: none;
    z-index: 1;
    position: absolute;
    width: 200px;
    height: 200px;
    background-image: url(../assets/upload.jpg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
</style>
