<template>
  <div class="infoBox d-flex align-items-center">
    <img src="@/assets/img/head.png">
    <div class="text">
      <p class="name">聪明惠购</p>
      <p>
        <i class="fa fa-database"></i> 积分：0
      </p>
    </div>
    <div class="register">
      <i class="fa fa-user-plus"></i> 会员注册
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileInfo"
  }
</script>

<style scoped>
  .infoBox {
    padding: 20px 10px 10px;
    font-size: 14px;
  }

  .infoBox>img {
    width: 60px;
    border: 2px solid var(--color-tint);
    border-radius: 50%;
  }

  .text {
    flex: 1;
    margin-left: 20px;
    line-height: 25px;
  }

  .text i {
    color: var(--color-high-text);
  }

  .name {
    font-size: 16px;
    color: #232323;
  }

  .register {
    width: 100px;
    color: #d8b879;
  }
</style>