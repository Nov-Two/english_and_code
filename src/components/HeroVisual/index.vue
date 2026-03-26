<script setup lang="ts">
import { ref } from 'vue';
import type { HeroVisualProps } from './types';

defineOptions({
  name: 'HeroVisual',
});

const props = withDefaults(defineProps<HeroVisualProps>(), {
  moduleTitle: 'Python Basics',
  moduleSubtitle: 'Module 1: Syntax',
  sidebarItems: () => [
    {
      key: 'intro',
      icon: '/image/mn4q93o1-2fup0un.svg',
      title: 'Introduction',
    },
    { key: 'vars', icon: '/image/mn4q93o1-rhdh26t.svg', title: 'Variables' },
    { key: 'types', icon: '/image/mn4q93o1-b9yff4d.svg', title: 'Data Types' },
  ],
  activeSidebarKey: 'intro',
  lessonTitle: 'Lesson 1: What is a Variable?',
  codeSnippets: () => [
    { key: 'user_name', value: '"Alex"', isString: true },
    { key: 'user_age', value: 25, isString: false },
  ],
  tooltipTitle: 'Container',
  tooltipTag: 'Noun',
  tooltipDescription: 'A box or item that holds things\ninside it. In code, it holds data.',
});

const selectedKeys = ref<string[]>([props.activeSidebarKey]);
const isUpgrading = ref(false);

const handleUpgrade = () => {
  isUpgrading.value = true;
  setTimeout(() => {
    isUpgrading.value = false;
  }, 1000);
};
</script>

<template>
  <div class="hero-visual-wrapper">
    <a-row
      justify="center"
      align="middle"
      class="w-full"
    >
      <a-col
        :xs="24"
        :md="24"
        :lg="24"
        :xl="20"
        :xxl="16"
      >
        <div class="hero-layout flex">
          <div
            class="hero-sider hidden md:flex"
            style="width: 256px; min-width: 256px; max-width: 256px"
          >
            <div class="sider-header">
              <a-typography-title
                :level="4"
                class="sider-title"
              >
                {{ props.moduleTitle }}
              </a-typography-title>
              <a-typography-text
                type="secondary"
                class="sider-subtitle"
              >
                {{ props.moduleSubtitle }}
              </a-typography-text>
            </div>

            <a-menu
              v-model:selected-keys="selectedKeys"
              mode="inline"
              class="hero-menu"
              :style="{ borderRight: 'none' }"
            >
              <a-menu-item
                v-for="item in props.sidebarItems"
                :key="item.key"
                class="hero-menu-item"
              >
                <template #icon>
                  <img
                    :src="item.icon"
                    alt="icon"
                    class="menu-icon"
                  >
                </template>
                {{ item.title }}
              </a-menu-item>
            </a-menu>

            <div class="sider-footer">
              <a-button
                type="primary"
                ghost
                block
                class="upgrade-btn"
                :loading="isUpgrading"
                @click="handleUpgrade"
              >
                Upgrade to Pro
              </a-button>
            </div>
          </div>

          <div class="hero-content flex-1">
            <a-card
              :bordered="false"
              class="lesson-card"
            >
              <a-typography-title
                :level="2"
                class="lesson-title"
              >
                {{ props.lessonTitle }}
              </a-typography-title>

              <div class="lesson-description">
                <a-space
                  :size="4"
                  align="baseline"
                  wrap
                >
                  <a-typography-text>
                    Think of a variable as a labeled
                  </a-typography-text>
                  <a-popover
                    placement="right"
                    overlay-class-name="custom-popover"
                  >
                    <template #content>
                      <div class="tooltip-content">
                        <div class="tooltip-header">
                          <span class="tooltip-title">
                            {{ props.tooltipTitle }}
                          </span>
                          <a-tag
                            color="#fde68a"
                            class="tooltip-tag"
                          >
                            {{ props.tooltipTag }}
                          </a-tag>
                        </div>
                        <p class="tooltip-desc">
                          {{ props.tooltipDescription }}
                        </p>
                      </div>
                    </template>
                    <span class="highlight-word">
                      container
                    </span>
                  </a-popover>
                  <a-typography-text>
                    . You can store information inside it and
                  </a-typography-text>
                </a-space>
                <div class="mt-1">
                  <a-typography-text>
                    give it a name so you can find it later.
                  </a-typography-text>
                </div>
              </div>

              <div class="code-editor-container">
                <div class="mac-dots">
                  <div class="dot red" />
                  <div class="dot yellow" />
                  <div class="dot green" />
                </div>
                <div class="code-lines">
                  <div
                    v-for="(snippet, index) in props.codeSnippets"
                    :key="index"
                    class="code-line"
                  >
                    <span class="code-key">{{ snippet.key }}</span>
                    <span class="code-operator"> = </span>
                    <span class="code-value">{{ snippet.value }}</span>
                  </div>
                  <div class="code-line mt-2">
                    <span class="code-comment"># Output the data</span>
                  </div>
                  <div class="code-line">
                    <span class="code-keyword">print</span>
                    <span class="code-operator">(user_name)</span>
                  </div>
                </div>
              </div>
            </a-card>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.hero-visual-wrapper {
  width: 100%;
  padding: 0 24px 80px;
  display: flex;
  justify-content: center;
}

.hero-layout {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  max-width: 1280px;
  margin: 0 auto;
}

.hero-sider {
  background: #f8fafc !important;
  border-right: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
}

.sider-header {
  padding: 32px 24px 24px;
  text-align: center;
}

.sider-title {
  margin-bottom: 4px !important;
  font-family: var(--font-space-grotesk), sans-serif;
  font-weight: 700 !important;
  color: #0f172a !important;
}

.sider-subtitle {
  font-size: 12px !important;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #64748b !important;
  font-family: var(--font-inter), sans-serif;
}

.hero-menu {
  background: transparent;
}

.hero-menu-item {
  margin: 8px 16px !important;
  border-radius: 12px !important;
  font-family: var(--font-inter), sans-serif;
  color: #64748b;
  font-weight: 500;
}

.hero-menu-item.ant-menu-item-selected {
  background-color: #ffffff !important;
  color: #2563eb !important;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.menu-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.sider-footer {
  margin-top: auto;
  padding: 160px 24px 24px;
}

.upgrade-btn {
  background-color: #eff6ff !important;
  color: #1d4ed8 !important;
  border: none !important;
  font-weight: 700 !important;
  height: 36px;
  border-radius: 6px;
  font-family: var(--font-public-sans), sans-serif;
}

.upgrade-btn:hover {
  background-color: #dbeafe !important;
}

.hero-content {
  background: #f8fafc;
  padding: 32px;
  min-width: 0;
}

.lesson-card {
  border-radius: 8px;
  box-shadow: 0 12px 32px 0 rgba(25, 28, 29, 0.06);
  text-align: center;
  padding: 32px 32px 56px;
}

.lesson-title {
  font-family: var(--font-space-grotesk), sans-serif;
  font-weight: 700 !important;
  margin-bottom: 16px !important;
}

.lesson-description {
  margin-bottom: 24px;
  font-family: var(--font-public-sans), sans-serif;
  color: #475569;
}

.highlight-word {
  font-weight: 700;
  color: #0f172a;
  border-bottom: 2px solid rgba(217, 119, 6, 0.4);
  padding-bottom: 2px;
  cursor: pointer;
}

.code-editor-container {
  background: #f1f5f9;
  border-radius: 8px;
  padding: 24px;
  max-width: 500px;
  margin: 24px auto 0;
  text-align: left;
  position: relative;
}

.mac-dots {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background: rgba(239, 68, 68, 0.4);
}
.dot.yellow {
  background: rgba(217, 119, 6, 0.4);
}
.dot.green {
  background: rgba(16, 185, 129, 0.4);
}

.code-lines {
  padding-left: 20px;
  font-family: var(--font-liberation-mono), monospace;
  font-size: 14px;
  line-height: 24px;
}

.code-key {
  color: #2563eb;
}
.code-operator {
  color: #64748b;
}
.code-value {
  color: #d97706;
}
.code-comment {
  color: #94a3b8;
}
.code-keyword {
  color: #059669;
  font-weight: 700;
}

.mt-1 {
  margin-top: 4px;
}
.mt-2 {
  margin-top: 8px;
}

:deep(.custom-popover .ant-popover-inner) {
  padding: 12px 16px;
  border-top: 3px solid #d97706;
  border-radius: 4px;
  box-shadow: 0 12px 32px 0 rgba(25, 28, 29, 0.06);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  width: 256px;
}

.tooltip-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tooltip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tooltip-title {
  color: #2563eb;
  font-family: var(--font-space-grotesk), sans-serif;
  font-size: 16px;
  font-weight: 700;
}

.tooltip-tag {
  margin: 0;
  border: none;
  font-family: var(--font-public-sans), sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #2a1800;
}

.tooltip-desc {
  margin: 0;
  font-family: var(--font-public-sans), sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: #0f172a;
  white-space: pre-line;
}
</style>
