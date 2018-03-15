// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from "./router";
import App from "./App";
import "element-theme-chalk";
import "../theme/index.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import axios from 'axios'
Vue.config.productionTip = false;
Vue.prototype.$http = axios
axios.defaults.baseURL = "http://localhost:12070/"
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    title: "Tyche",
    message: "A TRPG Assistant"
  },
  render: h => h(App),
  router,
  components: { App }
});
