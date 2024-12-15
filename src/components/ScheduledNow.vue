<template>
    <ion-page>
      <ion-content :scroll-y="true" tabindex="0">
        <div v-if="currentBodyComponent === 'Scheduled'">
          <router-link    to="/home"
    class="btn btn-danger back-button-bottom mt-4 mb-20"
    aria-label="Go back to the previous screen"
    @click="goBackToMainContent">
  Go back
</router-link>
          <main class="container" aria-label="Address List" :class="{ 'dark-mode': themeStore.darkMode }">
            <div class="content-wrapper">
              <!-- Main content -->
              <div class="main-content mt-10 p-8">
                <h1 aria-label="Address List" :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }">Address List</h1>
  
                <div v-if="loading" class="loading-spinner">
                  <ion-spinner></ion-spinner>
                </div>
  
                <div class="list-group">
                  <div
                      v-for="address in addresses"
                      :key="address.id"
                      class="address-item list-group-item list-group-item-action"
                      :class="{ 'dark-mode': themeStore.darkMode }"
                      :aria-current="address.id === selectedAddressId ? 'page' : undefined"
                      tabindex="0"
                      @focus="selectedAddressId = address.id"
                  >
                    <span :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }">
                      {{ address.street }}, {{ address.city }}
                    </span>
                    <ion-button
    @click.prevent="viewInspections(address.id, false)"
    size="small"
    style="--background: #00aaa2;"
    :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }"
    aria-label="View Inspections"
    aria-labelledby="view-inspection-btn-{{ address.id }}">

  View Inspections
</ion-button>

                  </div>
                </div>                  
              </div>
            </div>
          </main>
        </div>
        <div v-else-if="currentBodyComponent === 'InspectionDetails'">
          <InspectionSee :inspection="currentInspection" />
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonButton, IonSpinner, IonContent, IonPage } from '@ionic/vue';
  import { useThemeStore } from '@/stores/theme';
  import { useAuthStore } from '@/stores/auth';
  import InspectionSee from './InspectionSee.vue';
  import axios from 'axios';
  
  export default {
    name: "ScheduledNow",
    components: {
      IonButton,
      IonSpinner,
      IonContent,
      IonPage,
      InspectionSee
    },
    data() {
      return {
        addresses: [],
        selectedAddressId: null,
        loading: true,
        currentBodyComponent: 'Scheduled',
        currentInspection: null,
        themeStore: useThemeStore(),
        authStore: useAuthStore()
      };
    },
    async created() {
      this.authStore.login({completion: false});
  
      try {
        const response = await axios.get('https://api.jsonbin.io/v3/b/674884e3e41b4d34e45c4e11/latest', {
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
          }
        });
  
        this.addresses = response.data.record.addresses.slice(0, 10);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
    methods: {
      goBackToMainContent() {
        window.goBackToMainContent();
      },
      async viewInspections(id, completion) {
        try {
          const selectedAddress = this.addresses.find(addr => addr.id === id);
          if (selectedAddress && selectedAddress.inspections.length > 0) {
            this.authStore.login({
              addressId: id,
              completion: completion,
              address: selectedAddress
            });
            
            this.currentInspection = selectedAddress.inspections[0];
            this.currentBodyComponent = 'InspectionDetails';
          }
        } catch (error) {
          console.log("Error showing inspection details:", error);
        }
      },
      logout() {
        this.authStore.$reset();
        window.goBackToMainContent();
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 8rem;
  }
  
  ion-content {
    --overflow: auto;
    --padding-bottom: 6rem;
    scroll-behavior: smooth;
  }
  
  
  ion-content:focus {
    outline: none;
  }
  
  ion-content::part(scroll) {
    scroll-behavior: smooth;
    padding-bottom: 6rem;
  }
  
  
  ion-content::part(scroll)::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  
  ion-content::part(scroll) {
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }

    
  .content-wrapper {
    position: relative;
    width: 100%;
  }
  
  .main-content {
    margin-top: 2rem;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
  }
  
  .mb-20 {
    margin-bottom: 6px;
    padding: 1rem 2rem;
  }
  
  .loading-spinner {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }
  
  .dark-mode {
    background-color: var(--ion-color-dark);
    color: var(--ion-color-light);
  }
  
  .address-item {
    width: 100%;
    max-width: 650px;
    margin: 0 auto 1rem auto;
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    background-color: var(--ion-color-light);
    flex-wrap: nowrap;
    gap: 1rem;
  }
  
  .address-item.dark-mode {
    background-color: var(--ion-color-dark-shade);
    border-color: var(--ion-color-dark-tint);
  }
  
  .address-item span {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .text-light {
    color: #ffffff !important;
  }
  
  .text-dark {
    color: var(--ion-color-dark) !important;
  }
  
  h1 {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  ion-button {
    --padding-start: 0.75rem;
    --padding-end: 0.75rem;
    min-width: fit-content;
    font-size: 1.2rem;
  }
  
  :host {
    --ion-color-primary: #00aaa2;
    --ion-color-primary-contrast: #ffffff;
    --ion-color-danger: #dc3545;
    --ion-color-danger-contrast: #ffffff;
  }
  
  @media (max-width: 360px) {
    .container {
      padding: 0.5rem;
    }
  
    .address-item {
      padding: 1rem;
    }
  
    .back-button {
      padding: 0.4rem 0.8rem;
      font-size: 1.2rem;
    }
  
    ion-button {
      --padding-start: 0.5rem;
      --padding-end: 0.5rem;
      font-size: 0.85rem;
    }
  }
  </style>
  