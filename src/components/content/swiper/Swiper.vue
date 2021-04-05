<template>
  <div class="swiper">
    <div class="swiper-item">
      <div class="swiper wrap-v3">
        <a-carousel autoplay class="carousel" ref="bannerRef">
          <div v-for="item in banners">
            <img :src="item.imageUrl">
          </div>
        </a-carousel>
      </div>
      <div class="control">
        <button class="btn left" @click="prevClick"></button>
        <button class="btn right" @click="nextClick"></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    data(){
      return{
        bgImage:null
      }
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      prevClick(){
        this.$refs.bannerRef.prev();
      },
      nextClick(){
        this.$refs.bannerRef.next();
      }
    },
    created() {
    
    }
  }
</script>

<style scoped>
  .swiper{
    background: url("http://p1.music.126.net/W3SoRXLzj0GrWIRr5IQq-Q==/109951165624746725.jpg?imageView&blur=40x20") center center/6000px;
  }
  .swiper-item{
    position: relative;
    display: flex;
  }
  .carousel img{
    height: 285px;
  }
  .control{
    position: absolute;
    height: 63px;
    z-index: 9;
  }
  .btn{
    position: relative;
    width: 37px;
    height: 63px;
    /*background-color: ;*/
    background-image: url("~assets/img/banner_sprite.png");
    cursor: pointer;
  }
  .btn:hover{
    background-color: rgba(0, 0, 0, .1);
  }
  .left {
    left: -68px;
    top:110px;
    background-position: 0 -360px;
    background-color: orange;
  }

  .right {
    right: -1022px;
    top:110px;
    background-position: 0 -508px;
    background-color: orange;
  }
</style>