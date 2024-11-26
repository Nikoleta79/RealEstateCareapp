<template>
  <ion-page>
    <IonContent class="ion-padding" :scroll-y="true" style="padding-bottom: 4cm;">
      <!-- Show Search or Inspection Details Dynamically -->
      <div v-if="currentBodyComponent === 'Search'">
        <main
            class="container-fluid w-100 text-dark d-flex flex-column  align-items-left"
            style="width: 96%; max-width: 800px; margin-top: 20px;"
        >
          <!-- Go Back button -->
          <button class="btn btn-danger align-self-start mb-4" @click="goBackToMainContent">
            Go Back
          </button>
          <!-- Search bar input -->
          <input
              type="text"
              class="form-control mb-4"
              placeholder="Search for address or city"
              v-model="searchTerm"
              style="max-width: 700px;"
          />
          <div v-if="filteredInspections.length > 0">
            <div
                v-for="inspection in filteredInspections"
                :key="inspection.id"
                class="d-flex flex-column align-items-center  mb-20 my-1 p-3 border rounded"
                style="width: 100%; max-width: 700px;"
            >
              <span>{{ inspection.address || 'No address available' }}</span>
              <button
                  class="btn btn-success mt-2"
                  @click="handleViewInspection(inspection.id)"
              >
                View Inspections
              </button>
            </div>
          </div>
          <p v-else>No inspections available for the entered search term.</p>
        </main>
      </div>

      <!-- Show Inspection Details -->
      <div v-else-if="currentBodyComponent === 'InspectionDetails'">
        <InspectionSee :inspection="currentInspection" />
      </div>
    </IonContent>
  </ion-page>
</template>

---

### Script Changes

```vue
<script setup>
import { IonContent, IonPage } from '@ionic/vue';
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import InspectionSee from './InspectionSee.vue'; // Import the InspectionSee component

const inspections = ref([]);
const searchTerm = ref('');
const currentBodyComponent = ref("Search"); // Start with the "Search" view
const currentInspection = ref(null); // Store the current inspection details

const filteredInspections = computed(() =>
    inspections.value.filter((inspection) =>
        inspection.address ? inspection.address.toLowerCase().includes(searchTerm.value.toLowerCase()) : false
    )
);

onMounted(async () => {
  try {
    const response = await fetch('https://my-json-server.typicode.com/Joshuaisikah/demo/inspections');
    const data = await response.json();
    inspections.value = data;
  } catch (error) {
    console.error('Error fetching inspections:', error);
  }
});

// Function to go back to main content
const goBackToMainContent = () => {
  window.goBackToMainContent();
};

// Function to handle View Inspection click
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
@import "@/theme/variables.css";

.active-icon {
  color: #00AAA2;
}

.footer-icon-grey {
  color: grey;
}

.footer-text-grey {
  color: grey;
}

/* Ensure consistent styling with the second template */
.btn-success {
  background-color: #00aaa2;
  color: white;
  border: none;
}

.mb-20{
  margin-bottom: 50pX  !important;
}

.btn-success:hover {
  background-color: #008f86;
}
</style>
