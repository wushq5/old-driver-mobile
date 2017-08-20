<template>
  <div>
    <div class="mask" v-show="sidebarShow" @click="showSidebar"></div>
    <div class="header" :class="{'show': sidebarShow}">
      <div class="left" @click="showSidebar">
        <i class="iconfont icon-other icon"></i>
      </div>
      <div class="title">
        {{title}}
      </div>
      <div class="right" @click="goAbout">
        <i class="iconfont icon-feedback icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['sidebarShow', 'title'])
  },
  methods: {
    showSidebar () {
      this.$store.commit('UPDATE_SIDEBARSHOW')
    },

    goAbout () {
      this.$router.push({name: 'about'})
    }
  }
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.853333rem;
    line-height: 0.853333rem;
    text-align: center;
    background-color: #71C671;
    color: #fff;
    transition: all .3s ease;
  }

  .header .left {
    float: left;
    height: 100%;
    width: 0.853333rem;
    font-size: 16px;
  }

  .header .right {
    float: right;
    height: 100%;
    width: 0.853333rem;
    font-size: 16px;
  }

  .header .title {
    display: inline-block;
    position: absolute;
    left: 2rem;
    right: 2rem;
    width: auto;
    min-height: 0.853333rem;
    font-size: 16px;
  }

  .icon {
    font-size: 26px;
  }

  .show {
    transform: translateX(4.266667rem)
  }
</style>
