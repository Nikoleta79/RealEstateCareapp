<template>
  <main class="container">
    <!-- Router link to the dashboard -->
    <router-link :to="{ name: 'home' }" class="btn btn-danger" aria-label="Go back to the dashboard">Go back</router-link>
    <h1>Address List</h1>

    
    <p v-if="addresses.length === 0">No addresses available.</p>

    <!-- Container for a list of addresses -->
    <div class="list-group" v-if="addresses.length > 0">
      <a href="#" v-for="address in addresses" :key="address.id" class="list-group-item list-group-item-action d-flex flex-column justify-content-between align-items-center" aria-label="List of addresses">
        {{ address.street }}, {{ address.city }}
         <button class="btn btn-primary" @click="viewInspections(address.id, false)" aria-label="View inspections for this address">View Inspections</button>
      </a>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import store from '../store/auth.js';

store.commit('toggleCompletion', false);

export default {
  name: "AddressList",
  data() {
    return {
      addresses: [] // Initialize addresses array
    };
  },
  async created() {
    try {
      // Make a GET request to the specified API endpoint
      const response = await axios.get(`https://api.jsonbin.io/v3/b/63c1a09815ab31599e35cf00/latest`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
        }
      });

      console.log('Full Response:', response.data);

      // Check if addresses exist in the response and assign them to the data property
      const addresses = response.data.record ? response.data.record.addresses : [];


      
      this.addresses = addresses.filter(address => {
        // Skip addresses without inspections
        if (!address.inspections) return false;

        // Only include addresses where at least one inspection has completion set to false
        return address.inspections.some(inspection => inspection.completion === false);
      });

      // Log the filtered addresses for debugging

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  methods: {
    async viewInspections(id, completion) {
      try {
        // Save the address id and completion status to local storage
        store.commit("changeAddress", id);
        store.commit("toggleCompletion", completion);

        // Navigate to the inspections view
        this.$router.push({ name: 'inspections' });
      } catch (error) {
        console.error('Error during navigation:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add any scoped styles for this component here */
</style>
