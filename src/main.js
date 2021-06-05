<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Vant)
=======
import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";
import { Icon } from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
Vue.use(Icon);
>>>>>>> e2c501b8a659f5af944766cbfc6d716b41d72726

Vue.config.productionTip = false;

new Vue({
<<<<<<< HEAD
  render: h => h(App),
  Vant,Vuex,axios,router,ElementUI
}).$mount('#app')
=======
  render: (h) => h(App),
  Vant,
  Vuex,
  axios,
  router,
}).$mount("#app");
>>>>>>> e2c501b8a659f5af944766cbfc6d716b41d72726
