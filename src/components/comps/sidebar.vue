<template>
  <div class="sb">
    <div class="header">
      <img class="avatar" src="../../assets/logo.png" alt="">
      <div class="nickname">Fuck you</div>
    </div>
    <div class="menu">
      <div v-for="menu in menus" class="item">
        <div class="icon">
          <i class="iconfont icon-people"></i>
        </div>
        <span class="menu-text">{{menu}}</span>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: {
      show: {
        type: Boolean
      }
    },
    data () {
      return {
        menus: {
          home: 'Home',
          addTeacher: 'Add Teacher',
          login: 'Login'
        }
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>


<style scoped>
  .sb {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #22262a;
    z-index: 10;
    width: 4.266667rem;
  }

  .sb .header {
    width: 100%;
    height: 3.072rem;
    background-color: #262d30;
  }

  .sb .header .avatar {
    display: block;
    width: 40%;
    height: auto;
    margin: 0.341333rem 1.194667rem;
    border-radius: 50%;
  }

  .sb .header .nickname {
    font-size: 14px;
    color: #fff;
    line-height: 28px;
    font-weight: 500;
    text-align: center;
  }

  .sb .menu .item {
    display: block;
    font-size: 14px;
    padding: 10px 13px;
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
    width: 0.512rem;
    height: 0.512rem;
    background-color: #383c40;
    border-radius: 50%;
    vertical-align: top;
    text-align: center;
  }

  .sb .menu .item .icon .iconfont {
    color: #999999;
    line-height: 30px;
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
