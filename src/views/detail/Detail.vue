<template>
  <div id="detail" class="ptb">
    <topbar class="detail-topbar">
      <template v-slot:left>
        <div class="backBtn" @click="backClick">
          <i class="fa fa-angle-left"></i>
        </div>
      </template>
      <template v-slot:center>
        <div class="center">商品详情</div>
      </template>
      <template v-slot:right>
        <div class="icon-bell">
          <i class="fa fa-bell"></i>
        </div>
      </template>
    </topbar>

    <detail-swiper :images="images"/>
    <detail-infos :infos="infos"/>
    <detail-images :goods-info="goodsInfo"/>
    <goods-list :goods="recommend"/>
    <detail-bottom-bar @add-cart="addToCart"/>
  </div>
</template>

<script>
  import Topbar from "@/components/common/Topbar"
  import DetailSwiper from "./DetailSwiper"
  import DetailInfos from "./DetailInfos"
  import DetailImages from "./DetailImages"
  import GoodsList from "@/components/content/goods/GoodsList"
  import DetailBottomBar from "./DetailBottomBar"

  export default {
    name: "Detail",
    data() {
      return {
        productId: null,
        images: [""],
        infos: {
          title: "盼盼番茄鸡味块 105g",
          price: "4.00",
          express: "0.00",
          discount: "满20减3"
        },
        goodsInfo: [""],
        recommend: [
          {
            productId: "r1",
            img: "../../assets/img/product01.jpg",
            title: "盼盼番茄鸡味块105g",
            price: "4.00",
          },
          {
            productId: "s1",
            img: "../../assets/img/product01.jpg",
            title: "盼盼番茄鸡味块105g",
            price: "4.00",
          }
        ]
      }
    },
    components: {
      Topbar,
      DetailSwiper,
      DetailInfos,
      DetailImages,
      GoodsList,
      DetailBottomBar
    },
    created() {
      this.productId = this.$route.params.productId
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      addToCart() {
        console.log("添加到购物车")
      }
    }
  }
</script>

<style scoped>
  .detail-topbar {
    box-shadow: 0 1px 20px rgba(100, 100, 100, 0.2);
  }

  .center {
    flex: 1;
    text-align: center;
  }
</style>