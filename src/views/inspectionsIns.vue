<template>
  <main class="container">
    <router-link :to="{ name: archive }" class="btn btn-danger" aria-label="Go back">Go back</router-link>
    <h1>Inspection for {{ address }}</h1>

    <!-- Display message if no inspection is found -->
    <p v-if="!inspection">No inspection available for this address.</p>

    <!-- Display the inspection details if found -->
    <div v-if="inspection">
      <div class="list-group gap-3">
        <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <!-- Display the inspection ID and date -->
          <div>
            <p>Inspection ID: {{ inspection.id }}</p>
            <p>Date: {{ inspection.date }}</p>
            <!-- Display the completion status -->
            <div class="badge" :class="{'text-bg-success': inspection.completion, 'text-bg-danger': !inspection.completion }" aria-label="Inspection status">
              {{ inspection.completion ? 'Completed' : 'In progress' }}
            </div>
          </div>
          <!-- Link to the inspection page, passing the inspection id and address id through local storage -->
          <router-link :to="{ name: 'inspection' }" @click="saveParams(inspection.id, addressId)" class="btn btn-primary" aria-label="Go to Inspection">Go to Inspection</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import store from '../store/auth.js'

export default {
  name: 'Inspection',
  data() {
    return {
      inspection: null,  // To hold the single inspection
      addressId: '',
      address: '',
      archive: 'scheduled',
    };
  },
  methods: {
    saveParams(inspection, address) {
      store.commit("changeInspection", inspection);
      store.commit("changeAddress", address);
    }
  },
  async created() {
    this.addressId = store.getters.address;
    this.archive = (store.getters.completion) ? 'completed' : 'scheduled';

    try {
      // Get the data from the API
      const response = await axios.get(`https://api.jsonbin.io/v3/b/674884e3e41b4d34e45c4e11/latest`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': '$9b$11$6OQ5plkCt1vTJN8m7VMniOP5RSMQB3WOfPoQlWh/JNbs2xeF7pshu'
        }
      });

      // Log the response for debugging

      // Filter the address based on the addressId
      let address = response.data.record.addresses.filter(address => address.id === this.addressId);
      if (address.length > 0) {
        // Get the first inspection from the inspections array
        let inspection = address[0].inspections[0];  // Just grab the first inspection

        if (inspection) {
          // Set the found inspection and address for display
          this.inspection = inspection;
          this.address = address[0].street + ', ' + address[0].city;
        } else {
          console.log('No inspection found for this address');
          this.inspection = null;
        }
      } else {
        console.log('Address not found');
        this.inspection = null;
      }
    } catch (error) {
      console.log('Error fetching data:', error);
      this.inspection = null;
    }
  }
};
</script>
