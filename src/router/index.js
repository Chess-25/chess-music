import Vue from 'vue';
import VueRouter from 'vue-router';


const Discover = () => import('views/discover/Discover');
const Recommend = () => import('views/discover/cpns/recommend/Recommend');
const Ranking = () => import('views/discover/cpns/ranking/Ranking');
const Songs = () => import('views/discover/cpns/songs/Songs');
const Artist = () => import('views/discover/cpns/artist/Artist');
const Album = () => import('views/discover/cpns/album/Album');
const Djradio = () => import('views/discover/cpns/djradio/Djradio');
const Mine = ()=> import('views/mine/Mine');
const Friend = ()=> import('views/friend/Friend');
const Player = ()=> import('views/player/Player');

//1.安装插件
Vue.use(VueRouter);

//2.创建router
const routes =[
  {
    path:'',
    redirect:'/discover'
  },
  {
    path:'/discover',
    component:Discover,
    children: [
      {
        path:'',
        redirect:'/discover/recommend'
      },
      {
        path:'/discover/recommend',
        component:Recommend
      },
      {
        path:'/discover/ranking',
        component:Ranking
      },
      {
        path:'/discover/songs',
        component:Songs
      },
      {
        path:'/discover/artist',
        component:Artist
      },
      {
        path:'/discover/djradio',
        component:Djradio
      },
      {
        path:'/discover/album',
        component:Album
      },
      {
        path:'/discover/player',
        component:Player
      },
    ]
  },
  {
    path:'/mine',
    component:Mine
  },
  {
    path:'/friend',
    component:Friend
  },
]
const router = new VueRouter({
  routes,
  mode:'history'
})

//3.导出

export default router
