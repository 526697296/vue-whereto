// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端300ms延迟
import fastClick from 'fastclick'
// 样式初始化
import './assets/styles/reset.css'
// 移动端1px问题
import './assets/styles/border.css'
// 引入iconfont
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
