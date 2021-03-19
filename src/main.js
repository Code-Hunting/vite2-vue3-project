import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routerConfig from "./router/config.js";
import App from "./App.vue";
import "normalize.css"; //normalize.css

// app实例
const app = createApp(App);
// 实例化路由
const router = createRouter({
  history: createWebHistory(),
  routes: routerConfig,
});
//使用路由
app.use(router);
//挂载
app.mount("#app");
