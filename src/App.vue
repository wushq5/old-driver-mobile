<template>
  <div>
  	<rc-Header></rc-Header>
    <sidebar></sidebar>
    <div style="height: 0.853333rem;"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import rcHeader from './components/comps/header'
import sidebar from './components/comps/sidebar'
export default {
  name: 'app',
  components: {
    rcHeader,
    sidebar
  }
}
</script>

<style>

</style>
