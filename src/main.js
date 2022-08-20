import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import axios from "axios";
import "./fms.scss";

axios.interceptors.request.use(
  function (config) {
    // 添加token
    config.headers.Token =
      "eyJhbGciOiJIUzI1NiJ9.eyJsb2dpbklkIjoiMjIwNDE4QVdXNTY2WTU1NSIsImxvZ2luVHlwZSI6MiwibW9iaWxlIjoiMTg4MjQzOTk5NTkiLCJpc0hhdmVSb2xlIjoxLCJlbnRlcnByaXNlVHlwZSI6NCwibG9naW5OYW1lIjoi6b6a56OKIiwiZW50ZXJwcmlzZUlkIjoiMjEwODA2RFlaNTFYV1lDSCIsImVudGVycHJpc2VOYW1lIjoi5rW35rOi6YeN5Z6L5bel56iL56eR5oqA6IKh5Lu95pyJ6ZmQ5YWs5Y-4Iiwic3RhZmZJZCI6IjIyMDQxOEFXVzU2QTlONEgiLCJpYXQiOjE2NTUzNzE3OTksImV4cCI6MTY1NTQ1ODE5OX0._dALhlvTFEwoOoONHJ8EJ8JNCs4PuKNvs_5gJNbqGHo";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
new Vue({
  axios,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
