<template>
  <div class="list-view">
    <div class="orderBox">
      <div class="title d-flex justify-content-between">
        <h5>我的订单</h5>
        <span>查看全部 <i class="fa fa-angle-double-right"></i></span>
      </div>
      <div class="icon d-flex justify-content-around">
        <div>
          <img src="@/assets/img/order01.png">
          <span>待付款</span>
        </div>
        <div>
          <img src="@/assets/img/order02.png">
          <span>配送中</span>
        </div>
        <div>
          <img src="@/assets/img/order03.png">
          <span>已收货</span>
        </div>
        <div>
          <img src="@/assets/img/order04.png">
          <span>退款售后</span>
        </div>
      </div>
    </div>

    <div class="list">
      <div>
        <i class="fa fa-bell-o"></i>
        <span>消息通知</span>
        <i class="fa fa-angle-right"></i>
      </div>
      <div>
        <i class="fa fa-ticket"></i>
        <span>我的优惠券</span>
        <i class="fa fa-angle-right"></i>
      </div>
      <div>
        <i class="fa fa-map-marker"></i>
        <span>收货地址</span>
        <i class="fa fa-angle-right"></i>
      </div>
      <div>
        <i class="fa fa-history"></i>
        <span>浏览记录</span>
        <i class="fa fa-angle-right"></i>
      </div>
      <div>
        <i class="fa fa-cog"></i>
        <span>退出登录</span>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileListView"
  }
</script>

<style scoped>
  .list-view {
    padding: 10px;
  }

  .orderBox {
    padding: 7px;
    background: #fff;
    border-radius: 5px;
  }

  .title {
    line-height: 28px;
    border-bottom: 1px solid #ddd;
  }

  .title span {
    font-size: 12px;
  }
  
  .icon>div {
    flex: 1;
    padding: 3px 0;
    text-align: center;
    font-size: 13px;
  }

  .icon img {
    width: 35%;
    margin: 5px auto;
  }

  .list {
    margin-top: 10px;
    background: #fff;
    border-radius: 5px;
    line-height: 32px;
    font-size: 14px;
  }

  .list>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  .list>div:last-child {
    border: 0;
  }

  .list>div i {
    width: 35px;
    text-align: center;
    font-size: 15px;
  }

  .list>div span {
    flex: 1;
    color: #232323;
  }
</style>