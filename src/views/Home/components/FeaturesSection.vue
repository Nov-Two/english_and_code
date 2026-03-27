<script setup lang="ts">
import VocabularyFeatures from './VocabularyFeatures.vue';
import ReadingFeatures from './ReadingFeatures.vue';
</script>

<template>
  <a-flex vertical align="center" class="w-full py-24 px-6">
    <a-flex vertical :gap="20" class="w-full max-w-[1024px]">
      <VocabularyFeatures />
      <ReadingFeatures />
    </a-flex>
  </a-flex>
</template>

<style scoped></style>
