<script setup lang="ts">
interface TooltipFeature {
  term: string;
  definition: string;
  color: string;
}

interface VocabularyFeature {
  term: string;
  definition: string;
}

interface Props {
  smartTooltipsTitle?: string;
  smartTooltipsDescription?: string;
  tooltipFeatures?: TooltipFeature[];
  moduleCardsTitle?: string;
  moduleCardsDescription?: string;
  vocabularyFeatures?: VocabularyFeature[];
  editorialTitle?: string;
  editorialDescription?: string;
  paceText?: string;
}

withDefaults(defineProps<Props>(), {
  smartTooltipsTitle: 'Smart Word Tooltips',
  smartTooltipsDescription: 'Hover over any technical term to see a simplified definition.\nNo more switching tabs to look up complex jargon.',
  tooltipFeatures: () => [
    { term: 'Function', definition: 'A reusable block of code.', color: 'border-primary' },
    { term: 'Parameter', definition: 'Information given to a task.', color: 'border-brown-accent' },
    { term: 'Boolean', definition: 'A True or False value.', color: 'border-purple-accent' }
  ],
  moduleCardsTitle: 'Module Word Cards',
  moduleCardsDescription: 'Each chapter starts with a "key terms" card. Master the\nlanguage before you even write your first line of code.',
  vocabularyFeatures: () => [
    { term: 'Syntax', definition: 'Grammar for code' },
    { term: 'Integer', definition: 'Whole number' },
    { term: 'String', definition: 'Piece of text' }
  ],
  editorialTitle: 'Editorial Reading',
  editorialDescription: 'A layout that feels like a modern magazine.\nGenerous white space helps you focus on\nlearning one concept at a time.',
  paceText: 'Learn at your own pace, in your own words.'
});
</script>

<template>
  <section class="flex flex-col items-center w-full bg-bg-light py-24 px-6">
    <slot>
      <a-row :gutter="[24, 24]" justify="center" class="w-full max-w-[1024px]">
        <a-col :xs="24" :lg="14" class="flex">
          <slot name="smart-tooltips">
            <a-card :bordered="false" class="w-full shadow-[0_12px_32px_0_rgba(25,28,29,0.06)] !rounded-lg h-full flex flex-col">
              <div class="flex flex-col gap-4">
                <div class="inline-block bg-brown-light rounded-xl px-3 py-1 w-max">
                  <span class="text-[#2a1800] font-[family-name:var(--font-public-sans)] text-[10px] font-bold uppercase">Vocabulary First</span>
                </div>
                <a-typography-title :level="3" class="!text-text-main !text-3xl !font-bold font-[family-name:var(--font-space-grotesk)] !mb-0 !leading-[36px] tracking-[-0.75px]">
                  {{ smartTooltipsTitle }}
                </a-typography-title>
                <a-typography-paragraph class="!text-text-secondary !text-base font-[family-name:var(--font-public-sans)] !leading-[26px] whitespace-pre-line">
                  {{ smartTooltipsDescription }}
                </a-typography-paragraph>
              </div>
              <div class="flex flex-col sm:flex-row gap-4 pt-12 flex-grow">
                <div v-for="(feature, index) in tooltipFeatures" :key="index" :class="['flex flex-col flex-1 border-l-4 rounded bg-bg-light p-4 pl-3 gap-1', feature.color]">
                  <span :class="['font-[family-name:var(--font-public-sans)] text-xs font-bold uppercase', feature.color.replace('border-', 'text-')]">{{ feature.term }}</span>
                  <span class="text-text-main font-[family-name:var(--font-public-sans)] text-sm leading-5">{{ feature.definition }}</span>
                </div>
              </div>
            </a-card>
          </slot>
        </a-col>
        <a-col :xs="24" :lg="10" class="flex">
          <slot name="module-cards">
            <a-card :bordered="false" class="w-full shadow-[0_12px_32px_0_rgba(25,28,29,0.06)] !rounded-lg h-full" style="background: linear-gradient(140.75deg, var(--color-primary) 0%, var(--color-secondary) 100%);">
              <div class="flex flex-col gap-4">
                <a-typography-title :level="3" class="!text-white !text-3xl !font-bold font-[family-name:var(--font-space-grotesk)] !mb-0 !leading-[36px] tracking-[-0.75px]">
                  {{ moduleCardsTitle }}
                </a-typography-title>
                <a-typography-paragraph class="!text-white/90 !text-base font-[family-name:var(--font-public-sans)] !leading-[26px] whitespace-pre-line">
                  {{ moduleCardsDescription }}
                </a-typography-paragraph>
              </div>
              <div class="mt-8 border border-white/20 rounded bg-white/10 p-6 gap-4 flex flex-col backdrop-blur-md">
                <div class="flex items-center gap-3">
                  <img src="/image/mn4q93o1-7x0xbl2.svg" class="w-5 h-5" alt="icon" />
                  <span class="text-white font-[family-name:var(--font-public-sans)] text-base font-bold">Chapter Vocabulary</span>
                </div>
                <div class="flex flex-col gap-3">
                  <div v-for="(feature, index) in vocabularyFeatures" :key="index" :class="['flex items-center justify-between', index < vocabularyFeatures.length - 1 ? 'border-b border-white/10 pb-2' : '']">
                    <span class="text-white font-[family-name:var(--font-public-sans)] text-sm">{{ feature.term }}</span>
                    <span class="text-white/70 font-[family-name:var(--font-public-sans)] text-sm">{{ feature.definition }}</span>
                  </div>
                </div>
              </div>
            </a-card>
          </slot>
        </a-col>
      </a-row>

      <a-row :gutter="[24, 24]" justify="center" class="w-full max-w-[1024px] mt-6">
        <a-col :xs="24" :lg="8" class="flex">
          <slot name="editorial">
            <a-card :bordered="false" class="w-full shadow-[0_12px_32px_0_rgba(25,28,29,0.06)] !rounded-lg h-full">
              <div class="pb-6">
                <img src="/image/mn4q93o1-qko70vu.svg" class="w-full max-w-[315px] h-6 object-left object-contain" alt="icon" />
              </div>
              <div class="flex flex-col mt-4">
                <a-typography-title :level="3" class="!text-text-main !text-2xl !font-bold font-[family-name:var(--font-space-grotesk)] !mb-3 !leading-[32px] tracking-[-0.6px]">
                  {{ editorialTitle }}
                </a-typography-title>
                <a-typography-paragraph class="!text-text-secondary !text-sm font-[family-name:var(--font-public-sans)] !leading-[23px] !mb-0 whitespace-pre-line">
                  {{ editorialDescription }}
                </a-typography-paragraph>
              </div>
            </a-card>
          </slot>
        </a-col>
        <a-col :xs="24" :lg="16" class="flex">
          <slot name="visual-banner">
            <a-card :bordered="false" class="w-full shadow-[0_12px_32px_0_rgba(25,28,29,0.06)] !rounded-lg !p-0 overflow-hidden h-full min-h-[400px]">
              <div class="relative w-full h-full bg-cover bg-center" style="background-image: url(/image/mn4q93o6-kfl9723.png)">
                <div class="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/60 to-transparent">
                  <a-typography-text class="!text-white !text-2xl !font-bold font-[family-name:var(--font-space-grotesk)]">
                    {{ paceText }}
                  </a-typography-text>
                </div>
              </div>
            </a-card>
          </slot>
        </a-col>
      </a-row>
    </slot>
  </section>
</template>

<style scoped>
:deep(.ant-card-body) {
  padding: 0;
  height: 100%;
}
:deep(.ant-card) {
  display: flex;
  flex-direction: column;
}
</style>
