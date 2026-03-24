<script setup lang="ts">
interface Props {
  titleStart?: string;
  titleHighlight?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

withDefaults(defineProps<Props>(), {
  titleStart: 'Code in',
  titleHighlight: 'Simple English',
  description: 'Learn to code without being held back by complex vocabulary. We use\nsimple words and provide instant help for difficult terms.',
  primaryButtonText: 'Get Started for Free',
  secondaryButtonText: 'View Curriculum'
});
</script>

<template>
  <div class="w-full flex flex-col items-center w-full px-6 pt-32">
    <slot name="title">
      <a-typography-title :level="1"
        class="!text-[48px] md:!text-[72px] !leading-[56px] md:!leading-[72px] !font-bold text-center !mb-6 font-[family-name:var(--font-space-grotesk)] max-w-[896px]">
        <span class="text-text-main tracking-[-3.6px]">{{ titleStart }}&nbsp;</span>
        <span class="text-primary">{{ titleHighlight }}</span>
      </a-typography-title>
    </slot>

    <div class="flex flex-col items-center max-w-[672px] pb-10 px-3">
      <slot name="description">
        <a-typography-paragraph
          class="text-center text-text-secondary text-xl leading-7 font-[family-name:var(--font-public-sans)] whitespace-pre-line">
          {{ description }}
        </a-typography-paragraph>
      </slot>
    </div>

    <slot name="actions">
      <a-space size="middle" class="mb-20 flex-col md:flex-row w-full md:w-auto justify-center">
        <a-button type="primary" size="large"
          class="!h-[60px] !px-8 !rounded !bg-gradient-to-br !from-primary !to-secondary !border-none !shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] w-full md:w-auto">
          <span class="text-white text-base font-bold font-[family-name:var(--font-public-sans)]">{{ primaryButtonText
          }}</span>
        </a-button>
        <a-button size="large"
          class="!h-[60px] !px-8 !rounded !border-[#707784] !text-primary hover:!bg-slate-50 w-full md:w-auto">
          <span class="text-base font-bold font-[family-name:var(--font-public-sans)]">{{ secondaryButtonText }}</span>
        </a-button>
      </a-space>
    </slot>
  </div>
</template>

<style scoped></style>
