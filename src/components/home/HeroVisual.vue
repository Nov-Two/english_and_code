<script setup lang="ts">
interface SidebarItem {
  icon: string;
  title: string;
  active?: boolean;
}

interface Props {
  moduleTitle?: string;
  moduleSubtitle?: string;
  sidebarItems?: SidebarItem[];
  lessonTitle?: string;
  codeSnippets?: { key: string; value: string | number; isString?: boolean }[];
  tooltipTitle?: string;
  tooltipTag?: string;
  tooltipDescription?: string;
}

withDefaults(defineProps<Props>(), {
  moduleTitle: 'Python Basics',
  moduleSubtitle: 'Module 1: Syntax',
  sidebarItems: () => [
    { icon: '/image/mn4q93o1-2fup0un.svg', title: 'Introduction', active: true },
    { icon: '/image/mn4q93o1-rhdh26t.svg', title: 'Variables' },
    { icon: '/image/mn4q93o1-b9yff4d.svg', title: 'Data Types' }
  ],
  lessonTitle: 'Lesson 1: What is a Variable?',
  codeSnippets: () => [
    { key: 'user_name', value: '"Alex"', isString: true },
    { key: 'user_age', value: 25, isString: false }
  ],
  tooltipTitle: 'Container',
  tooltipTag: 'Noun',
  tooltipDescription: 'A box or item that holds things\ninside it. In code, it holds data.'
});
</script>

<template>
  <div class="flex flex-col items-center w-full  px-6 pb-20">
    <slot>
      <div
        class="flex flex-col items-center w-full bg-bg-muted p-1 rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
        <div class="flex flex-col lg:flex-row w-full bg-white rounded overflow-hidden">
          <!-- Sidebar -->
          <slot name="sidebar">
            <div
              class="flex flex-row lg:flex-col flex-wrap lg:flex-nowrap border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50 lg:w-[256px] lg:min-w-[256px] p-4 lg:py-8 lg:pl-0 lg:pr-[15px] gap-2">
              <div class="flex flex-col items-center lg:px-6 lg:pb-6 w-full lg:w-auto">
                <a-typography-text
                  class="!text-[#0f172a] !text-base !font-bold font-[family-name:var(--font-space-grotesk)] !leading-6">
                  {{ moduleTitle }}
                </a-typography-text>
                <a-typography-text
                  class="!text-[#64748b] !text-xs uppercase tracking-[0.6px] font-[family-name:var(--font-inter)]">
                  {{ moduleSubtitle }}
                </a-typography-text>
              </div>

              <template v-for="(item, index) in sidebarItems" :key="index">
                <div v-if="item.active"
                  class="flex items-center gap-3 px-6 py-3 bg-white shadow-sm rounded-none lg:rounded-r-xl w-full lg:w-auto">
                  <img :src="item.icon" class="w-[18px] h-[15px] object-contain" alt="icon" />
                  <a-typography-text
                    class="!text-blue-accent !text-base !font-semibold font-[family-name:var(--font-inter)]">
                    {{ item.title }}
                  </a-typography-text>
                </div>
                <div v-else
                  class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-slate-100 rounded-none lg:rounded-r-xl w-full lg:w-auto transition-colors">
                  <img :src="item.icon" class="w-[17px] h-[10px] object-contain" alt="icon" />
                  <a-typography-text class="!text-[#64748b] !text-base font-[family-name:var(--font-inter)]">
                    {{ item.title }}
                  </a-typography-text>
                </div>
              </template>

              <div class="flex flex-col flex-grow justify-end lg:pt-40 lg:px-6 w-full lg:w-auto mt-4 lg:mt-0">
                <a-button type="primary" ghost class="!w-full !bg-blue-50 hover:!bg-blue-100 !border-none !h-9">
                  <span class="text-[#1d4ed8] font-bold text-sm font-[family-name:var(--font-public-sans)]">Upgrade to
                    Pro</span>
                </a-button>
              </div>
            </div>
          </slot>

          <!-- Main Content Area -->
          <slot name="main">
            <div
              class="flex flex-col flex-grow bg-bg-light p-8 lg:pt-8 lg:pr-14 lg:pb-20 lg:pl-8 overflow-hidden w-full lg:w-auto">
              <div
                class="flex flex-col flex-grow items-center bg-white rounded-lg shadow-[0_12px_32px_0_rgba(25,28,29,0.06)] p-8 pb-14 w-full relative">
                <a-typography-title :level="2"
                  class="!text-text-main !text-2xl !font-bold font-[family-name:var(--font-space-grotesk)] !mb-0 text-center">
                  {{ lessonTitle }}
                </a-typography-title>

                <div class="flex flex-col items-center mt-4 text-center">
                  <div class="flex flex-wrap items-center justify-center gap-1">
                    <a-typography-text
                      class="!text-text-secondary !text-base font-[family-name:var(--font-public-sans)]">
                      Think of a variable as a labeled
                    </a-typography-text>
                    <div class="inline-flex items-center border-b-2 border-brown-accent/40 mx-1">
                      <a-typography-text
                        class="!text-text-main !text-base !font-bold font-[family-name:var(--font-public-sans)] pb-0.5">
                        container
                      </a-typography-text>
                    </div>
                    <a-typography-text
                      class="!text-text-secondary !text-base font-[family-name:var(--font-public-sans)]">
                      . You can store information inside it and
                    </a-typography-text>
                  </div>
                  <a-typography-text
                    class="!text-text-secondary !text-base font-[family-name:var(--font-public-sans)] mt-1">
                    give it a name so you can find it later.
                  </a-typography-text>
                </div>

                <div
                  class="relative flex flex-col items-start mt-6 bg-bg-muted rounded-lg p-6 w-full max-w-[500px] gap-4 mb-20 lg:mb-0 text-left mr-0 lg:mr-8 xl:mr-16">
                  <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-accent/40"></div>
                    <div class="w-3 h-3 rounded-full bg-brown-accent/40"></div>
                    <div class="w-3 h-3 rounded-full bg-primary/40"></div>
                  </div>
                  <div
                    class="flex flex-col items-start pl-5 gap-3 font-[family-name:var(--font-liberation-mono)] text-sm">
                    <div class="leading-6">
                      <template v-for="(snippet, index) in codeSnippets" :key="index">
                        <span class="text-blue-accent">{{ snippet.key }}</span>
                        <span class="text-text-secondary">&nbsp;=&nbsp;</span>
                        <span class="text-brown-accent">{{ snippet.value }}</span>
                        <br v-if="index < codeSnippets.length - 1" />
                      </template>
                    </div>
                    <div class="leading-6 mt-2">
                      <span class="text-text-muted"># Output the data</span>
                      <br />
                      <span class="text-secondary font-bold">print</span>
                      <span class="text-text-secondary">(user_name)</span>
                    </div>
                  </div>

                  <slot name="tooltip">
                    <div
                      class="absolute right-[50%] translate-x-[50%] lg:translate-x-0 lg:-right-6 top-[100%] translate-y-[-50%] lg:translate-y-0 lg:top-6 flex flex-col border-t-[3px] border-brown-accent rounded bg-white/85 shadow-[0_12px_32px_0_rgba(25,28,29,0.06)] p-3 px-4 w-[256px] gap-2 backdrop-blur-md z-10">
                      <div class="flex items-center justify-between">
                        <span class="text-primary font-[family-name:var(--font-space-grotesk)] text-base font-bold">{{
                          tooltipTitle }}</span>
                        <div class="rounded-sm bg-brown-light px-1.5 py-0.5">
                          <span
                            class="text-[#2a1800] font-[family-name:var(--font-public-sans)] text-[10px] font-bold uppercase">{{
                              tooltipTag }}</span>
                        </div>
                      </div>
                      <p
                        class="text-text-main font-[family-name:var(--font-public-sans)] text-sm leading-[1.4] m-0 whitespace-pre-line">
                        {{ tooltipDescription }}</p>
                    </div>
                  </slot>
                </div>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </slot>
  </div>
</template>

<style scoped></style>
