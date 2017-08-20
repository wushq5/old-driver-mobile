<template>
  <div>
    <div class="card" v-for="(teacher, index) in teachers" @click="toTeacher(teacher)">
      <img class="img" :src="teacher.photo">
      <p class="text" v-text="teacher.name"></p>
    </div>
  </div>
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
      this.$store.commit('UPDATE_TITLE')

      cgi.getAllTeachers().then((res) => {
        if (res.data && res.data.length > 0) {
          this.teachers = res.data
        }
      })
    },

    toTeacher (teacher) {
      this.$store.commit('UPDATE_TEACHER', teacher)
      this.$router.push({name: 'teacher'})
    }
  },
  mounted: function () {
    this.init()
  }
}
</script>

<style scoped>
  .card {
    display: inline-block;
    width: 2.986667rem;
    height: 3.84rem;
    margin: 0.106667rem;
  }

  .card .img {
    width: 100%;
    height: 100%;
  }

  .card .text {
    font-size: 15px;
    text-align: center;
  }
</style>
