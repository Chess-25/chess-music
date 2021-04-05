<template>
  <div id="app">
    <Header/>
    <router-view/>
    <PlayerBar/>
  </div>
</template>
<script>
  import Header from "components/common/header/Header";
  import PlayerBar from "views/player/cpns/PlayerBar";
 
  export default {
    name:'app',
    components: {
      Header,
      PlayerBar
    }
  }
</script>
<style>
</style>
