<template>
  <div id="mall">
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
  </div>
</template>

<script>
  import Topbar from "@/components/common/Topbar"

  export default {
    name: "Mall",
    components: {
      Topbar
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
