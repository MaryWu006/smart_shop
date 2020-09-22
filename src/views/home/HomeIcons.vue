<template>
  <div class="iconsBox d-flex flex-wrap justify-content-around">
    <a href="javascript:;">
      <img src="@/assets/img/icon01.png">
      <span>休闲零食</span>
    </a>
    <a href="javascript:;">
      <img src="@/assets/img/icon02.png">
      <span>酒水饮料</span>
    </a>
    <a href="javascript:;">
      <img src="@/assets/img/icon03.png">
      <span>水果生鲜</span>
    </a>
    <a href="javascript:;">
      <img src="@/assets/img/icon04.png">
      <span>粮油副食</span>
    </a>
    <a href="javascript:;">
      <img src="@/assets/img/icon05.png">
      <span>生活用品</span>
    </a>
    <a href="javascript:;">
      <img src="@/assets/img/icon06.png">
      <span>家装家居</span>
    </a>
    <a href="javascript:;">
      <img src="@/assets/img/icon07.png">
      <span>个护清洁</span>
    </a>
    <a href="javascript:;">
      <img src="@/assets/img/icon08.png">
      <span>美妆护肤</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
  };
</script>

<style scoped>
  img {
    width: 70%;
    margin: 0 auto;
  }

  .iconsBox {
    margin-top: 15px;
    width: 100%;
  }

  .iconsBox a {
    display: block;
    padding: 3px 5px;
    width: 25%;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
  }
</style>
