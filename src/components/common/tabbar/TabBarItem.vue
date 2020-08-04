<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-activate"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "TabBarItem",
  data() {
    return {
        // isActive: true
    }
  },
  computed: {
      isActive() {
          return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
          return this.isActive ? {color: this.activeColor} : {}
      }
  },
  props: {
      path: String,
      activeColor: {
        type: String,
        default: "red"
      }
  },
  methods: {
      itemClick() {
          this.$router.replace(this.path).catch(err => {})
      }
  },
}
</script>

<style scoped>
    .tab-bar-item{
    height: 49px;
    flex: 1;
    text-align: center;
    
  } 
  
  .tab-bar-item img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      margin-bottom: 2px;
      vertical-align: middle
  }

</style>