<script setup lang="ts">
import { auth } from "@/utils";
import { useRouter } from "vue-router";
const router = useRouter();

if (!auth.getToken()) {
  router.replace({ name: "Login" });
}

router.replace({ path: "/dashboard" });
</script>
