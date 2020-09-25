<template>
  <div class="mall-card">
    <div class="card">
      <p>当前积分</p>
      <h3 class="d-flex align-items-center">
        <img src="@/assets/img/integral01.png">
        <span>300</span>
      </h3>
      <div>
        <button>积分明细</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MallCard"
  }
</script>

<style scoped>
  .mall-card {
    padding: 10px;
  }

  .card {
    width: 100%;
    height: 100px;
    padding: 5px 20px;
    box-shadow: 0 0 5px #fcaa5b;
    background-image: linear-gradient(90deg, #fbbe69, #fe974a);
    border-radius: 5px;
  }

  .card p {
    line-height: 30px;
    font-size: 15px;
  }

  .card img {
    display: inline-block;
    width: 30px;
    margin-right: 5px;
  }

  .card h3 {
    font-size: 24px;
    color: #333;
  }

  .card > div {
    text-align: right;
  }

  .card button {
    padding: 2px 10px;
    background: transparent;
    border: 1px solid #666;
    border-radius: 20px;
    font-size: 14px;
    color: #666;
  }
</style>