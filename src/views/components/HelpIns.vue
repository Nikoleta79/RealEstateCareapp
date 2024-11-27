<template>
  <ion-content class="ion-padding scrollable-content" scroll-y="true">
    <main class="container-fluid text-dark p-3">
      <h4>Getting Started</h4>
      <div class="border rounded p-2 mb-2">
        <p>Log in with your provided email and password.</p>
      </div>

      <h4>Scheduled Inspections</h4>
      <div class="border rounded p-3 mb-2">
        <p>Click on an address to view the list of inspections assigned to that address.</p>
      </div>

      <h4>Completed Inspections</h4>
      <div class="border rounded p-2 mb-2">
        <p>Click on an inspection to view it, make edits, or add additional information.</p>
      </div>

      <h4>Knowledge Base</h4>
      <div class="border rounded p-2 mb-2">
        <p>Here you can find information on how to use the app, best practices for completing inspections, and other useful information.</p>
      </div>

      <h4>Settings</h4>
      <div class="border rounded p-2 mb-7">
        <p>From the main dashboard, click on "Settings" to access your profile information, change your password, and customize your notification preferences.</p>
      </div>
    </main>
  </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';

export default {
  components: {
    IonContent,
  },
};
</script>

<style scoped>
.scrollable-content {
  height: 100vh; /* Full height for the content */
  overflow-y: auto; /* Enable scrolling */
  padding-bottom: 100px; /* Add margin for the last element */
}

.text-dark {
  color: #000;
}

.border {
  border: 1px solid #ccc;
}

.rounded {
  border-radius: 8px;
}

/* Media query for small screens */
@media (max-width: 600px) {
  .p-3 {
    padding: 1rem !important;
  }

  .p-2 {
    padding: 0.5rem !important;
  }

  .mb-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-7 {
    margin-bottom: 8rem !important;
  }
  h4 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
  }

  .scrollable-content {
    padding-bottom: 150px; /* Increase padding to ensure the last element is visible */
  }
}
</style> 
