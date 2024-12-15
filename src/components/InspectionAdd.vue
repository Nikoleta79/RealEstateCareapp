<template>
  <ion-page>
    <IonContent class="ion-padding" scroll-y="true">
      <IonToast
          :is-open="showToast"
          @didDismiss="showToast = false"
          :message="toastMessage"
          duration="3000"
          color="success"
          position="top"
      ></IonToast>
      <!-- Scrollable Form Content -->
      <div class="form-container">
        <main class="container-fluid text-dark d-flex flex-column align-items-start w-100">
          <form aria-label="Form to edit inspection" class="w-100">
            <h1 class="mb-4">Inspection 111</h1>
            <div class="form-group">
              <label for="cleanlinessScore" aria-label="Cleanliness Score">Cleanliness Score</label>
              <select class="form-select" id="cleanlinessScore" aria-label="Cleanliness score dropdown">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <!-- Damage Section -->
            <div class="form-group my-3">
              <div class="form-group my-3 d-flex align-items-center">
                <button
                    type="button"
                    class="btn btn-secondary d-flex align-items-center"
                    aria-label="Toggle damage section"
                    @click="showDamageForm = !showDamageForm"
                >
                  ▼
                </button>
                <span class="ms-3 fs-5">Damage</span>
              </div>

              <div class="d-flex justify-content-start">
                <button type="button" class="btn btn-primary" aria-label="Add Damage">Add Damage</button>
              </div>

              <div v-if="showDamageForm" class="mt-3">
                <button
                    type="button"
                    class="btn btn-danger"
                    aria-label="Delete damage"
                    @click="showDamageForm = false"
                >
                  Delete
                </button>
                <div class="form-group">
                  <label>Location</label>
                  <input type="text" class="form-control" placeholder="Enter the location of the damage" />
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="newDamage" />
                  <label class="form-check-label" for="newDamage">New</label>
                </div>
                <div class="form-group">
                  <label>Type</label>
                  <input type="text" class="form-control" placeholder="Enter the type of damage" />
                </div>
                <div class="form-group">
                  <label>Date</label>
                  <input type="date" class="form-control" placeholder="Enter the date the damage was discovered" />
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="acuteAction" />
                  <label class="form-check-label" for="acuteAction">Acute Action</label>
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control" placeholder="Enter a description of the damage"></textarea>
                </div>
                <div class="form-group">
                  <label>Photos</label>
                  <input type="file" class="form-control" multiple />
                </div>
              </div>
            </div>

            <!-- Maintenance Section -->
            <div class="form-group my-3">
              <div class="form-group my-3 d-flex align-items-center">
                <button
                    type="button"
                    class="btn btn-secondary d-flex align-items-center"
                    aria-label="Toggle maintenance section"
                    @click="showMaintenanceForm = !showMaintenanceForm"
                >
                  ▼
                </button>
                <span class="ms-3 fs-5">Maintenance</span>
              </div>

              <div class="d-flex justify-content-start">
                <button type="button" class="btn btn-primary" aria-label="Add Maintenance">Add Maintenance</button>
              </div>

              <div v-if="showMaintenanceForm" class="mt-3">
                <button
                    type="button"
                    class="btn btn-danger"
                    aria-label="Delete maintenance"
                    @click="showMaintenanceForm = false"
                >
                  Delete
                </button>
                <div class="form-group">
                  <label>Location</label>
                  <input type="text" class="form-control" placeholder="Enter the location of the maintenance" />
                </div>
                <div class="form-group">
                  <label>Type</label>
                  <input type="text" class="form-control" placeholder="Enter the type of maintenance" />
                </div>
                <div class="form-group">
                  <label>Date</label>
                  <input type="date" class="form-control" placeholder="Enter the date of the maintenance" />
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control" placeholder="Enter a description of the maintenance"></textarea>
                </div>
                <div class="form-group">
                  <label>Photos</label>
                  <input type="file" class="form-control" multiple />
                </div>
              </div>
            </div>

            <!-- Installations Section -->
            <div class="form-group my-3">
              <div class="form-group my-3 d-flex align-items-center">
                <button
                    type="button"
                    class="btn btn-secondary d-flex align-items-center"
                    aria-label="Toggle installation section"
                    @click="showInstallationsForm = !showInstallationsForm"
                >
                  ▼
                </button>
                <span class="ms-3 fs-5">Installations</span>
              </div>

              <div class="d-flex justify-content-start">
                <button type="button" class="btn btn-primary" aria-label="Add Installation">Add Installation</button>
              </div>

              <div v-if="showInstallationsForm" class="mt-3">
                <button
                    type="button"
                    class="btn btn-danger"
                    aria-label="Delete installation"
                    @click="showInstallationsForm = false"
                >
                  Delete
                </button>
                <div class="form-group">
                  <label>Location</label>
                  <input type="text" class="form-control" placeholder="Enter the location of the installation" />
                </div>
                <div class="form-group">
                  <label>Type</label>
                  <input type="text" class="form-control" placeholder="Enter the type of installation" />
                </div>
                <div class="form-group">
                  <label>Date</label>
                  <input type="date" class="form-control" placeholder="Enter the date of the installation" />
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control" placeholder="Enter a description of the installation"></textarea>
                </div>
                <div class="form-group">
                  <label>Photos</label>
                  <input type="file" class="form-control" multiple />
                </div>
              </div>
            </div>

            <!-- Modifications Section -->
            <div class="form-group my-3">
              <div class="form-group my-3 d-flex align-items-center">
                <button
                    type="button"
                    class="btn btn-secondary d-flex align-items-center"
                    aria-label="Toggle modifications section"
                    @click="showModificationsForm = !showModificationsForm"
                >
                  ▼
                </button>
                <span class="ms-3 fs-5">Modifications</span>
              </div>

              <div class="d-flex justify-content-start">
                <button type="button" class="btn btn-primary" aria-label="Add Modification">Add Modification</button>
              </div>

              <div v-if="showModificationsForm" class="mt-3">
                <button
                    type="button"
                    class="btn btn-danger"
                    aria-label="Delete modification"
                    @click="showModificationsForm = false"
                >
                  Delete
                </button>
                <div class="form-group">
                  <label>Existing Situation</label>
                  <input type="text" class="form-control" placeholder="Enter existing situation" />
                </div>
                <div class="form-group">
                  <label>Location</label>
                  <input type="text" class="form-control" placeholder="Enter the location" />
                </div>
                <div class="form-group">
                  <label>Performed By</label>
                  <input type="text" class="form-control" placeholder="Enter the performer" />
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control" placeholder="Enter a description"></textarea>
                </div>
                <div class="form-group">
                  <label>Action</label>
                  <input type="text" class="form-control" placeholder="Enter action taken" />
                </div>
                <div class="form-group">
                  <label>Comments</label>
                  <input type="text" class="form-control" placeholder="Enter comments" />
                </div>
                <div class="form-group">
                  <label>Photos</label>
                  <input type="file" class="form-control" multiple />
                </div>
              </div>
            </div>

            <!-- Footer section -->
            <div class="form-group d-flex gap-3 mb-4 justify-content-between footer-buttons">
              <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  aria-label="Cancel inspection"
                  @click="handleCancelClick"
              >
                Cancel
              </button>
              <button
                  class="btn btn-success btn-sm"
                  type="submit"
                  aria-label="Save inspection"
                  @click="handleSaveClick"
              >
                Save inspection
              </button>
              <button
                  type="button"
                  class="btn btn-success btn-sm"
                  aria-label="Complete inspection"
                  @click="handleCompleteClick"
              >
                Complete inspection
              </button>                        </div>
          </form>
        </main>
      </div>
    </IonContent>
  </ion-page>
</template>

<script setup>
import { ref } from "vue";
import {IonToast } from "@ionic/vue";

const showDamageForm = ref(false);
const showMaintenanceForm = ref(false);
const showInstallationsForm = ref(false);
const showModificationsForm = ref(false);
const showToast = ref(false);
const toastMessage = ref("");


const handleCancelClick = () => {
  showToast.value = true;
  toastMessage.value = "Inspection canceled";
};

const handleSaveClick = () => {
  showToast.value = true;
  toastMessage.value = "Inspection saved successfully!";
};

const handleCompleteClick = () => {
  showToast.value = true;
  toastMessage.value = "Inspection completed successfully!";
  window.goBackToMainContent(); 
};

</script>

<style scoped>
@import "../assets/variables.css";

.form-container {
  height: calc(100vh - 220px); 
  padding: 1.5rem;
  overflow-y: auto;
  width: 90%; 
  max-width: 1400px; 
  margin: 0 auto; 
}

.container-fluid {
  flex-grow: 1;
  padding-bottom: 2rem;
  width: 100%;
  margin: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 100%;
}

.ion-content {
  --overflow: auto;
}

.form-group select,
.form-group input,
.form-group textarea {
  width: 100%;
}

.form-group {
  width: 100%;
}

.btn {
  width: auto;
  font-size: 0.8rem;
  padding: 0.3rem 0.5rem;
}

.btn-primary {
  background-color: var(--ion-color-primary);
  border: none;
  color: white;
}

.btn-primary:hover {
  background-color: var(--ion-color-primary-shade);
}

.btn-success {
  background-color: #00aaa2;
  border: none;
  color: white;
}

.btn-success:hover {
  background-color: #008f86;
}

.btn-danger {
  background-color: var(--ion-color-danger);
  border: none;
  color: white;
}

.btn-danger:hover {
  background-color: var(--ion-color-danger-shade);
}

.btn-secondary {
  background-color: var(--ion-color-medium);
  border: none;
  color: white;
}

.btn-secondary:hover {
  background-color: var(--ion-color-medium-shade);
}

.footer-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: nowrap;
}

.btn-danger,
.btn-success {
  flex-grow: 1;
}


.form-container::-webkit-scrollbar {
  display: none;
}
.form-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (min-width: 576px) {
  .form-container {
    width: 90%;
    margin: 0 auto;
  }
}
</style>


  