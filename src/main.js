import Vue from 'vue'
import App from './App.vue'
console.log(App);
new Vue({
  el: '#app',
  components:{
    App:App
  },
  render: h => h(App)//render函数 自动注入 createElemnet 将引入的对象  如App 将对象编译成虚拟dom
})
