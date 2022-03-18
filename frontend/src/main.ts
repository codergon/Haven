import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueFeather from "vue-feather";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

import "./axios";

createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapIconsPlugin)
  .component(VueFeather.name, VueFeather)
  .mount("#app");
