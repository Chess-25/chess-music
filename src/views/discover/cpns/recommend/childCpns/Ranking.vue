<template>
  <div class="Ranking">
    <ThemeHeader :themeTitle="themeTitle" :keywords=" keywords"/>
    <div class="tops">
      <TopRanking :info="playlist.upRanking"/>
      <TopRanking :info="playlist.newRanking"/>
      <TopRanking :info="playlist.originRanking"/>
    </div>
  </div>
</template>

<script>
  import ThemeHeader from "components/content/themeHeader/ThemeHeader";
  import TopRanking from "components/content/topRanking/TopRanking";
  export default {
    name:"Ranking",
    components:{
      ThemeHeader,
      TopRanking
    },
    props:{
      playlist:{
        type:Object,
        default(){
          return {}
        }
      },
    },
    data(){
      return{
        themeTitle: "榜单",
        keywords:[]
      }
    }
  }
</script>

<style scoped>
  .tops{
    margin: 30px 20px;
    display: flex;
    width: 689px;
    height: 472px;
    /*background-color: red;*/
    background-image:url("~assets/img/recommend-top-bg.png");
    background-size:100% 100%;
  }
</style>