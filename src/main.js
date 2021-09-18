import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载 element 组件库
import ElementPlus from 'element-plus'
// 加载 element 组件库的样式
import 'element-plus/dist/index.css'




// 加载全局样式文件
import './styles/index.less'

// 全局注册 element 组件库
Vue.use(ElementPlus)
Vue.config.productionTip = false
// 创建 Vue 根实例
// 把 router 配置到根实例中
// 通过 render 方法把 App 根组件渲染到 #app 入口节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
