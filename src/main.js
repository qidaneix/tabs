import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jump from "./plugins/jump";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.use(jump);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
