<template>
  <div class="theme sprite_02">
    <div class="left">
      <h3 class="title">{{themeTitle}}</h3>
      <div class="keyword" v-for="item in keywords">
        <a href="todo" class="item">{{item}}</a>
        <span class="divider">|</span>
      </div>
    </div>
    <div class="right">
      <a href="todo" class="item">更多</a>
      <i class="icon sprite_02"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ThemeHeader",
    props:{
      themeTitle:{
        type:String,
        default(){
          return null
        }
      },
      keywords:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .theme{
    height: 33px;
    border-bottom: 3px solid #C10D0C;
    padding: 0 10px 4px 34px;
    background-position: -225px -156px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left{
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 20px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    margin-right: 20px;
    margin-top: 7px;
  }
  .keyword{
    display: flex;
  }
  .item{
    color: #666;
  }
  .divider {
    margin: 0 15px;
  }
  .right{
    display: flex;
    align-items: center;
  }
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    background-position: 0 -240px;
  }
</style>