<template>
    <div v-if="currentBodyComponent === 'Search'">
      <ion-page>
        <ion-content :scroll-y="true" tabindex="0">
          <main 
            class="container" 
            :class="{ 'dark-mode': themeStore.darkMode }"
            role="main"
            aria-label="Search Addresses"
          >
            <!-- Search input -->
            <div 
              class="search-container"
              role="search"
            >
              <input
                type="text"
                v-model="searchTerm"
                placeholder="Search for address or city"
                class="form-control mb-4 mt-4"
                :class="{ 'dark-mode': themeStore.darkMode }"
                aria-label="Search for addresses"
                aria-controls="search-results"
                aria-expanded="false"
                :aria-activedescendant="activeResult ? `result-${activeResult}` : undefined"
              >
              <button
                @click="filterAddresses"
                class="btn btn-primary search-button"
                :class="{ 'dark-mode': themeStore.darkMode }"
                aria-label="Search"
              >
                Search
              </button>
            </div>
  
            <div 
              v-if="loading" 
              class="loading-spinner"
              role="status"
              aria-label="Loading results"
            >
              <ion-spinner aria-hidden="true"></ion-spinner>
            </div>
  
            <div 
              class="list-group"
              role="region"
              aria-label="Search results"
              id="search-results"
            >
              <div
                v-for="(address, index) in filteredAddresses"
                :key="address.id"
                class="address-item list-group-item list-group-item-action"
                :class="{ 'dark-mode': themeStore.darkMode }"
                role="listitem"
                :id="`result-${index}`"
                tabindex="0"
              >
                <div>
                  <p :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }">
                    Address: {{ address.street }}, {{ address.city }}
                  </p>
                </div>
                <button
                  @click="viewInspections(address.id, false)"
                  class="btn btn-success"
                  aria-label="View inspections for this address"
                >
                  View Inspections
                </button>
              </div>
            </div>
  
            <!-- Back button at bottom -->
            <router-link
              to="/home"
              class="btn btn-danger mb-5 back-button-bottom"
              aria-label="Return to home page"
              role="button"
              @click="goBackToMainContent"
            >
              Go back
            </router-link>
          </main>
        </ion-content>
      </ion-page>
    </div>
    <div v-else-if="currentBodyComponent === 'InspectionDetails'">
      <InspectionSee :inspection="currentInspection" />
    </div>
  </template>
  
  <script>
  import { IonContent, IonPage, IonSpinner } from '@ionic/vue';
  import { useThemeStore } from '@/stores/theme';
  import { useAuthStore } from '@/stores/auth';
  import InspectionSee from './InspectionSee.vue';
  import axios from 'axios';
  
  export default {
    name: "SearchIns",
    components: {
      IonContent,
      IonPage,
      IonSpinner,
      InspectionSee
    },
    data() {
      return {
        addresses: [],
        filteredAddresses: [],
        searchTerm: '',
        loading: true,
        currentBodyComponent: 'Search',
        currentInspection: null,
        themeStore: useThemeStore(),
        authStore: useAuthStore(),
        activeResult: null
      };
    },
    methods: {
      async filterAddresses() {
        if (!this.searchTerm.trim()) {
          this.filteredAddresses = this.addresses;
          return;
        }
  
        this.filteredAddresses = this.addresses.filter(address => {
          return (
            address.street.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            address.city.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        });
      },
      async viewInspections(id) {
        try {
          const selectedAddress = this.addresses.find(addr => addr.id === id);
          if (selectedAddress && selectedAddress.inspections.length > 0) {
            this.authStore.login({
              addressId: id,
              completion: false,
              address: selectedAddress
            });
            this.currentInspection = selectedAddress.inspections[0];
            this.currentBodyComponent = 'InspectionDetails';
          }
        } catch (error) {
          console.log("Error showing inspection details:", error);
        }
      },
      goBackToMainContent() {
        window.goBackToMainContent();
      }
    },
    async created() {
      try {
        const response = await axios.get('https://api.jsonbin.io/v3/b/674884e3e41b4d34e45c4e11/latest', {
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
          }
        });
        this.addresses = response.data.record.addresses;
        this.filteredAddresses = this.addresses;
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
    mounted() {
      this.filterAddresses();
    },
    watch: {
            searchTerm(newVal) {
        this.filterAddresses();
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
  
  .search-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    max-width: 650px;
    margin: 0 auto 2rem;
  }
  
  .search-button {
    background-color: #00aaa2;
    border: none;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 0.8rem;
    height: 31px;
    display: flex;
    align-items: center;
    margin-top: 0.8cm;
  }
  
  .search-button:hover {
    background-color: #008f86;
  }
  
  .search-button.dark-mode {
    background-color: var(--ion-color-dark-tint);
  }
  
  .btn-success {
    background-color: #00aaa2;
    border: none;
    color: white;
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
  
  .btn-success:hover {
    background-color: #008f86;
  }
  
  .btn-danger {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
  
  .back-button-bottom {
    padding: 0.3rem 0.5rem;
    background-color: var(--ion-color-danger);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 1.2rem;
    white-space: nowrap;
    width: fit-content;
    margin: 2rem auto;
    position: relative;
    z-index: 1000;
    display: block;
  }
  
  .back-button-bottom:hover {
    background-color: var(--ion-color-danger-shade);
  }
  
  .form-control {
    flex: 1;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid var(--ion-color-medium);
  }
  
  .form-control.dark-mode {
    background-color: var(--ion-color-dark-shade);
    border-color: var(--ion-color-dark-tint);
    color: var(--ion-color-light);
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
  
  .address-item {
    width: 100%;
    max-width: 650px;
    margin: 0 auto 1rem;
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--ion-color-light);
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .address-item.dark-mode {
    background-color: var(--ion-color-dark-shade);
    border-color: var(--ion-color-dark-tint);
  }
  
  @media (max-width: 576px) {
    .container {
      padding: 1rem;
      padding-bottom: 4rem;
    }
  
    ion-content {
      --padding-bottom: 4rem;
    }
  
    .search-container {
      flex-direction: column;
    }
  
    .search-button {
      width: 100%;
    }
  }
  
  @media (min-width: 992px) {
    .container {
      padding-bottom: 4rem;
    }
  
    ion-content {
      --padding-bottom: 4rem;
    }
  }
  </style>
  