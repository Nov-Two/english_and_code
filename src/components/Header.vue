<script setup lang="ts">
import { ref } from 'vue';

const current = ref<string[]>(['courses']);
</script>

<template>
  <a-layout-header class="!bg-white/80 !px-6 !h-[65px] !flex !items-center !justify-between border-b border-border/50 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] backdrop-blur-md sticky top-0 z-[100] !leading-[normal]">
    <div class="inline-flex items-center gap-8">
      <div class="text-blue-accent font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-[-1.2px] cursor-pointer">
        LinguistCode
      </div>
      
      <a-menu
        v-model:selectedKeys="current"
        mode="horizontal"
        class="!border-b-0 !bg-transparent min-w-[300px]"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="courses" class="!font-[family-name:var(--font-space-grotesk)] !text-base !tracking-[-0.4px]">
          <span class="font-bold">Courses</span>
        </a-menu-item>
        <a-menu-item key="progress" class="!font-[family-name:var(--font-space-grotesk)] !text-base !tracking-[-0.4px]">
          Progress
        </a-menu-item>
        <a-menu-item key="profile" class="!font-[family-name:var(--font-space-grotesk)] !text-base !tracking-[-0.4px]">
          Profile
        </a-menu-item>
      </a-menu>
    </div>

    <div class="flex items-center gap-6">
      <a-button type="text" class="!flex !items-center !justify-center !w-10 !h-10 !p-0">
        <template #icon>
          <img src="/image/mn4q92u0-f641sje.svg" class="w-4 h-5" alt="notification" />
        </template>
      </a-button>
      
      <a-button type="text" class="!flex !items-center !justify-center !w-10 !h-10 !p-0">
        <template #icon>
          <img src="/image/mn4q92u0-enu01jg.svg" class="w-5 h-5" alt="settings" />
        </template>
      </a-button>

      <a-avatar
        src="/image/mn4q92u2-tabok7m.png"
        :size="32"
        class="border border-slate-300/30 cursor-pointer"
      />
    </div>
  </a-layout-header>
</template>

<style scoped>
/* Customize Ant Design Menu active styling */
:deep(.ant-menu-horizontal > .ant-menu-item-selected) {
  color: var(--color-blue-accent) !important;
}
:deep(.ant-menu-horizontal > .ant-menu-item-selected::after) {
  border-bottom-width: 2px !important;
  border-bottom-color: var(--color-blue-accent) !important;
}
:deep(.ant-menu-horizontal > .ant-menu-item:hover::after) {
  border-bottom-color: var(--color-blue-accent) !important;
}
</style>