import Vue from 'vue'
import App from './App.vue'
import Annotation from "./Annotation.vue"
import Header from "./Header.vue"
import Pragraph from "./Pragraph.vue"
import Bannner from "./Bannner.vue"
import Main from "./Main.vue"
Vue.component('app-annotaion',Annotation);
Vue.component('app-header',Header);
Vue.component('app-p',Pragraph);
Vue.component('app-banner',Bannner);
Vue.component('app-main',Main);
new Vue({
  el: '#app',
  render: h => h(App)//render函数 自动注入 createElemnet 将引入的对象  如App 将对象编译成虚拟dom   用js显示dom节点  js比html快
})
