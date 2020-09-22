<template>
  <div class="topbar d-flex align-items-center">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    name: "Topbar",
  };
</script>

<style scoped>
  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    height: 45px;
    background: #fff;
    text-align: center;
    z-index: 9;
  }
</style>
