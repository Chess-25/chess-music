<template>
  <div>
    <a-carousel autoplay ref="bannerRef">
      <div class="i">
        <div class="j" v-for="item in swiper1">
          <AlbumCover class="album-cover" :info="item"/>
        </div>
      </div>
      <div class="i">
        <div class="j" v-for="item in swiper2">
          <AlbumCover :info="item"/>
        </div>
      </div>
    </a-carousel>
  </div>
</template>

<script>
  import AlbumCover from "components/content/albumCover/AlbumCover";
  import {getCount,getSizeImage} from "utils/format-utils";
  import AlbumSwiperItem from "./AlbumSwiperItem"
  export default {
    name: "AlbumSwiper",
    components:{
      AlbumCover,
      AlbumSwiperItem
    },
    data(){
      return{
        coverImage:[],
        a:[1,2,3,4,5],
        swiper1:[],
        swiper2:[]
      }
    },
    props:{
      info:{
        type:Array,
        default(){
          return []
        }
      }
    },
    created() {
      setTimeout(()=>{
        this.swiper1 = [...this.info].slice(0,5);
        this.swiper2 = [...this.info].slice(5,10);
      },200);
    },
    mounted(){
    
    },
    computed:{
      // evenNum(){
      //   return this.Num.filter(item => item<6);
      // }
    },
  }
  // var a = [1,2,3,4,5];  //定义数组
  // var b = a.splice(2);  //从第三个元素开始执行删除
  // console.log(b);
</script>

<style scoped>
  .i{
    display:inline-block;
  }
 
  .j{
    display:inline-block;
    padding-right: 19px;
    /*padding-left: 10px;*/
  }
  .album-cover{
    position: relative;
    left: 10px;
  }
</style>