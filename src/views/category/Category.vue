<template>
  <div id="category" class="ptb">
    <topbar class="topbar">
      <template v-slot:left>
        <div class="backBtn" @click="backClick">
          <i class="fa fa-angle-left"></i>
        </div>
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

    <div class="d-flex">
      <tab-menu class="menu"/>
      <tab-content class="content"/>
    </div>
  </div>
</template>

<script>
  import Topbar from "@/components/common/Topbar"
  import TabMenu from "./TabMenu"
  import TabContent from "./TabContent"

  export default {
    name: "Category",
    components: {
      Topbar,
      TabMenu,
      TabContent
    },
    methods: {
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .topbar {
    border-bottom: 1px solid #ddd;
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

  .menu {
    width: 25%;
    min-height: calc(100% -95px);
    height: auto;
    overflow: scroll;
  }

  .content {
    width: 75%;
    min-height: 100%;
    height: auto;
    background: #fff;
  }
</style>