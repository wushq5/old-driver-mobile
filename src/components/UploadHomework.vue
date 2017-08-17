<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="8">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="ID">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="Name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Desc">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="Cover">
          <div class="upload-container">
            <input type="file" id="cover" class="upload" @change="onChange()" />
            <img class="img-preview" id="imgPre" src="" width="200px" height="200px" />
          </div>
        </el-form-item>
        <el-form-item style="margin-top: 200px">
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="back">取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import cgi from '../modules/cgi'
  export default {
    data () {
      return {
        form: {
          id: '',
          name: '',
          desc: '',
          cover: null
        }
      }
    },
    methods: {
      onSubmit () {
        let teacher = this.$store.state.teacher
        if (!teacher) {
          console.error('[UploadHomework] router params undefined: \'teacher\'')
          return
        }

        for (let i in this.form) {
          if (!this.form[i]) {
            console.error(`Form property "${i}" is undefined`)
            return
          }
        }

        let data = new FormData()
        data.append('id', this.form.id)
        data.append('name', this.form.name)
        data.append('desc', this.form.desc)
        data.append('cover', this.form.cover)
        data.append('teacher_id', teacher._id)
        data.append('teacher_name', teacher.name)

        cgi.createOneHomework(data).then(res => {
          this.$router.go(-1)
        }).catch(err => {
          console.log(err)
        })
      },

      onChange () {
        this.form.cover = document.querySelector('#cover').files[0]

        let url = window.URL.createObjectURL(this.form.cover)
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
    z-index: 1;
    position: absolute;
    width: 200px;
    height: 200px;
    background-image: url(../assets/upload.jpg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
</style>
