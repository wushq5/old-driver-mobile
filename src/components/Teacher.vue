<template>
  <div class="container">
    <div class="info">
      <img :src="teacher.photo" height="250" width="250" alt="">
      <div class="detail">
        <p class="teacher-name"><strong>{{teacher.name}}</strong></p>
        <p class="teacher-desc">{{teacher.desc}}</p>
        <p class="detail-left"><span>Birthday: </span>{{teacher.birthday}}</p>
        <p class="detail-right"><span>B-W-H: </span>{{teacher.bwh}}</p>
        <p class="detail-left"><span>Height: </span>{{teacher.height}}cm</p>
        <p class="detail-right"><span>Weight: </span>{{teacher.weight ? teacher.weight: '- '}}kg</p>
        <el-button class="btn" type="success" @click="goUploadHomework">Upload Homework</el-button>
        <el-button class="btn" type="success" @click="goUpdateTeacher">Update Teacher</el-button>
      </div>
    </div>
    <div class="homework">
      <div class="item" v-for="(homework, index) in homeworks" @click.native="toHomework(homework)">
         <img :src="homework.cover" class="image">
          <div class="id">
            <span v-text="homework.id"></span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import cgi from '../modules/cgi'
import moment from 'moment'

export default {
  data () {
    return {
      teacher: {}, // Object, fetch from router
      homeworks: []
    }
  },
  methods: {
    getHomeworks: function (teacherId) {
      cgi.getAllHomeworksByTeacherId({teacherId})
        .then((res) => {
          if (res.data && res.data.length > 0) {
            this.homeworks = res.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    init: function () {
      this.teacher = this.$store.state.teacher
      this.teacher = Object.assign(this.teacher, {
        birthday: moment(this.teacher.birthday).format('YYYY-MM-DD')
      })
      this.getHomeworks(this.teacher._id)
    },

    goUploadHomework: function () {
      this.$router.push({name: 'upload_homework'})
    },

    goUpdateTeacher: function () {
      this.$router.push({name: 'update_teacher'})
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

  .info {
    display: flex;
  }

  .info .detail {
    padding-left: 10px;
  }

  .teacher-name {
    font-size: 18px;
  }

  .teacher-desc {
    font-size: 15px;
    width: 750px;
  }

  .detail-left {
    display: inline-block;
    width: 50%;
  }

  .detail-right {
    display: inline-block;
    width: 49%;
  }

  .detail-left span {
    display: inline-block;
    color: #999;
    width: 80px;
  }

  .detail-right span {
    display: inline-block;
    color: #999;
    width: 80px;
  }

  .homework {
    width: 80%;
  }

  .homework .item {
    display: inline-block;
    padding: 10px;
  }

  .id {
    padding: 14px;
    text-align: center;
  }

  .btn {
    width: 200px;
  }

  .image {
    width: 250px;
    height: 250px;
    display: block;
    margin: 0 auto;
  }
</style>
