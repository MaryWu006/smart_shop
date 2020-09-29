<template>
  <div id="location" class="ptb">
    <topbar class="location-topbar">
      <template v-slot:left>
        <div class="backBtn" @click="backClick">
          <i class="fa fa-angle-left"></i>
        </div>
      </template>
      <template v-slot:center>
        <div class="center">位置</div>
      </template>
    </topbar>

    <div class="selectBox">
      <p>当前城市商城校区：</p>
      <div>
        <button
         v-for="(item, index) in location"
         :key="item.id"
         :class="{ selected: selectedIndex === index }"
         @click="selectStore(index, item.id, item.storeName, item.ext1)">
          {{item.storeName}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Topbar from "@/components/common/Topbar"

  import { checkStore } from "@/network/request"

  export default {
    name: "Location",
    components: {
      Topbar
    },
    data() {
      return {
        location: [],
        selectedIndex: 0
      }
    },
    created() {
      checkStore({}).then(res => {        
        this.location = res.data.list
      })
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      selectStore(index, id, name, phone) {
        this.selectedIndex = index
        this.$store.commit("selectedStore/CHANGE_STORE", {
          id,
          index,
          name,
          phone
        })
        this.$router.push("/home")
      }
    }
  }
</script>

<style scoped>
  .location-topbar {
    background: var(--color-high-text);
    color: #fff;
  }

  .center {
    flex: 1;
    padding: 0 5px;
  }

  .selectBox {
    padding: 15px 10px;
    background: #fff;
    font-size: 15px;
    color: #333;
  }
  .selectBox p {
    margin-bottom: 10px;
  }

  .selectBox button {
    margin: 5px 10px;
    padding: 3px 10px;
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
  }

  button.selected {
    border-color: var(--color-high-text);
  }
</style>