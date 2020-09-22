<template>
  <swiper class="detail-swiper">
      <swiper-item>
        <a href="javascript:;">
          <img src="@/assets/img/product02.jpg">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>  
  import { Swiper, SwiperItem } from "@/components/common/swiper";
  export default {
    name: "DetailSwiper",
    props: {
      images: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem,
    }
  }
</script>

<style scoped>
</style>