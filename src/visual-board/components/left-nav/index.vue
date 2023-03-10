<template>
  <div class="leftNav-container">
    <t-tabs placement="left" default-value="page" class="leftNav-tabs">
      <t-tab-panel value="page" label="页面">
        <PageTree />
      </t-tab-panel>
      <t-tab-panel value="basic" label="基础组件">
        <BasicWidgets />
      </t-tab-panel>
      <t-tab-panel value="layout" label="容器组件">
        <LayoutComponents />
      </t-tab-panel>
      <t-tab-panel value="advanced" label="高级组件">
        <AdvanceComponents />
      </t-tab-panel>
    </t-tabs>
  </div>
</template>

<script setup lang="ts">
import {
  AdvanceComponents,
  BasicWidgets,
  LayoutComponents,
  PageTree,
} from "./components";
</script>

<style scoped lang="scss">
.leftNav {
  @at-root #{&}-container {
    height: 100%;
  }
}
</style>
