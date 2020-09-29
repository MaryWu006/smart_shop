<template>
  <div id="mall" class="ptb">
    <topbar class="mall-topbar">
      <template v-slot:center>
        <div class="center">积分商城</div>
      </template>
      <template v-slot:right>
        <div class="icon-bell">
          <i class="fa fa-bell"></i>
        </div>
      </template>
    </topbar>

    <mall-card/>
    <mall-recommend/>
    <mall-category/>
    <navbar/>
  </div>
</template>

<script>
  import Topbar from "@/components/common/Topbar"
  import Navbar from "@/components/content/Navbar"
  import MallCard from "./MallCard"
  import MallRecommend from "./MallRecommend"
  import MallCategory from "./MallCategory"

  export default {
    name: "Mall",
    components: {
      Topbar,
      Navbar,
      MallCard,
      MallRecommend,
      MallCategory
    }
  }
</script>

<style scoped>
  .mall-topbar {
    background: var(--color-high-text);
    color: #fff;
  }

  .center {
    flex: 1;
    text-align: center;
  }
</style>
