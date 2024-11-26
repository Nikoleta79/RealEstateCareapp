<template>
  <ion-page>
    <!-- Header -->
    <Header />

    <!-- Dynamic Body -->
    <ion-content class="ion-no-padding">
      <div
          id="dashboard"
          class="container-fluid d-flex flex-column text-dark dashboard-wrapper"
          style="min-height: 100vh; display: flex;"
      >
        <!-- Dynamic Component Rendering -->
        <component :is="currentBodyComponent" />
      </div>
    </ion-content>

    <!-- Footer -->
    <Footer />
  </ion-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Header from "./components/HeaderOne.vue";
import Footer from "./components/FooterOne.vue";
import MainContent from "./components/DashBoard.vue"; // Original main content component
import ScheduledContent from "./components/ScheduledNow.vue"; // Scheduled component content
import InspectionSee from "./components/InspectionSee.vue"; // Inspection details component
import InspectionAdd from "./components/InspectionAdd.vue"; // Inspection add component
import CompletedIns from "./components/CompletedIns.vue"; // New component for completed inspections
import KnowledgeBase from "./components/KnowledgeBase.vue"; // Knowledge Base component
import SearchIns from "./components/SearchIns.vue"; // SearchIns component
import HelpIns from "./components/HelpIns.vue"; // HelpIns component
import SettingsUser from "./components/SettingsUser.vue"; // SettingsUser component

// Reference to current body component
const currentBodyComponent = ref(MainContent);
const router = useRouter();

// Function to update body content dynamically to Scheduled
const showScheduled = () => {
  currentBodyComponent.value = ScheduledContent;
};

// Function to update body content dynamically to MainContent
const goBackToMainContent = () => {
  currentBodyComponent.value = MainContent;
};

// Function to update body content to InspectionSee component
const showInspectionDetails = (id) => {
  console.log(`showInspectionDetails called with ID: ${id}`); // Log for debugging
  currentBodyComponent.value = InspectionSee;
};

// Function to update body content to InspectionAdd component
const showInspectionAdd = () => {
  currentBodyComponent.value = InspectionAdd;
};

// Function to update body content to CompletedIns component
const showCompletedIns = () => {
  currentBodyComponent.value = CompletedIns;
};

// Function to update body content to KnowledgeBase component
const showKnowledgeBase = () => {
  currentBodyComponent.value = KnowledgeBase;
};

// Function to update body content to SearchIns component
const showSearchIns = () => {
  currentBodyComponent.value = SearchIns;
};

// Function to update body content to HelpIns component
const showHelpIns = () => {
  currentBodyComponent.value = HelpIns;
};

// Function to update body content to SettingsUser component
const showSettings = () => {
  currentBodyComponent.value = SettingsUser;
};

// Attach the functions globally so other components can use them
window.showScheduled = showScheduled;
window.goBackToMainContent = goBackToMainContent;
window.showInspectionDetails = showInspectionDetails;
window.showInspectionAdd = showInspectionAdd;
window.showCompletedIns = showCompletedIns;
window.showKnowledgeBase = showKnowledgeBase;
window.showSearchIns = showSearchIns;
window.showHelpIns = showHelpIns;
window.showSettings = showSettings;
</script>

<style scoped>
/* Dashboard layout styles */
#dashboard {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 10px;
}
</style>