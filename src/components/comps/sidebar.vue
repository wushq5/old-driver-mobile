<template>
  <div class="sb" :class="{'show': sidebarShow}">
    <div class="header">
      <img class="avatar" src="../../assets/pujing.jpg" alt="">
      <div class="nickname">TODO</div>
    </div>
    <div class="menu">
      <div v-for="menu in menus" class="item" @click="goPage(menu)">
        <div class="icon">
          <i class="iconfont" :class="menu.icon"></i>
        </div>
        <span class="menu-text">{{menu.name}}</span>
      </div>
    </div>
  </div>
</template>


<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      menus: [
        {
          name: 'Home',
          router: 'home',
          icon: 'icon-homepage'
        }
      ]
    }
  },
  computed: {
    ...mapState(['sidebarShow'])
  },
  methods: {
    goPage (menu) {
      this.$store.commit('UPDATE_SIDEBARSHOW')
      this.$router.push({name: menu.router})
    }
  }
}
</script>


<style scoped>
  .sb {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -4.266667rem;
    background-color: #22262a;
    z-index: 10;
    width: 4.266667rem;
    transition: all .3s ease;
  }

  .show {
    transform: translateX(4.266667rem)
  }

  .sb .header {
    width: 100%;
    height: 3.072rem;
    background-color: #262d30;
  }

  .sb .header .avatar {
    display: block;
    width: 1.706667rem;
    height: 1.706667rem;
    margin: 0.341333rem auto;
    border-radius: 50%;
  }

  .sb .header .nickname {
    font-size: 14px;
    color: #fff;
    line-height: 0.512rem;
    font-weight: 500;
    text-align: center;
  }

  .sb .menu .item {
    display: block;
    font-size: 15px;
    padding: 10px 10px;
    text-align: left;
    text-indent: 1px;
    line-height: 15px;
    color: #a6adb3;
    font-weight: 700;
    border-bottom: 1px solid #fff;
    position: relative;
  }

  .sb .menu .item .icon {
    display: inline-block;
    width: 0.682667rem;
    height: 0.682667rem;
    background-color: #383c40;
    border-radius: 50%;
    vertical-align: top;
    text-align: center;
  }

  .sb .menu .item .icon .iconfont {
    color: #999999;
    line-height: 0.682667rem;
    font-size: 20px;
    font-weight: 700;
  }

  .sb .menu .item .menu-text {
    display: inline-block;
    font-size: 15px;
    line-height: 32px;
    vertical-align: top;
    margin-left: 10px;
    font-weight: 700;
  }
</style>
