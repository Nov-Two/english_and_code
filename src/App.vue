<script setup lang="ts">
import { RouterView } from 'vue-router';

const theme = {
  token: {
    // Primary colors matching the design
    colorPrimary: '#1890ff',
    colorInfo: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',

    // Typography
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeXL: 20,

    // Border radius
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 4,

    // Layout
    controlHeight: 32,
    controlHeightSM: 24,
    controlHeightLG: 40,

    // Colors
    colorText: '#262626',
    colorTextSecondary: '#595959',
    colorTextDisabled: '#bfbfbf',
    colorBorder: '#d9d9d9',
    colorBorderSecondary: '#f0f0f0',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#f5f5f5',
  },
  components: {
    Button: {
      borderRadius: 8,
      borderRadiusLG: 12,
      controlHeight: 32,
      controlHeightLG: 40,
      controlHeightSM: 24,
    },
    Input: {
      borderRadius: 8,
      controlHeight: 32,
      controlHeightLG: 40,
    },
    Card: {
      borderRadius: 12,
    },
    Typography: {
      fontSize: 14,
      fontSizeLG: 16,
      fontSizeXL: 20,
    },
  },
};
</script>

<template>
  <a-config-provider :theme="theme">
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
