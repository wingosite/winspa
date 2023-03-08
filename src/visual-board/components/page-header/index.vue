<template>
  <div class="page-header">
    <t-layout>
      <t-aside>LOGO</t-aside>
      <t-content>
        <t-head-menu theme="light" height="90px">
          <t-menu-item>
            <template #icon>
              <t-icon name="upload"/>
            </template>
            导入JSON
          </t-menu-item>
          <t-menu-item >
            <template #icon>
              <t-icon name="download"/>
            </template>
            导出JSON
          </t-menu-item>
          <t-menu-item>
            <template #icon>
              <t-icon name="browse"/>
            </template>
            预览
          </t-menu-item>
        </t-head-menu>
      </t-content>
      <t-aside>AVATAR</t-aside>
    </t-layout>
  </div>
</template>