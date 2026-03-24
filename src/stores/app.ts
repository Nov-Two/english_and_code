import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const isReady = ref(true);
  
  return {
    isReady
  };
});
