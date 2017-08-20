<template>
  <div>
    <div class="teacher">
      <img class="photo" :src="teacher.photo" alt="">
      <h1>{{teacher.name}}</h1>
      <p class="desc">{{teacher.desc}}</p>
      <div class="other">
        <p>Birthday: {{teacher.birthday}}</p>
        <p>B-W-H: {{teacher.bwh}}</p>
      </div>
      <div class="other">
        <p>Height: {{teacher.height}}cm</p>
        <p>Weight: {{teacher.weight ? teacher.weight: '- '}}kg</p>
      </div>
    </div>
    <!-- <button class="btn" type="success" @click="goUploadHomework">Upload Homework</button> -->
    <!-- <button class="btn" type="success" @click="goUpdateTeacher">Update Teacher</button> -->
    <div class="homework" v-for="(homework, index) in homeworks" @click="goHomework(homework)">
      <img class="img" :src="homework.cover">
      <p class="text" v-text="homework.id"></p>
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
      this.$store.commit('UPDATE_TITLE', this.teacher.name)
    },

    goHomework: function (homework) {
      this.$store.commit('UPDATE_HOMEWORK', homework)
      this.$router.push({name: 'homework'})
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
  h1 {
    font-size: 20px;
    text-align: center;
    line-height: 0.853333rem;
  }

  .photo {
    display: block;
    margin: 0.170667rem auto 0;
    max-width: 3.413333rem;
    max-height: 4.266667rem;
  }

  .desc {
    font-size: 14px;
    padding: 0 0.170667rem;
  }

  .other {
    display: flex;
    padding: 0.170667rem 0.170667rem 0;
  }

  .other p {
    display: inline-block;
    font-size: 15px;
    width: 3.2rem;
  }

  .homework {
    display: inline-block;
    width: 2.986667rem;
    height: 3.84rem;
    margin: 0.106667rem;
  }

  .homework .img {
    width: 100%;
    height: 100%;
  }

  .homework .text {
    font-size: 15px;
    text-align: center;
  }
</style>
