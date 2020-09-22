<template>
  <div class="goods d-flex flex-wrap justify-content-around">
    <goods-item v-for="item in goods" :goods-item="item" :key="item.title"/>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    padding: 5px;
  }
</style>
