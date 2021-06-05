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

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  Vant,
  Vuex,
  axios,
  router,
}).$mount("#app");
