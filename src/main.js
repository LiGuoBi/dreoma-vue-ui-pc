import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 引入 element-ui 搭建展示框架。
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 加载进度条
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
router.beforeEach((to, from, next) => {
  NProgress.start() // 开始Progress
  next()
})
router.afterEach(() => {
  NProgress.done() // 结束Progress
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')