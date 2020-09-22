<template>
  <div id="navbar" class="d-flex align-items-center">
    <router-link to="/home">
      <i class="fa fa-home"></i>
      <span class="d-block">首页</span>
    </router-link>
    <router-link to="/mall">
      <i class="fa fa-cubes"></i>
      <span class="d-block">积分商城</span>
    </router-link>
    <router-link to="/cart">
      <i class="fa fa-shopping-cart"></i>
      <span class="d-block">购物车</span>
    </router-link>
    <router-link to="/profile">
      <i class="fa fa-user"></i>
      <span class="d-block">我的</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  };
</script>

<style scoped>
  #navbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    background: #fff;
    box-shadow: 0 -1px 10px rgba(100, 100, 100, 0.2);
  }

  #navbar a {
    display: block;
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  #navbar i {
    display: block;
    font-size: 20px;
    margin-bottom: 5px;
  }

  .router-link-active {
    color: var(--color-high-text)
  }
</style>