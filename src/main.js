import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
})

app.use(router);

app.mount("#app");
