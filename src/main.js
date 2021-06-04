// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from "vant"
import "vant/lib/index.css"
import request from "./ajax.js"

//全局注册vant
Vue.use(Vant);
//将axios作为vue原型对象上的属性进行使用
Vue.prototype.$http=request;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
