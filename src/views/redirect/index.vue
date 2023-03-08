<script setup lang="ts">
import * as auth from "@/utils/auth";
import { useRouter } from "vue-router";
const router = useRouter();

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (auth.getToken()) {
      next();
    } else {
      next({
        name: "Login",
        query: {
          redirect: to.meta.redirect,
        },
      });
    }
  } else {
    next();
  }
});
</script>
