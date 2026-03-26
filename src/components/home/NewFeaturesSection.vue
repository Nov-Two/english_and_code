<script setup lang="ts">
interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
}

withDefaults(defineProps<Props>(), {
  title: 'The LexiCode Experience',
  subtitle: 'Designed for clarity, built for retention. Experience a learning environment that understands your needs.',
  features: () => [
    {
      title: 'Smart Word Tooltips',
      description: 'Never break your flow to search for a word. Hover over any technical term to see simplified definitions, phonetics, and native translations.',
      icon: '/image/mn72gmka-x86drgu.svg'
    },
    {
      title: 'Module Word Cards',
      description: 'Master the core vocabulary before you dive into the code. Each chapter starts with a curated list of essential terms you\'ll encounter.',
      icon: '/image/mn72gmka-8qqute0.svg'
    },
    {
      title: 'Editorial Reading',
      description: 'Learning code shouldn\'t feel like reading a manual. Our layout feels like a premium digital magazine, optimized for focus and reading pleasure.',
      icon: '/image/mn72gmka-joa71xo.svg'
    }
  ]
});
</script>

<template>
  <section class="w-full py-24 px-6">
    <div class="w-full max-w-[1200px] mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <a-typography-title
          :level="2"
          class="!text-4xl !font-bold !mb-4"
        >
          {{ title }}
        </a-typography-title>
        <a-typography-paragraph class="!text-gray-600 !text-xl !leading-7 max-w-[800px] mx-auto">
          {{ subtitle }}
        </a-typography-paragraph>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="mb-6">
            <img
              :src="feature.icon"
              :alt="feature.title"
              class="w-16 h-16"
            >
          </div>
          
          <a-typography-title
            :level="3"
            class="!text-xl !font-bold !mb-4"
          >
            {{ feature.title }}
          </a-typography-title>
          
          <a-typography-paragraph class="!text-gray-600 !leading-6">
            {{ feature.description }}
          </a-typography-paragraph>

          <!-- Feature Examples -->
          <div
            v-if="index === 0"
            class="mt-6 space-y-3"
          >
            <div class="bg-blue-50 rounded-lg p-3">
              <div class="text-blue-600 font-semibold text-sm">
                Function
              </div>
              <div class="text-gray-600 text-sm">
                A reusable block of code tasks.
              </div>
            </div>
            <div class="bg-purple-50 rounded-lg p-3">
              <div class="text-purple-600 font-semibold text-sm">
                Boolean
              </div>
              <div class="text-gray-600 text-sm">
                A simple True or False value.
              </div>
            </div>
          </div>

          <div
            v-if="index === 1"
            class="mt-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-4"
          >
            <div class="text-white font-semibold mb-3">
              Chapter 1 Vocabulary
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-white">
                <span class="text-sm">Syntax</span>
                <span class="text-sm opacity-80">Grammar for code</span>
              </div>
              <div class="flex justify-between text-white">
                <span class="text-sm">Integer</span>
                <span class="text-sm opacity-80">Whole number</span>
              </div>
              <div class="flex justify-between text-white">
                <span class="text-sm">String</span>
                <span class="text-sm opacity-80">Piece of text</span>
              </div>
            </div>
          </div>

          <div
            v-if="index === 2"
            class="mt-6"
          >
            <div class="bg-gray-100 rounded-lg p-4 space-y-3">
              <div class="h-2 bg-gray-200 rounded" />
              <div class="h-2 bg-gray-200 rounded w-3/4" />
              <div class="h-2 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional styling if needed */
</style>