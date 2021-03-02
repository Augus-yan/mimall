/*
 * @Descripttion:
 * @version: X3版本
 * @Author:
 * @Date: 2021-03-02 10:02:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 21:47:18
 */
import Vue from 'vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'
import App from './App.vue'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// mockjs 开关，设置按需加载
const mock = false
if (mock) {
  require('./mock/api') // 加载mock文件
}

// axios.defaults.baseURL = env.baseUrl
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 添加响应拦截器(返回值拦截)
axios.interceptors.response.use(
  (response) => {
    // 获取所有的接口数据
    const res = response.data
    // 检测已经登陆，返回数据
    if (res.status === 0) {
      // 返回接口里面data包含的值
      return res.data
      // 检测未登录，拦截跳转到登录页
    } else if (res.status === 10) {
      window.location.href = '/#/login'
    } else {
      // 登录失败，错误的提示信息
      alert(res.msg)
    }
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
