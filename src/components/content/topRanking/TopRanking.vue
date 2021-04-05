<template>
  <div class="top-ranking">
    <div class="header">
      <div class="image">
        <img :src="coverImage" alt=""/>
        <a href="/todo" class="image_cover">ranking</a>
      </div>
      <div class="info">
        <a href="/todo">{{info.name}}</a>
        <div>
          <button class="btn play sprite_02"></button>
          <button class="btn favor sprite_02"></button>
        </div>
      </div>
    </div>
    <div class="list">
      <template v-for="(item,index) in songNames">
        <div class="list-item">
          <div class="rank">{{index + 1}}</div>
          <div class="list-info">
            <span class="name text-nowrap">{{item.name}}</span>
            <div class="operate">
              <button class="btn sprite_02 play" @click="playMusic(item)"
                      ></button>
              <button class="btn sprite_icon2 addto"></button>
              <button class="btn sprite_02 favor"></button>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="footer">
      <a href="/todo">查看全部 &gt;</a>
    </div>
  </div>
</template>

<script>
  import {getCount,getSizeImage} from "utils/format-utils";
  export default {
    name: "TopRanking",
    data(){
      return{
        coverImage:[],
        songNames:[],
      }
    },
    props:{
      info:{
        type:Object,
        default(){
          return {}
        }
      },
    },
    methods:{
      playMusic(item){
        this.$bus.$emit('play',item)
      }
    },
    created() {
      setTimeout(()=>{
        this.coverImage = getSizeImage(this.info.coverImgUrl,140);
        this.songNames = this.info.tracks.slice(0,10);
      },1000)
      // console.log(this.info.tracks.slice(0, 10));
      // console.log(this.songNames);
    }
  }
</script>

<style scoped>
  .top-ranking{
    flex: 1;
  }
  .header{
    height: 100px;
    display: flex;
    
    margin: 20px 0 0 20px;
  }
  .image{
    width: 80px;
    height: 80px;
    position: relative;
  }
  .image img{
    width: 80px;
    height: 80px;
  }
  .info{
    margin: 5px 0 0 10px;
  }
  .info a{
    font-size: 14px;
    color: #333;
    font-weight: 700;
  }
  .btn {
    display: inline-block;
    text-indent: -9999px;
    width: 22px;
    height: 22px;
    margin: 8px 10px 0 0;
    cursor: pointer;
  }
  .play {
    background-position: -267px -205px;
  }
  .favor {
    background-position: -300px -205px;
  }
  .list{
  
  }
  .list-item{
    position: relative;
    display: flex;
    align-items: center;
    height: 32px;
  }
  .list-item:nth-child(-n+3) .rank{
    color: #c10d0c;
  }
  .rank {
    width: 35px;
    text-align: center;
    margin-left: 10px;
    font-size: 16px;
  }
  
  .list-info {
    color: #000;
    width: 170px;
    height: 17px;
    line-height: 17px;
    display: flex;
    justify-content: space-between;
  }
  .list-info:hover .operate{
    display: block;
    align-items: center;
  }
  .name {
    flex: 1;
  }
  .operate{
    display: flex;
    margin-top: -8px;
    display: none;
    width: 82px;
  }
  .btn {
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
  .play {
    background-position: -267px -268px;
  }
  .addto {
    position: relative;
    top: 2px;
    background-position: 0 -700px;
  }
  .favor {
    background-position: -297px -268px;
  }
  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;
  }
  .footer a {
    color: #000;
  }
</style>