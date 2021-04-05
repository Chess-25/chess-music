<template>
  <div class="new-album">
    <ThemeHeader :themeTitle="themeTitle" :keywords=" keywords"/>
    <div class="content">
      <button class="arrow arrow-left sprite_02"
              @click="prevClick"></button>
      <div class="album">
        <!--<a-carousel autoplay ref="bannerRef">-->
          <!--<AlbumSwiper :info="albums"/>-->
        <!--</a-carousel>-->
        <AlbumSwiper class="swiper" ref="bannerRef" :info="albums"/>
      </div>
      <button class="arrow arrow-right sprite_02"
              @click="nextClick"></button>
    </div>
  </div>
</template>

<script>
  import ThemeHeader from "components/content/themeHeader/ThemeHeader";
  import AlbumCover from "components/content/albumCover/AlbumCover";
  import AlbumSwiper from "components/content/albumSwiper/AlbumSwiper";
  import Swiper from "components/common/swiper/Swiper";
  export default {
    name:"NewAlbum",
    data(){
      return{
        themeTitle: "新碟上架",
        keywords:[]
      }
    },
    components:{
      ThemeHeader,
      AlbumCover,
      AlbumSwiper,
      Swiper
    },
    props:{
      albums:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      prevClick(){
        this.$refs.bannerRef.$refs.bannerRef.prev();
      },
      nextClick(){
        this.$refs.bannerRef.$refs.bannerRef.next();
      }
    },
    // mounted() {
    //   console.log(this.$refs.bannerRef.$refs.bannerRef);
    // }
  }
</script>

<style scoped>
  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;
  }
  .arrow {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .arrow-left {
    background-position: -260px -75px;
  }
  .arrow-right {
    background-position: -300px -75px;
  }
  .album{
    margin: auto auto;
    width: 685px;
    height: 150px;
  }
  .ant-carousel .slick-slide {
    height: 150px;
    overflow: hidden;
  }
  .page {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }
</style>