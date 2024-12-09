<template>
  <footer
      class="container-fluid text-white"
      style="background-color: #00AAA2; position: fixed; bottom: 0; width: 100%;"
      role="navigation"
      aria-label="footer navigation"
  >
    <div class="row p-2">
        <div class="col d-flex flex-column justify-content-center text-center">
        <div
            @click="handleMainContentClick"
            class="d-flex flex-column align-items-center justify-content-center no-underline-footer"
            style="cursor: pointer"
        >
          <ion-icon
              :icon="build"
              class="fs-1 m-auto"
              :class="{ 'active-icon': activeSection === 'mainContent', 'footer-icon-grey': activeSection !== 'mainContent' }"
          ></ion-icon>
          <span :class="{ 'active-icon': activeSection === 'mainContent', 'footer-text-grey': activeSection !== 'mainContent' }"
          >Active Task</span>
        </div>
      </div>
      <!-- Search -->
      <div class="col d-flex flex-column justify-content-center text-center">
        <div
            @click="handleSearchClick"
            class="d-flex flex-column align-items-center justify-content-center no-underline-footer"
            style="cursor: pointer"
        >
          <ion-icon
              :icon="searchOutline"
              class="fs-1 m-auto"
              :class="{ 'active-icon': activeSection === 'searchIns', 'footer-icon-grey': activeSection !== 'searchIns' }"
          ></ion-icon>
          <span :class="{ 'active-icon': activeSection === 'searchIns', 'footer-text-grey': activeSection !== 'searchIns' }"
          >Search</span>
        </div>
      </div>
      <!-- Information -->
      <div class="col d-flex flex-column justify-content-center text-center">
        <div
            @click="handleHelpClick"
            class="d-flex flex-column align-items-center justify-content-center no-underline-footer"
            style="cursor: pointer"
        >
          <ion-icon
              :icon="alertCircleOutline"
              class="fs-1 m-auto"
              :class="{ 'active-icon': activeSection === 'helpIns', 'footer-icon-grey': activeSection !== 'helpIns' }"
          ></ion-icon>
          <span :class="{ 'active-icon': activeSection === 'helpIns', 'footer-text-grey': activeSection !== 'helpIns' }"
          >Information</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {  onMounted } from "vue";
import { build, searchOutline, alertCircleOutline } from "ionicons/icons";
import { useNavigationStore } from '@/stores/NavigationStore';
import { storeToRefs } from 'pinia';

const navigationStore = useNavigationStore();
const { activeSection } = storeToRefs(navigationStore);


const handleMainContentClick = () => {
  navigationStore.setActiveSection('mainContent');
  window.goBackToMainContent();
};


const handleSearchClick = () => {
  navigationStore.setActiveSection('searchIns');
  window.showSearchIns();
};


const handleHelpClick = () => {
  navigationStore.setActiveSection('helpIns');
  window.showHelpIns();
};


onMounted(() => {
  window.addEventListener('logoClick', () => {
    navigationStore.setActiveSection('mainContent');
  });
});
</script>

<style scoped>

footer {
  z-index: 10;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.active-icon {
  color: white !important;
}

.footer-icon-grey {
  color: rgba(255, 255, 255, 0.6);
}

.footer-text-grey {
  color: rgba(255, 255, 255, 0.6);
}

.no-underline-footer {
  text-decoration: none;
  color: inherit;
}
</style>
