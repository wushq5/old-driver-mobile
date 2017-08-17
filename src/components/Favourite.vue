<template>
  <el-row :gutter="20" class="all">
    <el-col :span="4" v-for="(teacher, index) in teachers" :key="teacher">
      <el-card :body-style="{ padding: '0px' }" @click.native="toTeacher(teacher)">
        <img :src="teacher.photo" class="image">
        <div class="name">
          <span v-text="teacher.name"></span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import cgi from '../modules/cgi'

  export default {
    name: 'favourite',
    data () {
      return {
        teachers: null
      }
    },
    methods: {
      init () {
        cgi.getAllTeachers().then((res) => {
          if (res.data && res.data.length > 0) {
            this.teachers = res.data
          }
        })
      },

      toTeacher (teacher) {
        this.$store.commit('setTeacher', { teacher })
        this.$router.push({name: 'teacher'})
      }
    },
    mounted: function () {
      this.init()
    }
  }
</script>

<style scoped>
  .all {
    width: 80%;
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
