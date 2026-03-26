<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HeroHeader from '@/components/home/HeroHeader.vue';
import HeroVisual from '@/components/HeroVisual/index.vue';
import NewFeaturesSection from '@/components/home/NewFeaturesSection.vue';
import NewCtaSection from '@/components/home/NewCtaSection.vue';
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-col items-center w-full max-w-[1280px] mx-auto">
      <HeroHeader />
      <HeroVisual />
      <NewFeaturesSection />
      <NewCtaSection />
    </div>
  </DefaultLayout>
</template>
