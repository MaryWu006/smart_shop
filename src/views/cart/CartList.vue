<template>
  <ul>
    <li class="d-flex align-items-center" v-for="item in 10" :key="item">
      <div>
        <input type="checkbox">
      </div>
      <div>
        <img src="@/assets/img/product01.jpg">
      </div>
      <div class="info">
        <p class="title">趣多多香脆曲奇100g</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="price">￥8.00</div>
          <div class="quantity">
            <span @click="decrease">-</span>
            <input type="number" :value="num" min="1" max="10">
            <span @click="increase">+</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "CartList",
    data() {
      return {
        num: 1
      }
    },
    methods: {
      decrease() {
        this.num -= 1
      },
      increase() {
        this.num += 1
      }
    }
  }
</script>

<style scoped>
  ul {
    padding: 10px;
  }

  li {
    margin-bottom: 7px;
    padding: 0 7px;
    background: #fff;
    border-radius: 5px;
  }

  li img {
    width: 100px;
    margin: 0 15px;
  }

  .info {
    flex: 1;
  }

  .title {
    margin-bottom: 20px;
    font-size: 14px;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }

  .price {
    color: #f60;
    font-size: 14px;
  }

  .quantity {
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: center;
  }

  .quantity span {
    display: inline-block;
    width: 20px;
    font-size: 18px;
    vertical-align: middle;
  }

  .quantity input {
    padding: 0;
    width: 30px;
    line-height: 20px;
    border: 0;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    text-align: center;
    vertical-align: middle;
  }
</style>