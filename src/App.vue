<script setup lang="ts">
import { merge } from "lodash";
import enConfig from "tdesign-vue-next/es/locale/zh_CN";

const globalConfig = merge(enConfig, {
  calendar: {},
  table: {},
  pagination: {},
});
</script>

<template>
  <t-config-provider :global-config="globalConfig">
    <RouterView #="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </t-config-provider>
</template>

<style scoped></style>
