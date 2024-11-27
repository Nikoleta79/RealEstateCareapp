<template>
  <ion-content class="ion-padding scrollable-content" scroll-y="true">
    <main
        class="container-fluid text-dark d-flex flex-column align-items-center"
        style="width: 90%; max-width: 800px; margin-top: 20px;"
    >
      <!-- Profile Settings Form -->
      <form @submit.prevent="handleSaveSettings" style="width: 100%;" aria-labelledby="profile-settings-form">
        <h2>Profile Settings</h2>
        <div class="mb-3">
          <label for="firstname" class="form-label">Firstname</label>
          <input
              type="text"
              id="firstname"
              class="form-control"
              placeholder="Enter your first name"
              v-model="firstName"
          />
        </div>
        <div class="mb-3">
          <label for="lastname" class="form-label">Lastname</label>
          <input
              type="text"
              id="lastname"
              class="form-control"
              placeholder="Enter your last name"
              v-model="lastName"
          />
        </div>
        <button
            type="submit"
            class="btn btn-primary w-30 mb-4"
            style="background-color: #00aaa2; border: none;"
        >
          Save Changes
        </button>
      </form>

      <!-- Password Update -->
      <form @submit.prevent="handleSavePassword" style="width: 100%;">
        <h2>Change Password</h2>
        <div class="mb-3">
          <label for="newPassword" class="form-label">New Password</label>
          <input
              type="password"
              id="newPassword"
              class="form-control"
              placeholder="Enter your new password"
              v-model="newPassword"
          />
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirm New Password</label>
          <input
              type="password"
              id="confirmPassword"
              class="form-control"
              placeholder="Confirm your new password"
              v-model="confirmPassword"
          />
        </div>
        <button
            type="submit"
            class="btn btn-primary w-30 mb-4"
            style="background-color: #00aaa2; border: none;"
        >
          Save Password
        </button>
      </form>

      <!-- Logout and Save Buttons -->
      <div class="d-flex justify-content-between" style="width: 100%;">
        <button
            class="btn btn-primary mb-20 w-30"
            style="background-color: #00aaa2; border: none;"
            @click="handleSaveChangesWithMainContent"
        >
          Save Changes
        </button>
        <button
            @click="handleLogout"
            class="btn btn-danger mb-20 w-30"
            style="background-color: #dc3545; border: none;"
        >
          Logout
        </button>
      </div>
    </main>

    <!-- Toast for Success -->
    <ion-toast
        :is-open="showToast"
        :message="toastMessage"
        duration="3000"
        color="success"
        position="top"
        @did-dismiss="showToast = false"
    ></ion-toast>
  </ion-content>
</template>

<script setup>
import { IonContent, IonToast } from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useAuthStore } from "@/stores/auth"; // Import Pinia store



// Router and Data
const router = useRouter();
const showToast = ref(false);
const toastMessage = ref("");

// Form Data
const firstName = ref("John");
const lastName = ref("Doe");
const newPassword = ref("");
const confirmPassword = ref("");

// Toggle Settings
const darkMode = ref(false);
const notifications = ref(true);

// Auth Store
const authStore = useAuthStore();

// Define global function for navigation
const goBackToMainContent = () => {
  toastMessage.value = "Redirecting to main content...";
  showToast.value = true;
  window.location.reload(); // Reload the app
  setTimeout(() => {
    router.replace("/home");
  }, 2000);
};
window.goBackToMainContent = goBackToMainContent;

// Handle Save Settings
const handleSaveSettings = async () => {
  try {
    const endpoint = "https://my-json-server.typicode.com/Joshuaisikah/demo/settings";
    const payload = {
      userPreferences: {
        theme: darkMode.value ? "dark" : "light",
        notifications: notifications.value,
      },
      accountDetails: {
        name: `${firstName.value} ${lastName.value}`,
      },
    };

    await axios.put(endpoint, payload);
    toastMessage.value = "Settings saved successfully!";
    showToast.value = true;
  } catch (error) {
    console.error("Error saving settings:", error);
  }
};

// Save Changes and Redirect
const handleSaveChangesWithMainContent = async () => {


  window.goBackToMainContent();
   // Reload the app// Call the global function after saving settings
};

// Handle Save Password
const handleSavePassword = async () => {
  if (newPassword.value !== confirmPassword.value) {
    toastMessage.value = "Passwords do not match!";
    showToast.value = true;
    return;
  }

  try {
    const usersEndpoint = "https://my-json-server.typicode.com/Joshuaisikah/demo/users";
    const userId = 3; // Replace with dynamic user ID
    const payload = {
      password: newPassword.value,
    };

    await axios.patch(`${usersEndpoint}/${userId}`, payload);
    toastMessage.value = "Password updated successfully!";
    showToast.value = true;
  } catch (error) {
    console.error("Error saving password:", error);
  }
};

// Handle Logout
const handleLogout = () => {
  // Clear auth store and localStorage
  authStore.logout();
  localStorage.clear();

  // Force reload to clean state and redirect to login
  toastMessage.value = "You have logged out!";
  showToast.value = true;

  setTimeout(() => {
    window.location.reload(); // Reload the app
    router.replace("/login"); // Redirect to login page
  }, 2000);
};
</script>

<style scoped>
.scrollable-content {
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 80px;
}

.text-dark {
  color: #000;
}

.btn-primary {
  background-color: #00aaa2;
  border: none;
}
.mb-20 {
  margin-bottom: 150px !important;
}
.btn-primary:hover {
  background-color: #008f86;
}

.btn-danger {
  background-color: #dc3545;
  border: none;
}

.btn-danger:hover {
  background-color: #c82333;
}
</style>
