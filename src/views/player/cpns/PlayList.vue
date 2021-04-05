<template>
  <div class="play-list">
    <div class="left">
      <div class="left-top">
        <div>播放列表({{showPlayList.length}})</div>
        <div>收藏全部</div>
        <div>清除</div>
      </div>
      <div v-for="(item,index) in showPlayList"
          class="show-play-list"
          @click="getLyric(index)">
        <div class="">{{item.name}}</div>
      </div>
    </div>
    <div class="right">
      <div v-if="showName" class="right-top">{{songs.name}}</div>
      <div v-else class="right-top">{{lyric.name}}</div>
      <div>{{lyricList}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PlayList",
    data(){
      return{
        lyric:{},
        songIndex: {},
        showName:true
      }
    },
    props:{
      showPlayList:{
        type:Array,
        default(){
          return[]
        }
      },
      songs:{
        type:Object,
        default() {
          return {};
        }
      },
      lyricList:{
        type:Array,
        default(){
          return[]
        }
      },
    },
    created(){
    },
    methods:{
      getLyric(index){
        this.showName = false;
        this.lyric = this.showPlayList[index]
      }
    }
  }
</script>

<style scoped>
  .play-list{
    display: flex;
    height: 300px;
    color: white;
    font-size: 16px;
  }
  .left{
    width: 550px;
    border-right:3px solid #333;
  }
  .left-top{
    display: flex;
    height: 40px;
    border-top-left-radius:7px;
    background-color: #333;
    padding-left: 10px;
  }
  .left-top div{
    margin: auto 0;
  }
  .show-play-list{
  }
  .right{
    flex: 1;
  }
  .right-top{
    height: 40px;
    border-top-right-radius:7px;
    background-color: #333;
  }
</style>