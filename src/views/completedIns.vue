<template>
  <main class="container" aria-label="Address List">
    <router-link :to="{ name: 'home' }" class="btn btn-danger" aria-label="Go Back">Go back</router-link>
    <h1 aria-label="Address List">Address List</h1>
    <div class="list-group">
      <a href="#" v-for="address in addresses" :key="address.id" class="list-group-item list-group-item-action d-flex flex-column justify-content-between align-items-center" :aria-current="address.id === selectedAddressId ? 'page' : undefined" tabindex="0" @focus="selectedAddressId = address.id" @click="viewInspections(address.id, true)" aria-label="Address">
        {{ address.street }}, {{ address.city }}
        <button class="btn btn-primary" @click="viewInspections(address.id, true)" aria-label="View Inspections">View Inspections</button>
      </a>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import store from '../store/auth.js'

export default {
  name: "AddressList",
  data() {
    return {
      addresses: [] // to store addresses
    };
  },
  async created() {
    // Store completion status in local storage
    store.commit('toggleCompletion', true);

    try {
      // Make a GET request to the specified API endpoint
      const response = await axios.get(`https://api.jsonbin.io/v3/b/674884e3e41b4d34e45c4e11/latest`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
        }
      });

      // Log the fetched response

      // Assign addresses to the component's data
      this.addresses = response.data.record.addresses;

      // Display only the first 10 addresses
      this.addresses = this.addresses.slice(0, 10);

      // Log the addresses to verify they are correctly assigned
      console.log("First 10 addresses:", this.addresses);

    } catch (error) {
      console.log("Error fetching data:", error);
    }
  },
  methods: {
    async viewInspections(id, completion) {
      try {
        // Save the address id to local storage so it can be accessed in the inspections view
        store.commit("changeAddress", id);
        // Save the completion status to local storage so it can be accessed in the inspections view
        store.commit("toggleCompletion", completion);
        // Navigate to the inspections view
        this.$router.push({name: 'inspections'});
      } catch (error) {
        console.log("Error navigating to inspections:", error);
      }
    }
  }
};
</script>
