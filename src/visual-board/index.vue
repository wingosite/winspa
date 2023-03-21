<template>
  <div class="visual-board">
    <page-header />
    <t-layout class="layout-container">
      <t-aside class="layout-left">
        <left-nav />
      </t-aside>
      <t-layout class="layout-main">
        <t-content class="layout-content">
          <div class="container"></div>
        </t-content>
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
  @at-root #{&}-content {
    position: relative;
    .container {
      position: absolute;
      width: 375px;
      height: 667px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #e1e1e1;
      background-color: #ffffff;
    }
  }
}
</style>
