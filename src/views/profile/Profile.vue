<template>
  <div>
    <profile-info/>
    <profile-list-view/>
    <navbar/>
  </div>
</template>

<script>
  import Navbar from "@/components/content/Navbar"
  import ProfileInfo from "./ProfileInfo"
  import ProfileListView from "./ProfileListView"

  export default {
    name: "Profile",
    components: {
      Navbar,
      ProfileInfo,
      ProfileListView
    }
  }
</script>

<style scoped>

</style>