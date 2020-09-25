<template>
  <ul>
    <li class="current">休闲零食</li>
    <li>方便面</li>
    <li>面包</li>
    <li>糕点/派</li>
  </ul>
</template>

<script>
  export default {
    name: "TabMenu"
  }
</script>

<style scoped>
  li {
    line-height: 36px;
    text-align: center;
    border-left: 0px solid var(--color-high-text);
    font-size: 14px;
    color: #555;
  }

  li.current {
    border-left-width: 4px;
    color: var(--color-high-text);
  }
</style>