<template>
  <div v-if="Object.keys(infos).length !== 0">
    <div class="info">
      <p>
        <span class="price">￥{{infos.price}}</span>      
        <span class="discount">{{infos.discount}}</span>
      </p>
      <p class="title">{{infos.title}}</p>
      <p class="express">运费：￥{{infos.express}}</p>
    </div>
    <div class="service">
      <p>
        <span>服务</span>
        <span>送货到寝</span>
        <span><i class="fa fa-angle-right"></i></span>
      </p>
      <p>
        <span>规格</span>
        <span>105g/袋</span>
        <span><i class="fa fa-angle-right"></i></span>
      </p>
      <p>
        <span>快递</span>
        <span>平台推广期包邮</span>
        <span><i class="fa fa-angle-right"></i></span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfos",
    props: {
      infos: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .info {
    padding: 10px 15px;
    background: #fff;
  }

  .price {
    padding-right: 15px;
    color: #f60;
    font-size: 18px;
    font-weight: 600;
    vertical-align: middle;
  }

  .title {
    color: #232323;
    line-height: 30px;
  }

  .express {
    font-size: 13px;
  }

  .discount {
    display: inline-block;
    padding: 1px 3px;
    border: 1px solid var(--color-high-text);
    border-radius: 3px;
    color: var(--color-high-text);
    font-size: 13px;
  }

  .service {
    margin-top: 10px;
    line-height: 35px;
    background: #fff;
  }

  .service p {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
  }

  .service p:last-child {
    border-bottom: 0;
  }

  .service p>span:last-child {
    font-size: 18px;
  }

  .service p>span:nth-child(2) {
    flex: 1;
    padding-left: 20px;
    color: #333;
  }
</style>