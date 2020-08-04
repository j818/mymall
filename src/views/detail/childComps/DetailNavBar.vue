<template>
    <nav-bar class="nav-bar">
            <template #left><div @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div></template>
            <template #center >
                <div class="title">
                    <div v-for="(item,index) in titles" 
                        :key="index" 
                        class="title-item"
                        :class="{active: currentIndex === index}"
                        @click="titleClick(index)"
                    >{{item}}</div>
                </div>
            </template>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "DetailNavBar",
  components: {
      NavBar
  },
  data() {
      return {
          titles: ['商品','参数','评论','推荐'],
          currentIndex: 0
      }
  },
  methods: {
      titleClick(index) {
          this.currentIndex = index;
          this.$emit('titleClick', index);
      },
      backClick() {
          this.$router.back()
      }
  },
}
</script>

<style scoped>
.nav-bar{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.nav-bar img{
    margin-top: 10px;
    
}

.title{
    display: flex;
    padding: 0 10px;
}

.title-item{
    flex: 1;
    font-size: 13px;
}

.active{
    color: var(--color-high-text);
}
</style>