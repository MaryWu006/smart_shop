<template>
  <div class="iconsBox d-flex flex-wrap justify-content-around">
    <a
     href="javascript:;"
     v-for="item in catalog"
     :key="item.id"
     @click="linkClick(item.catalogId)"
    >
      <img :src="item.icon">
      <span>{{item.nodeName}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    props: {
      catalog: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      linkClick(catalogId) {
        this.$router.push({
          path: "/category",
          query: {
            catalogId
          }
        })
      }
    }
  };
</script>

<style scoped>
  img {
    width: 70%;
    margin: 0 auto;
  }

  .iconsBox {
    margin-top: 15px;
    width: 100%;
  }

  .iconsBox a {
    display: block;
    padding: 3px 5px;
    width: 25%;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
  }
</style>
