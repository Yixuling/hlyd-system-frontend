<script setup lang="ts">

</script>

<template>
  <n-layout class="h-screen">
    <HeaderBar class="header-container" bordered />
    <n-layout class="content-container" has-sider>
      <SideBar bordered />
      <AppMain content-style="padding: 24px;" mx-5 />
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>
.header-container {
  height: $header-height;
}

.content-container {
  height: calc(100% - $header-height);
}
</style>
