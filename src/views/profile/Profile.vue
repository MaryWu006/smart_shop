<template>
  <div>
    <profile-info/>
    <profile-list-view/>
  </div>
</template>

<script>
  import ProfileInfo from "./ProfileInfo"
  import ProfileListView from "./ProfileListView"

  export default {
    name: "Profile",
    components: {
      ProfileInfo,
      ProfileListView
    }
  }
</script>

<style scoped>

</style>