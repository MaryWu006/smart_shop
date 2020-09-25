<template>
  <div class="mall-recommend">
    <p>热门推荐</p>
    <div class="goodsList d-flex flex-wrap justify-content-between">
      <div v-for="item in 6" :key="item">
        <p class="title">趣多多香脆曲奇105g</p>
        <div class="integral">100积分</div>
        <img src="@/assets/img/product01.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MallRecommend"
  }
</script>

<style scoped>
  .mall-recommend {
    padding: 0 10px;
    font-size: 14px;
    line-height: 30px;
  }

  .goodsList>div {
    margin-top: 5px;
    padding: 5px;
    width: 32%;
    line-height: 20px;
    background: #fff;
    border-radius: 3px;
  }

  .goodsList img {
    width: 80%;
    margin: 0 auto;
  }

  .title {
    color: #333;
    font-size: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }

  .integral {
    color: #f60;
  }
</style>