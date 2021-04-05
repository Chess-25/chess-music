<template>
  <div class="header-top">
    <div class="wrap-v1">
      <div class="header">
        <div class="header-left">
          <a href="#/" class="logo sprite_01">网易云音乐</a>
          <div class="select"
               :class="{active:index === currentIndex}"
               v-for="(item,index) in headerLinks">
            <div  @click="itemClick(index)"  class="select-item">{{item.title}}</div>
          </div>
        </div>
        <div class="header-right">
          <input class="search" placeholder="音乐/视频/电台/用户"/>
          <div class="create">创作中心</div>
          <div class="login">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { headerLinks } from "common/local-data";
  export default {
    name: "Header",
    data(){
      return{
        headerLinks:[...headerLinks],
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$router.push(headerLinks[index].link);
      },
    }
  }
</script>

<style scoped>
  .header-top{
    background-color: #242424;
  }
  .header{
    display: flex;
    height: 70px;
    font-size:14px;
    color:#fff;
  }
  .header-left{
    flex: 1;
    display: flex;
    line-height: 70px;
  }
  .logo{
    display:block;
    width:176px;
    height:69px;
    background-position:0 0;
    text-indent:-9999px;
  }
  .header-right{
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 12px;
  }
  .select{
    padding: 0 15px 0 15px;
    display: flex;
    line-height: 70px;
    font-size: 16px;
    text-align: center;
    cursor: pointer
  }
  .select:hover{
    background: #000;
  }
  .select-item{
    margin:0 auto;
  }
  .active{
    background-color: #000;
  }
  .search{
    width: 158px;
    height: 32px;
    border-radius: 16px;
    font-size: 16px;
    text-align: center;
    line-height: 70px;
  }
  .search input {
    font-size: 16px;
  }
  .create {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    cursor: pointer
  }
  .login{
    cursor: pointer
  }
</style>