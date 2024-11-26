<template>
  <main class="main-content d-flex flex-column align-items-center justify-content-start flex-grow-1">
    <!-- First Row -->
    <div class="icon-row d-flex justify-content-center">
      <div class="icon-container text-center" aria-label="Scheduled">
        <button
            class="d-flex flex-column align-items-center justify-content-center text-dark no-underline"
            style="cursor: pointer; background: none; border: none; outline: none;"
            @click="handleScheduledClick"
        >
          <ion-icon :icon="bookmarkOutline" class="icon-style"></ion-icon>
          <span class="fw-bold fs-6 mt-3 text-center text-dark" aria-hidden="true">Scheduled</span>
        </button>
      </div>

      <div class="icon-container text-center" aria-label="Completed">
        <button
            class="d-flex flex-column align-items-center justify-content-center text-dark no-underline"
            style="cursor: pointer; background: none; border: none; outline: none;"
            @click="handleCompletedClick"
        >
          <ion-icon :icon="checkmarkCircle" class="icon-style"></ion-icon>
          <span class="fw-bold fs-6 mt-3 text-center text-dark" aria-hidden="true">Completed</span>
        </button>
      </div>
    </div>

    <!-- Second Row -->
    <div class="icon-row d-flex justify-content-center mt-3">
      <div class="icon-container text-center" aria-label="Knowledge Base">
        <button
            class="d-flex flex-column align-items-center justify-content-center text-dark no-underline"
            style="cursor: pointer; background: none; border: none; outline: none;"
            @click="handleKnowledgeBaseClick"
        >
          <ion-icon :icon="grid" class="icon-style"></ion-icon>
          <span class="fw-bold fs-6 mt-3 text-center text-dark" aria-hidden="true">Knowledge Base</span>
        </button>
      </div>

      <div class="icon-container text-center" aria-label="Settings">
        <button
            class="d-flex flex-column align-items-center justify-content-center text-dark no-underline"
            style="cursor: pointer; background: none; border: none; outline: none;"
            @click="handleSettingsClick"
        >
          <ion-icon :icon="settings" class="icon-style"></ion-icon>
          <span class="fw-bold fs-6 mt-3 text-center text-dark">Settings</span>
        </button>
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

// Function to handle Scheduled button click
const handleScheduledClick = () => {
  // Call the global function to change the body content to Scheduled
  window.showScheduled();
};

// Function to handle Completed button click
const handleCompletedClick = () => {
  // Call the global function to change the body content to CompletedIns
  window.showCompletedIns();
};

// Function to handle Knowledge Base button click
const handleKnowledgeBaseClick = () => {
  // Call the global function to change the body content to KnowledgeBase
  window.showKnowledgeBase();
};

// Function to handle Settings button click
const handleSettingsClick = () => {
  // Call the global function to change the body content to SettingsUser
  window.showSettings();
};
</script>

<style scoped>
/* Move the main content closer to the top */
.main-content {
  margin-top: 50px; /* Reduce the top margin */
}

/* Adjust spacing between rows */
.icon-row {
  gap: 40px; /* Add spacing between icons in a row */
}

/* Reduce the top margin between rows */
.mt-3 {
  margin-top: 30px !important;
}

/* Icon style adjustments */
.icon-style {
  font-size: 5rem; /* Icon size */
}

/* Adjust spacing for text below icons */
.icon-container span {
  margin-top: 10px;
}
</style>