<template>
  <div v-if="currentBodyComponent === 'Scheduled'">
    <main
        class="container-fluid text-dark d-flex flex-column align-items-center pt-3 pb-5"
        :style="{ width: isMobileView ? '90%' : '96%', maxWidth: '800px', height: '85vh', overflowY: 'auto' }"
    >
      <button class="btn btn-danger align-self-start ms-3 mt-2" @click="goBackToScheduled">
        Go back
      </button>
      <h3 class="my-3 text-center">Address List</h3>
      <div v-if="inspections.length > 0" class="w-100">
        <div
            v-for="inspection in inspections"
            :key="inspection.id"
            class="d-flex flex-column align-items-center my-3 p-3 border rounded w-100"
            style="max-width: 700px;"
        >
          <span class="text-center">{{ inspection.address || 'No address available' }}</span>
          <button
              class="btn btn-success mt-2"
              @click="handleViewInspection(inspection.id)"
          >
            View Inspections
          </button>
        </div>
      </div>
      <p v-else class="mt-4 text-center">No scheduled inspections available.</p>
    </main>
  </div>
  <div v-else-if="currentBodyComponent === 'InspectionDetails'">
    <InspectionSee :inspection="currentInspection" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import InspectionSee from "./InspectionSee.vue";

const isMobileView = ref(window.innerWidth <= 576);
const inspections = ref([]);
const currentBodyComponent = ref("Scheduled");
const currentInspection = ref(null);

// Handle page resizing
const handleResize = () => {
  isMobileView.value = window.innerWidth <= 576;
};
window.addEventListener("resize", handleResize);
onUnmounted(() => window.removeEventListener("resize", handleResize));

// Fetch inspections
onMounted(() => {
  fetch("https://my-json-server.typicode.com/Joshuaisikah/demo/inspections")
      .then((response) => response.json())
      .then((data) => {
        inspections.value = data.filter(
            (inspection) =>
                inspection.status && inspection.status.toLowerCase() === "closed" &&
                inspection.address
        );
      })
      .catch((error) => console.error("Error fetching inspections:", error));
});

// Navigation handlers
const goBackToScheduled = () => {
  window.goBackToMainContent();
};

const handleViewInspection = (id) => {
  console.log(`handleViewInspection called with ID: ${id}`);

  // Fetch the details of the selected inspection by ID
  fetch(`https://my-json-server.typicode.com/Joshuaisikah/demo/inspections/${id}`)
      .then((response) => response.json())
      .then((data) => {
        currentInspection.value = data; // Set the inspection details to pass to InspectionSee
        currentBodyComponent.value = "InspectionDetails"; // Change the view to InspectionSee component
      })
      .catch((error) => console.error("Error fetching inspection details:", error));
};
</script>

<style scoped>
/* Improve the appearance of cards and buttons */
.custom-toolbar {
  background-color: #00aaa2;
  color: white;
}

/* Adjust the go-back button to fit the overall look */
.btn-danger {
  margin-top: 10px;
}

/* Styling for the scrollable area */
.scrollable-content {
  max-height: calc(100vh - 250px);
  overflow-y: auto;
}

/* Adjust padding and margins to tighten the UI */
.my-3 {
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}

.btn-success {
  background-color: #00aaa2;
  color: white;
  border: none;
}

.btn-success:hover {
  background-color: #008f86;
}
</style> 
