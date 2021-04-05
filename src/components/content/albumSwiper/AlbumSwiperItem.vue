<template>
  <div class="n">
    <div class="i"><slot name="swiper1"></slot></div>
    <div class="i"><slot name="swiper2"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "AlbumSwiperItem"
  }
</script>

<style scoped>
  .n{
    display:inline-block;
  }
  .i{
    display:inline-block;
  }
</style>