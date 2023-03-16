<template>
  <div class="page-tree">
    <t-button
      block
      theme="primary"
      shape="round"
      variant="base"
      @click="createNewPage()"
    >
      <template #icon><add-icon /></template>添加页面
    </t-button>
    <t-tree style="margin-top: 20px" :data="pages" activable expand-all />
  </div>
</template>

<script lang="ts" setup>
import { useVisualData } from "@/visual-board/hooks/useVisualData";
import { AddIcon } from "tdesign-icons-vue-next";
import { computed } from "vue";

const { incrementPage, pageData } = useVisualData();

const createNewPage = () => {
  console.log("创建新的页面");
};

const pages = computed(
  () =>
    pageData &&
    Object.keys(pageData.pages).map((key) => ({
      label: `${pageData.pages[key].title}(${key})`,
      path: key,
    }))
);
</script>

<style scoped lang="scss">
.page-tree {
  padding: 8px 12px;
  box-sizing: border-box;
}
</style>
