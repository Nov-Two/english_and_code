<script setup lang="ts">
interface Props {
  badgeText?: string;
  titleStart?: string;
  titleHighlight?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

withDefaults(defineProps<Props>(), {
  badgeText: 'New: AI-Powered Definitions',
  titleStart: 'Master Code through',
  titleHighlight: 'Simple English',
  description:
    'Learn programming without the jargon barrier. We use editorial-grade\nEnglish and provide instant translations for complex concepts.',
  primaryButtonText: 'Start Learning Free',
  secondaryButtonText: 'Explore Curriculum',
});
</script>

<template>
  <div class="w-full flex flex-col items-center w-full px-6 pt-24 pb-16">
    <div class="mb-8">
      <div class="inline-flex items-center bg-blue-50 rounded-full px-4 py-2">
        <div class="w-2 h-2 bg-blue-600 rounded-full mr-2" />
        <span class="text-blue-600 text-sm font-medium">{{ badgeText }}</span>
      </div>
    </div>

    <slot name="title">
      <a-typography-title
        :level="1"
        class="!text-[56px] md:!text-[72px] !leading-[64px] md:!leading-[80px] !font-bold text-center !mb-6 font-bold max-w-[800px]"
      >
        <span class="text-gray-900">{{ titleStart }}&nbsp;</span>
        <span class="text-blue-600">{{ titleHighlight }}</span>
      </a-typography-title>
    </slot>

    <div class="flex flex-col items-center pb-12 px-3">
      <slot name="description">
        <a-typography-paragraph
          class="!text-gray-600 !text-xl !leading-7 text-center whitespace-pre-line"
        >
          {{ description }}
        </a-typography-paragraph>
      </slot>
    </div>

    <slot name="actions">
      <a-space
        size="large"
        class="mb-16 flex-col md:flex-row w-full md:w-auto justify-center"
      >
        <a-button
          type="primary"
          size="large"
          class="!h-[56px] !px-8 !rounded-lg !bg-blue-600 !border-blue-600 !shadow-lg"
        >
          <span class="text-white text-base font-semibold">{{ primaryButtonText }}</span>
        </a-button>
        <a-button
          size="large"
          class="!h-[56px] !px-8 !rounded-lg !border-gray-400 !text-blue-600 hover:!bg-gray-50"
        >
          <span class="text-base font-semibold">{{ secondaryButtonText }}</span>
        </a-button>
      </a-space>
    </slot>
  </div>
</template>

<style scoped></style>
