<template>
  <div class="album-cover">
    <div class="album-image">
      <img :src="coverImage" alt=""/>
      <a href="/todo" class="cover image_cover">{{info.name}}</a>
    </div>
    <div class="album-info">
      <div class="name text-nowrap">{{info.name}}</div>
      <div class="artist text-nowrap">{{info.artist.name}}</div>
    </div>
  </div>
</template>

<script>
  import {getCount,getSizeImage} from "utils/format-utils";
  export default {
    name: "AlbumCover",
    data(){
      return{
        coverImage:[],
      }
    },
    props:{
      info:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    created() {
      this.coverImage = getSizeImage(this.info.picUrl,140);
    }
  }
</script>

<style scoped>
  .album-cover{
    display: inline-block;
  }
  .album-image {
    position: relative;
    width: 118px;
    height:100px;
    overflow: hidden;
    margin-top: 15px;
  }
  .album-image img{
    width: 100px;
    height:100px;
  }
  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-position: 0 -570px;
    text-indent: -9999px;
  }
  .album-info{
    font-size: 12px;
    width: 118px;
  }
  .name {
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .artist {
    color: #666;
  }
</style>