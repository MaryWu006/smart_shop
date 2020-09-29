<template>
  <div class="mall-category">
    <scroll :scrollX="true" class="content">
      <div 
        v-for="(item, index) in items"
        :key="index"
        class="title"
        :class="{ current: currentIndex === index }"
        @click="itemClick(index)"
      >
        {{item}}
      </div>
    </scroll>

    <div class="goodsList">
      <div class="d-flex align-items-center" v-for="item in 5" :key="item">
        <img src="@/assets/img/product04.jpg">
        <div>
          <p class="title">好丽友好多鱼</p>
          <p class="integral">120积分</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Scroll from "@/components/common/Scroll"

  export default {
    name: "MallCategory",
    data() {
      return {
        items: ["热兑", "生活", "零食", "居家", "酒水", "个护", "清洁", "卡券"],
        currentIndex: 0
      }
    },
    components: {
      Scroll
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      } 
    }
  }
</script>

<style scoped>
  .mall-category {
    margin: 10px;
    overflow: hidden;
  }

  .content {
    width: 100%;
    height: 45px;
  }

  .content>div {
    width: 400px;
  }

  .content .title {
    display: inline-block;
    width: 50px;
    line-height: 45px;
    font-size: 15px;
    color: #323232;
  }

  .content .current {
    color: var(--color-high-text);
  }

  .goodsList {
    background: #fff;
    border-radius: 5px;
  }

  .goodsList>div {
    padding: 0 5px;
    font-size: 14px;
  }

  .goodsList img {
    width: 100px;
  }

  .integral {
    margin-top: 10px;
    color: #f60;
    font-size: 16px;
  }
</style>