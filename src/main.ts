import * as auth from "@/utils/auth";
import { createPinia } from "pinia";
import TDesignMobile from "tdesign-mobile-vue";
import TDesign from "tdesign-vue-next";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "./packages/base-widgets";
import router from "./router";

const app = createApp(App);

/**
 * 页面重定向，未登录用户进入需要登录的页面会自动跳转到登录页，登录成功后返回当前页面
 */
router.beforeEach((to, from, next) => {
  // Router Meta中添加needLogin属性
  if (to.meta.needLogin) {
    // 判断localStorage中是否存在token
    if (auth.getToken()) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    next();
  }
});

app.use(TDesign);
app.use(TDesignMobile);
app.use(createPinia());
app.use(router);

app.mount("#app");
