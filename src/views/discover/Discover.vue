<template>
  <div class="discover">
    <div class="wrap-v1">
      <div class="discover-top">
        <div class="discover-menu"
             :class="{active:currentIndex === index}"
             v-for="(item,index) in discoverMenu">
          <div class="discover-item" @click="itemClick(index)">{{item.title}}</div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  import {discoverMenu} from 'common/local-data.js';
  import Footer from "components/common/footer/Footer";
  export default {
    name: "Discover",
    components:{
      Footer
    },
    data(){
      return{
        discoverMenu:[...discoverMenu],
        currentIndex:0,
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$router.push(discoverMenu[index].link);
      },
    }
  }
</script>

<style scoped>
  .discover{
    height: 35px;
    background-color: #C20C0C;
  }
  .discover-top{
    display: flex;
    padding: 0 160px;
    
  }
  .discover-menu{
    color: white;
    line-height: 35px;
    font-size: 14px;
    margin:0 auto;
    padding: 0 15px 0 15px;
    text-align: center;
    cursor: pointer;
  }
  .discover-menu:hover{
    text-decoration: none;
    background-color: #9B0909;
    border-radius: 20px;
  }
  .active{
    text-decoration: none;
    background-color: #9B0909;
    border-radius: 20px;
  }
  .discover-item {
  
  }
</style>