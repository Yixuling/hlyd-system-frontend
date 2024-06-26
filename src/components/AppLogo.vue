<script setup lang="ts">
const logoSrc = new URL('@/assets/logo.svg', import.meta.url).href
</script>

<template>
  <n-image
    v-if="logoSrc"
    :src="logoSrc"
    :preview-disabled="true"
  />
</template>

<style scoped>

</style>
