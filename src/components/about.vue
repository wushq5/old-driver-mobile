<template>
  <div>
    <div class="haha">
      苟利國家生死以<br><br>
      豈因禍福避趨之
    </div>
    <div class="donate">
      <button @click="donate1s">Donate 1s</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    donate1s () {
      console.log('天若有情天亦老 我为长者续一秒')

      var m = document.createElement('div')
      m.innerHTML = '- 1s'
      m.style.cssText = 'position: absolute;line-height: 0.597333rem;bottom: 10%;left: 50%;margin-left: -0.682667rem;background: rgba(0, 0, 0, .5); width: 1.365333rem; text-align: center; font-size: 17px; font-weight: 500; border-radius: 0.170667rem; color: #fff;'
      document.body.appendChild(m)
      setTimeout(function () {
        var d = 0.5
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in'
        m.style.opacity = '0'
        setTimeout(function () { document.body.removeChild(m) }, d * 1000)
      }, 2000)
    }
  },
  created: function () {
    this.$store.commit('UPDATE_TITLE')
  }
}
</script>

<style scoped>
  .haha {
    font-size: 20px;
    text-align: center;
    margin: 1.706667rem 0;
  }

  .donate {
    display: flex;
  }

  .donate button {
    margin: 0 auto;
    height: 0.682667rem;
    width: 2.048rem;
    border-radius: 0.256rem;
    background-color: #00BFFF;
    color: #fff;
  }

</style>
