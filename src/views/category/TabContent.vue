<template>
  <div class="tab-content">
    <div class="tab-select">
      <button class="selected">默认</button>
      <button>
        价格
        <i class="fa fa-unsorted"></i>
      </button>
    </div>

    <div class="list">
      <div class="d-flex align-items-center" v-for="item in 8" :key="item">
        <img src="@/assets/img/product03.jpg">
        <div class="text">
          <p>休闲零食85g</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="price">￥9.90</span>
            <button class="fa fa-cart-plus"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabContent"
  }
</script>

<style scoped>
  .tab-content {
    padding: 10px;
  }

  .tab-select button {
    margin: 5px 10px;
    padding: 3px 10px;
    background: transparent;
    border: 1px solid #777;
    border-radius: 3px;
    color: #777;
    font-size: 12px;
  }

  .tab-select button.selected {
    border-color: var(--color-high-text);
    color: var(--color-high-text);
  }

  .list {
    margin-top: 15px;
  }

  .list>div {
    margin-bottom: 5px;
  }
  
  .list img {
    width: 80px;
    height: 80px;
  }

  .text {
    padding-left: 5px;
    padding-right: 10px;
    flex: 1;
    height: 80px;
    border-bottom: 1px solid #ddd;
  }

  .list>div:last-child .text {
    border-bottom: 0;
  }

  .text p {
    margin: 10px 0;
    font-size: 14px;
    color: #333;
  }

  .price {
    color: #f60;
    font-size: 16px;
  }

  .text button {
    width: 30px;
    height: 30px;
    background: transparent;
    border: 1px solid var(--color-high-text);
    border-radius: 50%;
    text-align: center;
    color: var(--color-high-text);
  }
</style>