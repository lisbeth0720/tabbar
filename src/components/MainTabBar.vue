<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img src="../assets/img/tabbar/home.svg" alt="" slot="item-icon" />
        <img src="../assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
         <img src="../assets/img/tabbar/category.svg" alt="" slot="item-icon" />
         <img src="../assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
         <img src="../assets/img/tabbar/cart.svg" alt="" slot="item-icon" />
         <img src="../assets/img/tabbar/cart_active.svg" alt="" slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
         <img src="../assets/img/tabbar/profile.svg" alt="" slot="item-icon" />
         <img src="../assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar.vue';
import TabBarItem from './tabbar/TabBarItem.vue';

export default {
  name: '',
  components: {//在components里注册组件后才能在模板里使用
   TabBar,
   TabBarItem
  }
}
</script>

<style>
 

</style>
