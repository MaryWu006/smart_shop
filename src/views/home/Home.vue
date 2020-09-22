<template>
  <div id="home" class="ptb">
    <topbar class="home-topbar">
      <template v-slot:left>
        <div class="left"><i class="fa fa-map-marker"></i> 深圳技师学院</div>
      </template>
      <template v-slot:center>
        <div class="center">
          <input type="text" placeholder="搜索商品" />
        </div>
      </template>
      <template v-slot:right>
        <div class="icon-bell">
          <i class="fa fa-bell"></i>
        </div>
      </template>
    </topbar>

    <home-swiper/>
    <home-icons/>
    <home-activity/>
    <tab-control class="tabControl" @tab-click="tabClick"/>
    <goods-list :goods="goods[currentType].list"/>
  </div>
</template>

<script>
  import Topbar from "@/components/common/Topbar"
  import HomeSwiper from "./HomeSwiper"
  import HomeIcons from "./HomeIcons"
  import HomeActivity from "./HomeActivity"
  import TabControl from "@/components/content/TabControl"
  import GoodsList from "@/components/content/goods/GoodsList"

  export default {
    name: "Home",
    components: {
      Topbar,
      HomeSwiper,
      HomeIcons,
      HomeActivity,
      TabControl,
      GoodsList
    },
    data() {
      return {
        goods: {
          'recommend': {page: 0, list: [
            {
              productId: "r1",
              img: "../../assets/img/product01.jpg",
              title: "盼盼番茄鸡味块105g",
              price: "4.00",
              discount: "推荐"
            },
            {
              productId: "r2",
              img: "../../assets/img/product01.jpg",
              title: "盼盼番茄鸡味块105g",
              price: "4.00",
              discount: "火爆"
            }
          ]},
          'news': {page: 0, list: [
            {
              productId: "n1",
              img: "../../assets/img/product01.jpg",
              title: "盼盼番茄鸡味块105g",
              price: "4.00",
              discount: "新品"
            },
            {
              productId: "n2",
              img: "../../assets/img/product01.jpg",
              title: "盼盼番茄鸡味块105g",
              price: "4.00",
              discount: "新品"
            }
          ]},
          'special': {page: 0, list: [
            {
              productId: "s1",
              img: "../../assets/img/product01.jpg",
              title: "盼盼番茄鸡味块105g",
              price: "4.00",
              discount: "八折"
            },
            {
              productId: "s2",
              img: "../../assets/img/product01.jpg",
              title: "盼盼番茄鸡味块105g",
              price: "4.00",
              discount: "八折"
            }
          ]}
        },
        currentType: "recommend"
      }
    },
    methods: {
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = "recommend"
            break
          case 1:
            this.currentType = "news"
            break
          case 2:
            this.currentType = "special"
            break
        }
      }
    }
  }
</script>

<style scoped>
  .home-topbar {
    background: var(--color-high-text);
    color: #fff;
  }

  .left {
    width: 100px;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }

  .center {
    flex: 1;
    padding: 0 5px;
  }

  .center input {
    width: 90%;
    border-radius: 30px;
    border: 1px solid #999;
  }

  .tabControl {
    position: sticky;
    top: 45px;
  }
</style>
