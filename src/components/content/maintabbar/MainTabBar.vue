<template>
  <div id="main-tab-bar">
     <tab-bar>
       <tab-bar-item path="/home">
         <template #item-icon><div><img src="~assets/img/tabbar/home.svg" alt=""></div></template>
         <template #item-icon-activate><div><img src="~assets/img/tabbar/home_active.svg" alt=""></div></template>
         <template #item-text><div>首页</div></template>
       </tab-bar-item>
       <tab-bar-item path="/category">
         <template #item-icon><div><img src="~assets/img/tabbar/category.svg" alt=""></div></template>
         <template #item-icon-activate><div><img src="~assets/img/tabbar/category_active.svg" alt=""></div></template>
         <template #item-text><div>分类</div></template>
       </tab-bar-item>
       <tab-bar-item path="/cart">
         <template #item-icon><div><img src="~assets/img/tabbar/shopcart.svg" alt=""></div></template>
         <template #item-icon-activate><div><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></div></template>
         <template #item-text><div>购物车</div></template>
       </tab-bar-item>
       <tab-bar-item path="/profile">
         <template #item-icon><div><img src="~assets/img/tabbar/profile.svg" alt=""></div></template>
         <template #item-icon-activate><div><img src="~assets/img/tabbar/profile_active.svg" alt=""></div></template>
         <template #item-text><div>我的</div></template>
       </tab-bar-item>
     </tab-bar>
  </div>
</template>

<script type="text/javascript">
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: "MainTabBar",
  data() {
    return {

    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>