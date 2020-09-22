<template>
  <div id="cart" class="ptb">
    <topbar class="cart-topbar">
      <template v-slot:center>
        <div class="center">购物车({{12}})</div>
      </template>
      <template v-slot:right>
        <div class="right">管理</div>
      </template>
    </topbar>

    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import Topbar from "@/components/common/Topbar"
  import CartList from "./CartList"
  import CartBottomBar from "./CartBottomBar"

  export default {
    name: "Cart",
    components: {
      Topbar,
      CartList,
      CartBottomBar
    },
  }
</script>

<style scoped>
  #cart {
    padding-bottom: 100px;
  }

  .cart-topbar {
    background: var(--color-high-text);
    color: #fff;
    text-align: center;
  }

  .center {
    flex: 1;
  }

  .right {
    padding-right: 5px;
    font-size: 14px;
  }
</style>