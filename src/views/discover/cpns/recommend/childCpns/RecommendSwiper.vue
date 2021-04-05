<template>
  <div>
    <a-carousel class="carousel">
      <div v-for="item in banners">
        <img :src="item.imageUrl">
      </div>
    </a-carousel>
  </div>
</template>

<script>
  import Swiper from "components/content/swiper/Swiper";
  export default {
    name: "RecommendSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper
    },
    
  }
</script>

<style scoped>

</style>