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
    <t-tree style="margin-top: 20px" :data="mockPages" activable expand-all />
  </div>
</template>

<script lang="ts" setup>
import { AddIcon } from "tdesign-icons-vue-next";
import { reactive } from "vue";

// 使用自定义hooks - useVisualBoardData
// const { text } = useVisualBoardData();

const mockPages = reactive([
  {
    title: "首页",
    path: "/",
    label: "首页(/)",
  },
  {
    title: "个人中心",
    path: "/user",
    label: "个人中心(/user)",
  },
]);

const createNewPage = () => {
  console.log("创建新的页面");
  // console.log(text);
  // console.log(jsonData, "pages");
};

// const pages = computed(() =>
//   Object.keys(jsonData.pages).map((key) => ({
//     title: jsonData.pages[key].title,
//     path: key,
//   }))
// );
</script>

<style scoped lang="scss">
.page-tree {
  padding: 8px 12px;
  box-sizing: border-box;
}
</style>
