<template>
  <div>
    <PlayList class="show-play-list wrap-v2"
              :show-play-list="playList"
              :songs="songs"
              v-if="showName"
              :lyric-list="lyricList"/>
    <div class="play-bar sprite_player">
      <div class="content wrap-v2">
        <div class="control">
          <button class="sprite_player prev"
                  @click="changeMusic(-1)"></button>
          <button class="sprite_player play"
                  @click="playMusic"
                  :class="{playActive:isPlaying}"></button>
          <button class="sprite_player next"
                  @click="changeMusic(1)"></button>
        </div>
        <div class="play-info">
          <div class="image">
            <a href="/discover/player">
              <img :src="songImage" alt="">
            </a>
          </div>
          <div class="info">
            <div class="song">
              <span class="song-name">{{songs.name}}</span>
              <a href="#/" class="singer-name">{{songerName}}</a>
            </div>
            <div class="progress">
              <a-slider :default-value="30"
                        :value="progress"
                        :disabled="disabled"
                        @change="sliderChange"
                        @afterChange="sliderAfterChange"/>
              <div class="time">
                <span class="now-time">{{showCurrentTime}}</span>
                <span class="divider">/</span>
                <span class="duration">{{showDuration}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="operator">
          <div class="left">
            <button class="sprite_player btn favor"></button>
            <button class="sprite_player btn share"></button>
          </div>
          <div class="right sprite_player">
            <button class="sprite_player btn volume"></button>
            <button class="sprite_player btn loop"
                    @click="changeSequence"
                    :style="getClass()"></button>
            <button class="sprite_player btn playlist"
                    @click="playListClick"></button>
          </div>
        </div>
      </div>
      <audio ref="audioRef" @timeupdate="songTime"></audio>
    </div>
  </div>
</template>

<script>
  import PlayList from "./PlayList"
  
  import {getSongDetail,getLyric} from "network/player";
  import {getSizeImage,formatDate,getPlaySong} from "utils/format-utils";
  import {getRandomNumber} from "utils/math-utils";
  import {parseLyric} from "utils/parse-lyric";
  export default {
    name: "PlayerBar",
    components:{
      PlayList
    },
    data() {
      return {
        disabled: false,
        songs:{},
        songerName:null,
        songImage:[],
        sequence:0,// 0 循环 1随机 2单曲
        showDuration:0,
        durationTime:0,
        showCurrentTime:"00:00",
        progress:0,
        isChanging:false,
        isPlaying:false,
        currentTime:0,
        playList:[
          {
            "name": "有何不可",
            "id": 167876,
            "pst": 0,
            "t": 0,
            "ar": [
              {
                "id": 5771,
                "name": "许嵩",
                "tns": [],
                "alias": []
              }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "600902000007916021",
            "fee": 8,
            "v": 49,
            "crbt": null,
            "cf": "",
            "al": {
              "id": 16953,
              "name": "自定义",
              "picUrl": "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
              "tns": [],
              "pic_str": "18590542604286213",
              "pic": 18590542604286212
            },
            "dt": 241840,
            "h": {
              "br": 320000,
              "fid": 0,
              "size": 9675799,
              "vd": -21099
            },
            "m": {
              "br": 192000,
              "fid": 0,
              "size": 5805497,
              "vd": -18400
            },
            "l": {
              "br": 128000,
              "fid": 0,
              "size": 3870346,
              "vd": -16900
            },
            "a": null,
            "cd": "1",
            "no": 3,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 2,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "mst": 9,
            "cp": 14026,
            "rtype": 0,
            "rurl": null,
            "publishTime": 1231516800000
          },
          {
            "name": "雅俗共赏",
            "id": 411214279,
            "pst": 0,
            "t": 0,
            "ar": [
              {
                "id": 5771,
                "name": "许嵩",
                "tns": [],
                "alias": []
              }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": null,
            "fee": 8,
            "v": 31,
            "crbt": null,
            "cf": "",
            "al": {
              "id": 34749138,
              "name": "青年晚报",
              "picUrl": "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
              "tns": [],
              "pic": 3431575794705764
            },
            "dt": 249621,
            "h": {
              "br": 320000,
              "fid": 0,
              "size": 9987177,
              "vd": -22200
            },
            "m": {
              "br": 192000,
              "fid": 0,
              "size": 5992323,
              "vd": -19600
            },
            "l": {
              "br": 128000,
              "fid": 0,
              "size": 3994896,
              "vd": -17800
            },
            "a": null,
            "cd": "1",
            "no": 2,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 5302271,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 14026,
            "publishTime": 1461723397683
          },
          {
            "name": "嚣张",
            "id": 1382596189,
            "pst": 0,
            "t": 0,
            "ar": [
              {
                "id": 32220939,
                "name": "en",
                "tns": [],
                "alias": []
              }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 10,
            "crbt": null,
            "cf": "",
            "al": {
              "id": 80816891,
              "name": "嚣张",
              "picUrl": "https://p2.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg",
              "tns": [],
              "pic_str": "109951164271814514",
              "pic": 109951164271814510
            },
            "dt": 253994,
            "h": {
              "br": 320000,
              "fid": 0,
              "size": 10162605,
              "vd": -55669
            },
            "m": {
              "br": 192000,
              "fid": 0,
              "size": 6097581,
              "vd": -53082
            },
            "l": {
              "br": 128000,
              "fid": 0,
              "size": 4065069,
              "vd": -51369
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 1372818,
            "publishTime": 0
          }
        ],
        songIndex:null,
        currentSongIndex:0,
        showName:false,
        lyricList:""
      }
    },
    created(){
      this.$bus.$on('play',(item)=>{
        this._getSongDetail(item.id);
      })
      this._getSongDetail(167876);
    },
    methods: {
      //请求歌曲
      _getSongDetail(ids){
        //2.请求歌曲数据
        getSongDetail(ids).then(res=>{
          //1.根据id查找playList中是否已经有了该歌曲
          this.songs = res.songs && res.songs[0];
          this.songIndex = this.playList.findIndex(song => song.id === ids);
          console.log(this.songIndex);
          //2.判断是否找到歌曲
          if (this.songIndex ===-1){ //找到歌曲
            this.playList.push(this.songs);
          }else {//没有找到歌曲

          }
          //3.请求歌词
          this._getLyric(this.songs.id);
          const song = this.playList[this.songIndex]
          // console.log(song);
          this.songImage = getSizeImage((this.songs.al && this.songs.al.picUrl) || "" ,35);
          this.songerName = (this.songs.ar && this.songs.ar[0].name) || "未知歌手";
          this.showDuration = formatDate(this.songs.dt, "mm:ss");
          
        })
      },
      //请求歌词
      _getLyric(id){
        getLyric(id).then(res =>{
          this.lyricList = parseLyric(res.lrc.lyric)
          console.log(this.lyricList);
        })
      },
      playMusic(){
        this.durationTime = this.currentTime;
        this.$refs.audioRef.src = getPlaySong(this.songs.id);
        this.isPlaying ? this.$refs.audioRef.pause(): this.$refs.audioRef.play();
        this.isPlaying = !this.isPlaying;
      },
      songTime (e){
        if (!this.isChanging){
          // console.log(e.target.currentTime);
          if (e.target.currentTime>0){
            this.currentTime = e.target.currentTime;
          }else {
            e.target.currentTime = this.durationTime;
          }
          this.showCurrentTime = formatDate(this.currentTime * 1000, "mm:ss")
          this.progress = this.currentTime * 1000 / this.songs.dt * 100;
        }
      },
      sliderChange(value){
        this.isChanging = true;
        const currentTime = value / 100 * this.songs.dt;
        this.showCurrentTime = formatDate(currentTime,"mm:ss");
        this.progress = value;
      },
      sliderAfterChange(value){
        const currentTime = value / 100 * this.songs.dt / 1000;
        this.$refs.audioRef.currentTime = currentTime;
        this.isChanging = false;
      },
      handleDisabledChange(disabled) {
        this.disabled = disabled;
      },
      playListClick(){
        this.showName = !this.showName;
      },
      changeSequence() {
        if (this.sequence<2){
          this.sequence += 1;
        } else {
          this.sequence = 0;
        }
      },
      getClass(){
        switch(this.sequence) {
          case 1:
            return {backgroundPosition:'-66px -248px'};
          case 2:
            return {backgroundPosition:'-66px -344px'};
          default:
            return {backgroundPosition:'-3px -344px'};
        }
      },
      changeMusic(tag){
        // console.log(this.songIndex);
        if (tag ===-1){
          this._getSongDetail(this.playList[this.songIndex-1].id)
        }else {
          this._getSongDetail(this.playList[this.songIndex+1].id)
        }
        
      }
    },
    computed:{
    
    }
  }
</script>

<style scoped>
  .play-bar{
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
  .prev, .next {
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: 0 -132px;
    cursor: pointer;
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: -40px -203px;
    cursor: pointer;
  }
  .playActive{
    background-position: -40px -164px;
  }
  .next {
    background-position: -80px -132px;
    cursor: pointer;
  }
  .play-info{
    display: flex;
    width: 642px;
    align-items: center;
  }
  .image{
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }
  .info{
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;
  }
  .song{
    color: #e1e1e1;
    position: relative;
    top: 8px;
    left: 8px;
  }
  .singer-name {
    color: #a1a1a1;
    margin-left: 10px;
  }
  .progress{
    display: flex;
    align-items: center;
  }
  .ant-slider{
    width:500px;
    margin-right: 10px;
    height: 9px;
    /*background-image: url("~assets/img/progress_bar.png");*/
    /*background-position:0 51px;*/
  }
  .ant-slider-rail {
    height: 9px;
    background-image: url("~assets/img/progress_bar.png");
    background-color: red;
  }
  .ant-slider-track {
    height: 9px;
    background-image: url("~assets/img/progress_bar.png");
    background-position:0 50px;
  }
  .ant-slider-handle {
    width: 22px;
    height: 24px;
    border: none;
    margin-top: -7px;
    background-image: url("~assets/img/sprite_icon.png");
    background-position: 0 -250px;
  }
  
  .time{
  
   }
  .now-time {
    color: #e1e1e1;
  }
  .divider {
    margin: 0 3px;
  }
  .operator{
    display: flex;
    position: relative;
    top: 5px;
  }
  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .favor {
    background-position: -88px -163px;
  }
  .share {
    background-position: -114px -163px;
  }
  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    padding-bottom: 10px;
    background-position: -147px -248px;
  }
  .volume {
    background-position: -2px -248px;
  }
  .loop{
    background-position:-66px -248px;
  }
  .active{
    background-position: -66px -344px;
  }
  .playlist {
    padding-left: 18px;
    text-align: center;
    color: #ccc;
    width: 59px;
    background-position: -42px -68px;
  }
  .show-play-list{
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 46px;
    background-color: #ccc;
    border-top-left-radius:7px;
    border-top-right-radius:7px;
  }
</style>