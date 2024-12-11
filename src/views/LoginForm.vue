<template>
  <ion-page>
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
          <img src="../assets/logo.svg" alt="Real Estate Care Logo" class="logo-style" />
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
          <form 
            @submit.prevent="handleLogin" 
            class="login-form"
            aria-labelledby="login-heading"
            role="form"
          >
            <h2 id="login-heading" class="text-center mb-4">Login</h2>
            
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                  type="email"
                  id="email"
                  v-model="email"
                  class="form-control"
                  required
                  autocomplete="email"
                  aria-required="true"
                  aria-invalid="false"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Password</label>

              <div class="password-input-wrapper">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="password"
                  class="form-control"
                  required
                  autocomplete="current-password"
                  aria-required="true"
                  aria-invalid="false"
                  aria-label="password"
                />
                <button 
                  type="button"
                  class="password-toggle"
                  @click="togglePassword"
                  :aria-label="showPassword ? 'Hide password' : 'Show password'"
                  aria-pressed="false"
                >
                  <ion-icon :icon="showPassword ? eyeOff : eye"></ion-icon>
                </button>
              </div>
            </div>
            <button 
              type="submit" 
              class="btn btn-primary w-100"
              style="background-color: #00aaa2; border: none"
              :disabled="isLoading"
              aria-busy="false"
            >
              <span v-if="isLoading" class="spinner" aria-hidden="true"></span>
              {{ isLoading ? 'Logging in...' : 'Login' }}
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
                  v-model="entered2FACode"
                  class="form-control"
                  required
                  aria-required="true"
                  aria-invalid="false"
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

   
    <footer
        class="container-fluid text-white fixed-bottom"
        style="background-color: #00aaa2"
    >
      <div class="row p-2">
        <div class="col d-flex flex-column justify-content-center text-center">
          <div class="row p-2">
            <div class="col d-flex flex-column justify-content-center text-center">
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
  IonPage,
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
import { useAuthStore } from '../stores/auth';
import axios from "axios";
import router from "../router";
import { eye, eyeOff } from "ionicons/icons";

const authStore = useAuthStore();
authStore.loadUserFromStorage();


const email = ref("");
const password = ref("");
const showErrorToast = ref(false);
const is2FAEnabled = ref(false);
const entered2FACode = ref("");
const show2FAErrorToast = ref(false);
const isLoading = ref(false);
const showPassword = ref(false);

const handleLogin = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get(
        "https://api.jsonbin.io/v3/b/674886bcad19ca34f8d20b23/latest",
        {
          headers: {
            'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
          }
        }
    );

    if (response.status !== 200) {
      showErrorToast.value = true;
      isLoading.value = false;
      return;
    }

    const user = response.data.record.filter(user =>
        user.email === email.value &&
        user.password === password.value
    );

    if (user.length > 0) {
      authStore.login(user[0]); // Use Pinia login action
      is2FAEnabled.value = true;
      isLoading.value = false;
    } else {
      showErrorToast.value = true;
      isLoading.value = false;
    }
  } catch (error) {
    console.error("Login failed:", error);
    showErrorToast.value = true;
    isLoading.value = false;
  }
};

const handle2FAValidation = async () => {
  if (entered2FACode.value === "123456") {
    authStore.completeLogin("dummy-token"); // login in Pinia store
    await nextTick(); 

    // Redirect to /home and reload the page
    router.push("/home").then(() => {
      window.location.reload();
    });
  } else {
    show2FAErrorToast.value = true;
  }
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
}
</script>

<style scoped>
@import "../theme/variables.css";

.custom-toolbar {
  background-color: #00aaa2;
  color: white;
}

.custom-icon {
  color: white;
}

.logo-style {
  height: 40px;
  margin: 10px;
}

.dashboard-toolbar {
  background-color: white;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-control {
  border-radius: 4px;
  border: 1px solid #ced4da;
}

.form-control:focus {
  border-color: #00aaa2;
  box-shadow: 0 0 0 0.2rem rgba(0, 170, 162, 0.25);
}

.btn-primary {
  background-color: #00aaa2;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #008f86;
}

footer {
  background-color: #00aaa2;
  padding: 1rem 0;
}

.password-input-wrapper {
  position: relative;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.password-toggle ion-icon {
  font-size: 18px;
  color: #6c757d;
}
</style>