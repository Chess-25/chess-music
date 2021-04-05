<template>
  <div class="hot-recommend">
    <ThemeHeader :themeTitle="themeTitle" :keywords=" keywords"/>
    <div class="recommend-list">
      <template v-for="item in hotRecommends">
        <SongsCover :info="item"/>
      </template>
    </div>
  </div>
</template>

<script>
  import ThemeHeader from "components/content/themeHeader/ThemeHeader";
  import SongsCover from "components/content/songsCover/SongsCover";
  export default {
    name: "HotRecommend",
    components:{
      ThemeHeader,
      SongsCover
    },
    data(){
      return{
        themeTitle: "热门推荐",
        keywords:["华语","流行","摇滚","民谣","电子"]
      }
    },
    props:{
      hotRecommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .hot-recommend{

  }
  .recommend-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>