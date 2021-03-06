import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Antd from 'ant-design-vue';
import 'assets/css/reset.css'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
