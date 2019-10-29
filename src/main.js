import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import router from '/src/router/index.js'
// 1.导入某一个目录，默认会去找索引文件（index.js index.vue index.json） 基于webpack
import router from '@/router'
import axios from '@/api'

Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

// 根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
