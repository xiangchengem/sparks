// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource' //请求
import "animate.css/animate.css" //过度动画
import moment from 'moment' //时间格式化
import '../static/css/public.css' //公共样式
import ElementUI from 'element-ui' //饿了么UI
// import VueRouter from 'vue-router'//路由
Vue
  .use(VueResource)
  .use(moment)
  .use(ElementUI)
Vue.filter('dateformat', function (ctime, pattern = '') {
  return moment().format(pattern)
})
// .use(VueRouter)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
