<template>
    <main class="main-content d-flex flex-column align-items-center justify-content-start flex-grow-1">
      <!-- Loading Spinner -->
    <div v-if="isLoading" class="loading-spinner">
      <ion-icon name="reload" class="loading-icon"></ion-icon> Loading...
    </div>
      <div class="icon-row d-flex justify-content-center">
        <div class="icon-container text-center" aria-label="Scheduled">
          <button
              class="d-flex flex-column align-items-center justify-content-center no-underline"
              :class="{ 
                'text-dark': !themeStore.darkMode, 
                'text-light': themeStore.darkMode,
                'button-active': activeButton === 'scheduled'
              }"
              style="cursor: pointer; background: none; border: none; outline: none;"
              @click="handleScheduledClick"
          >
            <ion-icon :icon="bookmarkOutline" class="icon-style"></ion-icon>
            <span class="fw-bold fs-6 mt-3 text-center" :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }" aria-hidden="true">Scheduled</span>
          </button>
          <span class="tooltip" role="tooltip">Scheduled</span>
        </div>
  
        <div class="icon-container text-center" aria-label="Completed">
          <button
              class="d-flex flex-column align-items-center justify-content-center no-underline"
              :class="{ 
                'text-dark': !themeStore.darkMode, 
                'text-light': themeStore.darkMode,
                'button-active': activeButton === 'completed'
              }"
              style="cursor: pointer; background: none; border: none; outline: none;"
              @click="handleCompletedClick"
          >
            <ion-icon :icon="checkmarkCircle" class="icon-style"></ion-icon>
            <span class="fw-bold fs-6 mt-3 text-center" :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }" aria-hidden="true">Completed</span>
          </button>
          <span class="tooltip" role="tooltip">Completed</span>
        </div>
      </div>
  
      <!-- Second Row -->
      <div class="icon-row d-flex justify-content-center mt-3">
        <div class="icon-container text-center" aria-label="Knowledge Base">
          <button
              class="d-flex flex-column align-items-center justify-content-center no-underline"
              :class="{ 
                'text-dark': !themeStore.darkMode, 
                'text-light': themeStore.darkMode,
                'button-active': activeButton === 'knowledge'
              }"
              style="cursor: pointer; background: none; border: none; outline: none;"
              @click="handleKnowledgeBaseClick"
          >
            <ion-icon :icon="grid" class="icon-style"></ion-icon>
            <span class="fw-bold fs-6 mt-3 text-center" :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }" aria-hidden="true">Knowledge Base</span>
          </button>
          <span class="tooltip" role="tooltip"> Knowledge Base</span>
        </div>
  
        <div class="icon-container text-center" aria-label="Settings">
          <button
              class="d-flex flex-column align-items-center justify-content-center no-underline"
              :class="{ 
                'text-dark': !themeStore.darkMode, 
                'text-light': themeStore.darkMode,
                'button-active': activeButton === 'settings'
              }"
              style="cursor: pointer; background: none; border: none; outline: none;"
              @click="handleSettingsClick"
          >
            <ion-icon :icon="settings" class="icon-style"></ion-icon>
            <span class="fw-bold fs-6 mt-3 text-center" :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }">Settings</span>
          </button>
          <span class="tooltip" role="tooltip">Settings</span>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
import {
  bookmarkOutline,
  checkmarkCircle,
  grid,
  settings,
} from "ionicons/icons";
import { useThemeStore } from '@/stores/theme';
import { ref } from 'vue';

const themeStore = useThemeStore();
const activeButton = ref(null);
const isLoading = ref(false); 

const handleButtonClick = async (buttonId, callback) => {
  activeButton.value = buttonId;
  isLoading.value = true; 
  try {
    await callback(); 
  } finally {
    isLoading.value = false; 
    setTimeout(() => {
      activeButton.value = null;
    }, 300);
  }
};

const handleScheduledClick = () => handleButtonClick('scheduled', () => window.showScheduled());
const handleCompletedClick = () => handleButtonClick('completed', () => window.showCompletedIns());
const handleKnowledgeBaseClick = () => handleButtonClick('knowledge', () => window.showKnowledgeBase());
const handleSettingsClick = () => handleButtonClick('settings', () => window.showSettings());
</script>

  
  <style scoped>

.loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #000;
    z-index: 10;
  }

  .loading-icon {
    font-size: 2rem;
    margin-right: 10px;
  }
  
  .main-content {
    margin-top: 20px !important;
    padding-top: 20px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .main-content::-webkit-scrollbar {
    display: none;
  }
  
  .icon-row {
    gap: 40px;
    margin-bottom: 30px;
  }
  
  .icon-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  border-radius:8px;
  padding: 10px;
     
  }
  
  
  .icon-style {
    font-size: 3.5rem;
    transition: font-size 0.2s ease;
  }
  
  /* Tooltip styles */
  .tooltip {
    position: absolute;
    bottom: 90%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 8px;
    font-size: 4px; 
    border-radius: 4px;
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  
  .icon-container:hover .tooltip,
  .icon-container:focus-within .tooltip {
    visibility: visible;
    opacity: 1;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  
  @media (max-width: 576px) {
    .icon-style {
      font-size: 2rem; 
    }
  
    .icon-container span {
      font-size: 5rem;
         
    }
  
    .icon-row {
      gap: 40px; 
      
    }
  
    .icon-row {
      gap: 20px; 
      flex-wrap: wrap; 
    }
  
    .icon-container {
      justify-content: center; 
      flex: 1; 
      margin-bottom: 15px; 
    }
  
     
  }
  
  
  @media (min-width: 768px) {
    .icon-style {
      font-size: 5rem;
    }
  
    .icon-container span {
      font-size: 1.2rem;
    }
  }
  
  
  
  @media (min-width: 1024px) {
    .icon-style {
      font-size: 6rem;
    }
  
    .icon-container span {
      font-size: 1.3rem;
    }
  }
  
  @media (min-width: 1440px) {
    .icon-style {
      font-size: 7rem;
    }
  
    .icon-container span {
      font-size: 1.5rem;
    }
  }
  
  
  button:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: scale(1.05); 
  }
  
  .dark button:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .button-active {
    transform: scale(0.95);
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.15);
  }
  
  .dark .button-active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  
  button {
    transition: transform 0.2s ease, background-color 0.2s ease;
  }
  
  </style>