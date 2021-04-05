<template>
  <div class="player">
    <div class="content wrap-v2">
      <div class="play-left">
        <h2>HYPlayerInfo</h2>
        <h2>HYSongContent</h2>
      </div>
      <div class="play-right">
        <h2>HYSimiPlayList</h2>
        <h2>HYSimiSongs</h2>
        <h2>download</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Player",
    data(){
      return{
        currentSong:{}
      }
    }
  }
</script>

<style scoped>
 .player{
 
 }
  .content{
    background-image: url("~assets/img/wrap-bg.png");
    background-color: #fff;
    display: flex;
  }
  .play-left{
    width: 710px;
  }
  .play-right{
    width: 270px;
    padding: 20px 40px 40px 30px;
  }
</style>