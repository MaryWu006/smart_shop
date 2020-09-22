<template>
  <div>
    <p>———— 商品详情 ————</p>
    <div class="imgBox">
      <img src="@/assets/img/product02.jpg">
    </div>
    <p>———— 为你推荐 ————</p>
  </div>
</template>

<script>
  export default {
    name: "DetailImages",
    props: {
      goodsInfo: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  p {
    line-height: 40px;
    text-align: center;
    font-size: 13px;
    color: #999;
  }

  .imgBox {
    margin-bottom: 5px;
  }
</style>