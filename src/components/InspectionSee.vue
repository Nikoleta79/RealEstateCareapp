<template>
    <main
        class="container-fluid text-dark d-flex flex-column align-items-center pt-3 pb-5"
        :style="{ width: isMobileView ? '90%' : '96%', maxWidth: '800px', height: '85vh', overflowY: 'auto' }"
    >
      <button class="btn btn-danger align-self-start ms-3 mt-2" @click="goBackToPrevious">
        Go back
      </button>
      <div v-if="inspection" style="max-width: 100%; margin: 0 auto; text-align: left; padding: 3px; border-radius: 10px;">
        <div style="padding: 20px; border-radius: 10px;">
          <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 10px; color: #333;">
            Inspection at {{ inspection.address }}
          </h2>
          <div
              style="
              padding: 20px;
              border-radius: 10px;
              border: 1px solid #ccc;
              display: flex;
              justify-content: space-between;
              align-items: center;"
          >
            <div style="text-align: left;">
              <p style="font-size: 1.2rem; color: #555; margin-bottom: 10px; padding: 10px;">
                <strong>Inspection ID:</strong> {{ inspection.id }}
              </p>
              <p style="font-size: 1.2rem; color: #555; margin-bottom: 20px; padding: 10px;">
                <strong>Date:</strong> {{ inspection.scheduledDate }}
              </p>
              <span
                  :style="{
                  padding: '8px 16px',
                  borderRadius: '5px',
                  color: '#fff',
                  backgroundColor: inspection.status === 'Completed' ? '#28a745' : '#dc3545',
                  marginRight: '10px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  border: '1px solid #ccc',
                }"
              >
                {{ inspection.status || 'Pending' }}
              </span>
            </div>
            <IonButton
                color=" bg-#00AAA2 border rounded"
                @click="goToInspectionAdd"
                style="font-weight: bold; border: 1px solid #ccc; margin-bottom: 2px; background: #00AAA2"
            >
              GO TO INSPECTION
            </IonButton>
          </div>
        </div>
      </div>
      <p v-else class="mt-4 text-center">No scheduled inspections available.</p>
    </main>
  </template>
  
  <script setup>
  import {ref, onUnmounted} from "vue";
  import {IonButton} from '@ionic/vue';
  
  
  const props = defineProps({
    inspection: {
      type: Object,
      required: true
    }
  });
  
  const isMobileView = ref(window.innerWidth <= 576);
  
  
  const handleResize = () => {
    isMobileView.value = window.innerWidth <= 576;
  };
  window.addEventListener("resize", handleResize);
  onUnmounted(() => window.removeEventListener("resize", handleResize));
  
  
  const goBackToPrevious = () => {
    window.goBackToMainContent(); 
  };
  
  const goToInspectionAdd = () => {
    window.showInspectionAdd(); 
  };
  </script>
  
  <style scoped>
  @import "../assets/variables.css";
  
  
  .custom-toolbar {
    background-color: #00aaa2;
    color: white;
  }
  
  
  .btn-danger {
    margin-top: 10px;
  }
  
  
  .scrollable-content {
    max-height: calc(100vh - 250px);
    overflow-y: auto;
  }
  
  
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
  