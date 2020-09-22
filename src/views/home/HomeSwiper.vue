<template>
    <swiper class="home-swiper">
      <swiper-item>
        <a href="javascript:;">
          <img src="@/assets/img/banner01.jpg">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="javascript:;">
          <img src="@/assets/img/banner02.jpg">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="javascript:;">
          <img src="@/assets/img/banner03.jpg">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="javascript:;">
          <img src="@/assets/img/banner04.jpg">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from "@/components/common/swiper";

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem,
    },
  };
</script>

<style scoped>
  .home-swiper a {
    display: block;
    padding: 0 10px;
  }

  .home-swiper img {
    border-radius: 5px;
    box-shadow: 0 0 6px rgba(100, 100, 100, .5);
  }

  .home-swiper::before {
    content: "";
    position: absolute;
    top: 0;
    left: -25%;
    width: 150%;
    height: 100px;
    background-image: linear-gradient(0deg, #38b2f3, #0288d1 50%);
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    z-index: -1;  
  }
</style>
