<template>
  <div class="swiper">
    <a-carousel autoplay>
      <div>
        <slot></slot>
      </div>
    </a-carousel>
  </div>
</template>

<script>
  
  import AlbumCover from "components/content/albumCover/AlbumCover";
  export default {
    name: "Swiper",
    components: {
      AlbumCover
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>

</style>