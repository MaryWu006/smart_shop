<template>
  <div class="bottom-bar d-flex align-items-center justify-content-around">
    <div>
      <input type="checkbox">
      <span>全选</span>
    </div>
    <p class="text">不含运费</p>
    <p>总计：<span class="price">￥10.00</span></p>
    <div class="count">结算({{1}})</div>
  </div>
</template>

<script>
  export default {
    name: "CartBottomBar"
  }
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    line-height: 45px;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    z-index: 9;
  }

  input {
    vertical-align: middle;
    margin-right: 3px;
  }

  .text {
    font-size: 12px;
  }

  .price {
    color: #f60;
    font-weight: 600;
    font-size: 16px;
  }

  .count {
    width: 100px;
    line-height: 32px;
    border-radius: 50px;
    background-image: linear-gradient(90deg, var(--color-tint), var(--color-high-text));
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
</style>