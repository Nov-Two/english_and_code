<script setup lang="ts">
import VocabularyFeatures from '@/components/home/VocabularyFeatures.vue';
import ReadingFeatures from '@/components/home/ReadingFeatures.vue';
</script>

<template>
  <section class="flex flex-col items-center w-full py-24 px-6">
    <div class="w-full max-w-[1024px] flex flex-col gap-[20px]">
      <VocabularyFeatures />
      <ReadingFeatures />
    </div>
  </section>
</template>

<style scoped></style>
