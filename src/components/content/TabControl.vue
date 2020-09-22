<template>
  <div class="control d-flex">
    <div v-for="(item, index) in titles"
     :key="item" 
     @click="itemClick(index)"
     :class="{'current': index === currentIndex}">
      {{item}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return ['推荐','新品','特价']
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tab-click', index)
      }
    }
  }
</script>

<style scoped>
  .control {
    margin-top: 15px;
    margin-bottom: 10px;
    background: #fff;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    z-index: 9;
  }

  .control div {
    flex: 1;
    position: relative;
  }

  .current {
    color: #f60;
  }

  .current::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 2px;
    background: #f60;
  }
</style>