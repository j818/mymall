<template>
  <div id="app"> 
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  components: {
    MainTabBar
  }
}
</script>
<style>
  @import './assets/css/base.css';
</style>
