<template>
  <div>
    <img class="cover" :src="homework.cover" alt="">
    <h1>{{homework.id}}</h1>
    <p class="title">{{homework.name}}</p>
    <p class="desc">{{homework.desc}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homework: {}
    }
  },
  created: function () {
    this.homework = this.$store.state.homework
    this.$store.commit('UPDATE_TITLE', this.homework.id)
  }
}
</script>

<style scoped>
  h1 {
    font-size: 20px;
    text-align: center;
    line-height: 0.853333rem;
  }

  .cover {
    display: block;
    margin: 0.170667rem auto 0;
    max-width: 3.413333rem;
    max-height: 4.266667rem;
  }

  .title {
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    padding: 0 0.170667rem;
  }

  .desc {
    font-size: 14px;
    margin-top: 0.341333rem;
    padding: 0 0.170667rem;
  }
</style>
