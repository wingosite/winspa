import { createPinia } from "pinia";
import TDesignMobile from "tdesign-mobile-vue";
import TDesign from "tdesign-vue-next";
import { createApp } from "vue";
import App from "./App.vue";
import "./packages/base-widgets";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(TDesign);
app.use(TDesignMobile);
app.use(createPinia());
app.use(router);

app.mount("#app");
