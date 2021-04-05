<template>
  <div class="wrap-v4 content2">
    <div class="recommend">
      <div class="swiper">
        <Swiper :banners="banners"/>
      </div>
      <div class="download">
        <img src="~assets/img/download.png" alt="">
      </div>
    </div>
    <div class="content">
      <div class="content-left">
        <HotRecommend :hotRecommends="hotRecommends"/>
        <NewAlbum :albums="albums" class="new-album"/>
        <Ranking :playlist="playlist"/>
      </div>
      <div class="content-right">
        <UserLogin/>
      </div>
    </div>
  </div>
</template>

<script>
  import {getTopBanners,getHotRecommends,getNewAlbums,getTopList}    from "network/recommend";
  import Swiper from "components/content/swiper/Swiper";
  import HotRecommend from "./childCpns/HotRecommend";
  import NewAlbum from "./childCpns/NewAlbum";
  import Ranking from "./childCpns/Ranking";
  import UserLogin from "./childCpns/UserLogin";
  
  export default {
    name: "Recommend",
    components:{
      Swiper,
      HotRecommend,
      NewAlbum,
      Ranking,
      UserLogin
    },
    data(){
      return{
        banners:[],
        hotRecommends:[],
        albums:[],
        // upRanking:{},
        // newRanking:{},
        // originRanking:{},
        playlist:{
          upRanking:{},
          newRanking:{},
          originRanking:{},
        }
        // playlist:{},
      }
    },
    created() {
      this._getTopBanners();
      this._getHotRecommends(8);
      this._getNewAlbums(10);
      this._getTopList(0)
      this._getTopList(2)
      this._getTopList(3)
      // this._getUpRanking(3);
      // this._getNewRanking(0);
      // this._getOriginRanking(2);
    },
    
    methods:{
      
      //网络请求方法
      
      //1.轮播图数据
      _getTopBanners(){
        getTopBanners().then( res =>{
          this.banners = res.banners;
        })
      },
      //2.热门推荐数据
      _getHotRecommends(limit){
        getHotRecommends(limit).then(res => {
          this.hotRecommends = res.result;
        })
      },
      //3.新碟上架数据
      _getNewAlbums(limit){
        getNewAlbums(limit).then(res => {
          this.albums = res.albums;
        })
      },
      //4.榜单数据
      _getTopList(idx){
        getTopList(idx).then(res => {
          if (idx === 0){
            this.playlist.newRanking = res.playlist;
            // console.log(this.playlist.upRanking);
          } else if (idx ===2){
            this.playlist.originRanking = res.playlist;
            // console.log(this.newRanking);
          } else {
            this.playlist.upRanking = res.playlist;
            // console.log(this.originRanking);
          }
        })
        // console.log(this.playlist);
      },
      // _getUpRanking(idx){
      //   getTopList(idx).then(res => {
      //     this.upRanking = res.playlist;
      //     // console.log(this.upRanking);
      //   })
      // },
      // _getNewRanking(idx){
      //   getTopList(idx).then(res => {
      //     this.newRanking = res.playlist;
      //     // console.log(this.newRanking);
      //   })
      // },
      // _getOriginRanking(idx){
      //   getTopList(idx).then(res => {
      //     this.originRanking = res.playlist;
      //     // console.log(this.originRanking);
      //   })
      // },
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    height: 285px;
  }
  
  .content2{
    background-color: red;
  }
  .content-left{
    padding: 20px;
    width: 769px;
    /*background-color: #f2f2f2;*/
  }
  .content-right{
    width: 253px;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }
  .content{
    display: flex;
    position: relative;
    background-color:#fff;
  }
  .new-album{
    margin-top: 50px;
  }
</style>