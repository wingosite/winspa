<template>
  <div class="page-container">
    <login-form />
  </div>
</template>
<script setup lang="ts">
  import LoginForm from "./LoginForm.vue";
</script>

<style scoped lang="scss">
  .page-container{
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(79,159,201,1) 5%, rgba(214,248,255,1) 88%);
  }
</style>
