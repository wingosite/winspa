<template>
  <div class="visual-board">
    <page-header />
    <t-layout class="layout-container">
      <t-aside class="layout-left">
        <left-nav />
      </t-aside>
      <t-layout class="layout-main">
        <t-content class="layout-content">123</t-content>
        <t-aside class="layout-right"><RightAttributePanel /></t-aside>
      </t-layout>
    </t-layout>
  </div>
</template>

<script setup lang="ts">
import {
  LeftNav,
  PageHeader,
  RightAttributePanel,
} from "@/visual-board/components";
</script>

<style scoped lang="scss">
.layout {
  @at-root #{&}-container {
    position: relative;
    height: calc(100vh - 64px);
    margin-top: 8px;
  }
  @at-root #{&}-left {
    width: 22%;
  }
  @at-root #{&}-right {
    width: 30%;
  }
}
</style>
