<template>
  <div class="bottom-bar d-flex">
    <div @click="addToCart">加入购物车</div>
    <div>立即购买</div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart() {
        this.$emit("add-cart")
      }
    }
  }
</script>

<style>
  .bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 50px;
    background: #f60;
    z-index: 9;
  }

  .bottom-bar>div {
    width: 50%;
    text-align: center;
    color: #fff;
  }

  .bottom-bar>div:first-child {
    background: #f3c42a;
  }

  .bottom-bar>div:last-child {
    background: var(--color-tint);
  }
</style>