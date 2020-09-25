<template>
  <div class="mall-category">
    <ul ref="ul">
      <li 
        v-for="(item, index) in items"
        :key="index"
        :class="index === currentIndex ? 'current' : ''"
        @click="itemClick(index)"
      >
        {{item}}
      </li>
    </ul>
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
  export default {
    name: "MallCategory",
    data() {
      return {
        items: ["热兑", "生活", "零食", "居家", "酒水", "个护", "清洁", "卡券"],
        currentIndex: 0
      }
    },
    mounted() {
      let aLi = this.$refs.ul.children
      let totalWidth = 0
      aLi.forEach(ele => {
        totalWidth += ele.offsetWidth
      })
      this.$refs.ul.style.width = totalWidth + "px"
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

  ul {
    height: 45px;
  }

  ul li {
    display: inline-block;
    width: 50px;
    line-height: 45px;
    font-size: 15px;
    color: #323232;
  }

  ul li.current {
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