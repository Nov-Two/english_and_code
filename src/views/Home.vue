<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HeroHeader from '../components/home/HeroHeader.vue'
import HeroVisual from '../components/home/HeroVisual.vue'
import FeaturesSection from '../components/home/FeaturesSection.vue'
import CtaSection from '../components/home/CtaSection.vue'
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-col items-center w-full max-w-[1280px] mx-auto pb-24">
      <HeroHeader />
      <HeroVisual />
      <FeaturesSection />
      <CtaSection />
    </div>
  </DefaultLayout>
</template>
