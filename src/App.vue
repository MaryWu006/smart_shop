<template>
  <div id="app">
    <router-view/>
    <navbar/>
  </div>
</template>

<script>
  import Navbar from "@/components/content/Navbar.vue"
  
  export default {
    name: "App",
    components: {
      Navbar
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
