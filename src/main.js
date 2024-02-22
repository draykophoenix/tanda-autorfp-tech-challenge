import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
