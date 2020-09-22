<template>
  <div class="goods-item" @click="itemClick">
    <img src="@/assets/img/product02.jpg">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span :class="goodsItem.discount ? 'discount' : ''">{{goodsItem.discount}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      /** 跳转到详情页 */
      itemClick() {
        this.$router.push("/detail/" + this.goodsItem.productId)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    margin-bottom: 6px;
    width: 48%;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
  }

  .goods-item img {
    width: 100%;
  }

  .goods-info {
    padding: 7px;
  }

  .goods-info p {
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    font-size: 14px;
  }

  .goods-info .price {
    display: inline-block;
    margin-right: 15px;
    color: #f60;
    font-size: 15px;
    vertical-align: middle;
  }

  .goods-info .discount {
    display: inline-block;
    padding: 1px 3px;
    background: var(--color-high-text);
    border-radius: 2px;
    color: #fff;
    font-size: 12px;
  }
</style>
