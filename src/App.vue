<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#1d4ed8',
        fontFamily: 'var(--font-public-sans), sans-serif',
        colorText: '#0f172a',
        colorTextSecondary: '#64748b'
      },
    }"
  >
    <RouterView />
  </a-config-provider>
</template>

<style>
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}
</style>
