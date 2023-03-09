<template>
  <div class="page-header">
    <t-layout>
      <t-head-menu theme="light" height="90px">
        <template #logo>
          <img
            width="136"
            class="logo"
            src="https://www.tencent.com/img/index/menu_logo_hover.png"
            alt="logo"
          />
        </template>
        <t-menu-item>
          <template #icon>
            <t-icon name="upload" />
          </template>
          导入JSON
        </t-menu-item>
        <t-menu-item>
          <template #icon>
            <t-icon name="download" />
          </template>
          导出JSON
        </t-menu-item>
        <t-menu-item>
          <template #icon>
            <t-icon name="browse" />
          </template>
          预览
        </t-menu-item>
        <template #operations>
          <t-dropdown :options="dropdownOptions">
            <div class="flex">
              <t-avatar
                image="https://tdesign.gtimg.com/mobile/demos/avatar_1.png"
              />
              <t-icon class="icon" name="caret-down-small" size="medium" />
            </div>
          </t-dropdown>
        </template>
      </t-head-menu>
    </t-layout>
    <!-- <t-dialog
      v-model:visible="visible"
      header="确定要退出吗？"
      body="确定退出后，内容将被清空且返回至登录页，请谨慎操作！"
      attach="body"
      confirmOnEnter
      :on-confirm="onConfirm"
    /> -->
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { auth } from "@/utils";
import { DialogPlugin } from "tdesign-vue-next";
import { ref } from "vue";

const visible = ref(false);

const dropdownOptions = ref([
  {
    content: "GitHub",
    value: "https://github.com/wingosite/winspa",
    onClick: () =>
      window.open("https://github.com/wingosite/winspa", "__blank"),
  },
  {
    content: "退出登录",
    value: "Logout",
    onClick: () => showDialog(),
  },
]);

const showDialog = () => {
  const dialogPlugin = DialogPlugin({
    header: "确定退出登录吗？",
    body: "确定退出后，当前页面的数据将被清空且会返回至登录页面，请谨慎操作！",
    confirmBtn: "退出",
    attach: "body",
    closeBtn: false,
    onConfirm: () => {
      auth.clearToken(),
        router.push({
          name: "Login",
        });
      dialogPlugin.hide();
    },
    onCancel: () => {
      dialogPlugin.hide();
    },
  });
};
</script>

<style scoped lang="scss">
.flex {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.logo {
  margin-left: 20px;
}

.icon {
  margin-left: 4px;
}
</style>
