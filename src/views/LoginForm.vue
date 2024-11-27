<template>
  <ion-page>
    <!-- Header -->
    <IonHeader class="custom-toolbar">
      <IonToolbar
          class="bg-# d-flex custom-toolbar justify-content-between align-items-center"
          color="white"
      >
        <IonButtons slot="end">
          <IonIcon
              :icon="squareOutline"
              size="small"
              class="text-white me-3 custom-icon custom-toolbar"
          />
          <IonIcon
              :icon="ellipseOutline"
              size="small"
              class="text-white me-3 custom-icon custom-toolbar"
          />
          <IonIcon
              :icon="chevronDownOutline"
              size="small"
              class="text-white custom-icon custom-toolbar"
          />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <header>
      <div class="d-flex justify-content-between align-items-center dashboard-toolbar">
        <div class="d-flex align-items-center">
          <img src="@/assets/logo.svg" alt="it is the Real Estate Care Logo" class="logo-style" />
        </div>
      </div>
    </header>

    <!-- Login Form -->
    <IonContent class="ion-no-padding flex-grow-1" :scroll-y="true">
      <div
          class="d-flex justify-content-center align-items-center"
          style="min-height: 70vh"
      >
        <div v-if="!is2FAEnabled" style="width: 300px">
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                  type="email"
                  id="email"
                  class="form-control"
                  v-model="email"
                  placeholder="Enter your email"
                  required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                  type="password"
                  id="password"
                  class="form-control"
                  v-model="password"
                  placeholder="Enter your password"
                  required
              />
            </div>
            <button
                type="submit"
                class="btn btn-primary w-100"
                style="background-color: #00aaa2; border: none"
            >
              Login
            </button>
          </form>
        </div>
        <div v-else style="width: 300px">
          <form @submit.prevent="handle2FAValidation">
            <div class="mb-3">
              <label for="2fa-code" class="form-label">Enter 2FA Code</label>
              <input
                  type="text"
                  id="2fa-code"
                  class="form-control"
                  v-model="entered2FACode"
                  placeholder="Enter any 6-digit code"
                  required
              />
            </div>
            <button
                type="submit"
                class="btn btn-primary w-100"
                style="background-color: #00aaa2; border: none"
            >
              Verify Code
            </button>
          </form>
        </div>
      </div>

      <!-- Error Toasts -->
      <IonToast
          :is-open="showErrorToast"
          @didDismiss="() => (showErrorToast = false)"
          message="Login failed. Please check your credentials and try again."
          duration="3000"
          color="danger"
      />
      <IonToast
          :is-open="show2FAErrorToast"
          @didDismiss="() => (show2FAErrorToast = false)"
          message="Invalid 2FA code. Please try again."
          duration="3000"
          color="danger"
      />
    </IonContent>

    <!-- Footer -->
    <footer
        class="container-fluid text-white fixed-bottom"
        style="background-color: #00aaa2"
    >
      <div class="row p-2">
        <div class="col d-flex flex-column justify-content-center text-center">
          <div class="row p-2">
            <div class="col d-flex flex-column justify-content-center text-center">
              <!-- Footer Content -->
              <div className="row p-2">
                <div class="col d-flex flex-column justify-content-center text-center">
                  <div class="row p-2">
                    <div class="col d-flex flex-column justify-content-center text-center">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </ion-page>
</template>

<script setup>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonContent,
  IonToast,
} from "@ionic/vue";
import {
  chevronDownOutline,
  ellipseOutline,
  squareOutline,
} from "ionicons/icons";
import { ref, nextTick } from "vue";
import { useAuthStore } from "@/stores/auth"; // Import Pinia store
import axios from "axios";
import router from "@/router";
import DOMPurify from 'dompurify';  // <-- Add this import here

const authStore = useAuthStore();
authStore.loadUserFromStorage();

// Form data
const email = ref("");
const password = ref("");
const showErrorToast = ref(false);
const is2FAEnabled = ref(false);
const entered2FACode = ref("");
const show2FAErrorToast = ref(false);

const handleLogin = async () => {
  try {
    // Sanitize email and password
    const sanitizedEmail = DOMPurify.sanitize(email.value);
    const sanitizedPassword = DOMPurify.sanitize(password.value);

    const response = await axios.get(
      "https://my-json-server.typicode.com/Joshuaisikah/demo/users"
    );
    const users = response.data;

    const user = users.find(
      (user) => user.email === sanitizedEmail && user.password === sanitizedPassword
    );

    if (user) {
      authStore.login(user); // Use Pinia login action
      is2FAEnabled.value = true;
    } else {
      showErrorToast.value = true;
    }
  } catch (error) {
    console.error("Login failed:", error);
    showErrorToast.value = true;
  }
};

const handle2FAValidation = async () => {
  if (entered2FACode.value === "123456") {
    authStore.completeLogin("dummy-token"); // Complete login in Pinia store
    await nextTick(); // Ensure the DOM is fully updated

    // Redirect to /home and reload the page
    router.push("/home").then(() => {
      window.location.reload();
    });
  } else {
    show2FAErrorToast.value = true;
  }
};
</script>


<style scoped>
@import "@/theme/variables.css";
</style>
