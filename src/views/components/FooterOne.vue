<template>
  <footer
      class="container-fluid text-white"
      style="background-color: #00AAA2; position: fixed; bottom: 0; width: 100%;"
      role="navigation"
      aria-label="footer navigation"
  >
    <div class="row p-2">
      <!-- Active Task -->
      <div class="col d-flex flex-column justify-content-center text-center">
        <div
            @click="handleMainContentClick"
            class="d-flex flex-column align-items-center justify-content-center no-underline-footer"
            style="cursor: pointer"
        >
          <ion-icon
              :icon="build"
              class="fs-1 m-auto"
              :class="{ 'active-icon': currentPage === 'mainContent', 'footer-icon-grey': currentPage !== 'mainContent' }"
          ></ion-icon>
          <span :class="{ 'active-icon': currentPage === 'mainContent', 'footer-text-grey': currentPage !== 'mainContent' }"
          >Active Task</span
          >
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
              :class="{ 'active-icon': currentPage === 'searchIns', 'footer-icon-grey': currentPage !== 'searchIns' }"
          ></ion-icon>
          <span :class="{ 'active-icon': currentPage === 'searchIns', 'footer-text-grey': currentPage !== 'searchIns' }"
          >Search</span
          >
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
              :class="{ 'active-icon': currentPage === 'helpIns', 'footer-icon-grey': currentPage !== 'helpIns' }"
          ></ion-icon>
          <span :class="{ 'active-icon': currentPage === 'helpIns', 'footer-text-grey': currentPage !== 'helpIns' }"
          >Information</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { build, searchOutline, alertCircleOutline } from "ionicons/icons";

const currentPage = ref("mainContent");

// Function to handle Main Content button click
const handleMainContentClick = () => {
  window.location.reload(); // Reload the app
  window.goBackToMainContent();
};

// Function to handle Search button click
const handleSearchClick = () => {
  window.showSearchIns();
};

// Function to handle Help button click
const handleHelpClick = () => {
  window.showHelpIns();
};
</script>

<style scoped>
/* Footer-specific styles */
footer {
  z-index: 10;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.active-icon {
  color: #00aaa2;
}

.footer-icon-grey {
  color: grey;
}

.footer-text-grey {
  color: grey;
}
</style>
