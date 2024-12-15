import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  
  const darkMode = ref(localStorage.getItem('dark-theme') === 'true');

  
  watch(darkMode, (newValue) => {
    localStorage.setItem('dark-theme', String(newValue));
    updateAppClass(newValue);
  });

  
  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
  }

  
  function updateAppClass(isDark) {
    const app = document.querySelector('ion-app');
    if (app) {
      app.classList.toggle('dark', isDark);
    }
  }

  
  updateAppClass(darkMode.value);

  
  return {
    darkMode,
    toggleDarkMode
  };
});
