<template>
  <ion-content class="ion-padding">
    <ion-list>
      <!-- Profile Settings Section Password -->
      <ion-item-group>
        <ion-item-divider>
          <ion-label :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }">Profile Settings</ion-label>
        </ion-item-divider>

        <ion-item>
          <ion-label position="stacked" :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }">New Password</ion-label>
          <ion-input
              v-model="newPassword"
              :type="showNewPassword ? 'text' : 'password'"
              placeholder="Enter new password"
          ></ion-input>
          <ion-button
              fill="clear"
              slot="end"
              @click="showNewPassword = !showNewPassword"
          >
            <ion-icon :icon="showNewPassword ? eyeOffOutline : eyeOutline"></ion-icon>
          </ion-button>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }">Confirm Password</ion-label>
          <ion-input
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Confirm new password"
          ></ion-input>
          <ion-button
              fill="clear"
              slot="end"
              @click="showConfirmPassword = !showConfirmPassword"
          >
            <ion-icon :icon="showConfirmPassword ? eyeOffOutline : eyeOutline"></ion-icon>
          </ion-button>
        </ion-item>
        <div v-if="passwordError" class="error-message">
          {{ passwordError }}
        </div>

        <ion-button
            @click="handleSaveSettings"
            :disabled="saving || !isFormValid"
            class="ion-margin"
            size="small"
            style="--background: #00aaa2;"
            :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }"
        >
          Save Profile
        </ion-button>
      </ion-item-group>

      <!-- Application Settings Section -->
      <ion-item-group>
                <ion-item>
          <ion-label :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }">Theme settings for the app</ion-label>
          <ion-button
              :color="themeStore.darkMode ? 'medium' : 'primary'"
              @click="themeStore.toggleDarkMode()"
              slot="end"
              class="theme-toggle-btn"
              size="small"
              style="--background: #00aaa2;"
              :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }"
          >
            {{ themeStore.darkMode ? 'Light Mode' : 'Dark Mode' }}
            <ion-icon
                :icon="themeStore.darkMode ? sunny : moon"
                slot="end"
                style="margin-left: 8px;"
                :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }"
            ></ion-icon>
          </ion-button>
        </ion-item>

        <ion-item>
          <ion-label :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }">Notifications settings for the app</ion-label>
          <ion-toggle
              
              mode="ios"
              slot="end"
              class="custom-toggle"
          ></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }">Sounds settings for the app</ion-label>
          <ion-toggle v-model="sounds" slot="end"></ion-toggle>
        </ion-item>
      </ion-item-group>

      <!-- Navigation Buttons -->
      <div class="navigation-buttons ">
        
       
        <ion-button
            class="nav-button"
            color="secondary"
            @click="handleLogout"
            :disabled="saving"
            size="small"
            :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }"
        >
          <ion-icon :icon="logOutOutline" slot="start" :class="{ 'text-dark': !themeStore.darkMode, 'text-light': themeStore.darkMode }"></ion-icon>
          Logout
        </ion-button>
      </div>
    </ion-list>

    <ion-toast
        :is-open="showToast"
        :message="toastMessage"
        :color="toastType === 'success' ? 'success' : 'danger'"
        duration="3000"
        @didDismiss="showToast = false"
    ></ion-toast>
  </ion-content>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonList,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonInput,
  IonToggle,
  IonButton,
  IonToast,
  IonIcon
} from '@ionic/vue';
import { moon, sunny, logOutOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useThemeStore } from '../../stores/theme';
import { useAuthStore } from '../../stores/auth';
import { computed } from 'vue';

const router = useRouter();
const themeStore = useThemeStore();
const authStore = useAuthStore();


const newPassword = ref('');
const confirmPassword = ref('');
const sounds = ref(false);
const saving = ref(false);


const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

// const notifications = computed({
//   get: () => authStore.getUser?.settings?.notifications ?? false,
//   set: (value) => {
//     const user = { ...authStore.getUser };
//     if (!user.settings) user.settings = {};
//     user.settings.notifications = value;
//     authStore.login(user);
//   }
//});


const showToast = ref(false);
const toastMessage = ref('');
const toastType = ref('success');


// const goBackToMainContent = () => {
//   window.goBackToMainContent();
// };


const isFormValid = computed(() => {
  
  if (!newPassword.value && !confirmPassword.value) {
    return false;  
  }
  
  
  return newPassword.value && 
         confirmPassword.value && 
         newPassword.value === confirmPassword.value && 
         newPassword.value.length >= 6;
});

const passwordError = computed(() => {
  if (confirmPassword.value && newPassword.value !== confirmPassword.value) {
    return 'Passwords do not match';
  }
  if (newPassword.value && newPassword.value.length < 6) {
    return 'Password must be at least 6 characters';
  }
  return '';
});


const handleSaveSettings = async () => {
  try {
    saving.value = true;

    
    if (newPassword.value || confirmPassword.value) {
      
      if (!newPassword.value || !confirmPassword.value) {
        toastMessage.value = 'Please fill in both password fields';
        toastType.value = 'danger';
        showToast.value = true;
        return;
      }

      
      if (newPassword.value !== confirmPassword.value) {
        toastMessage.value = 'Passwords do not match';
        toastType.value = 'danger';
        showToast.value = true;
        return;
      }

      
      if (newPassword.value.length < 6) {
        toastMessage.value = 'Password must be at least 6 characters long';
        toastType.value = 'danger';
        showToast.value = true;
        return;
      }
    }

    

    toastMessage.value = 'Settings saved successfully';
    toastType.value = 'success';
    showToast.value = true;
    
    
    newPassword.value = '';
    confirmPassword.value = '';
  } catch (error) {
    toastMessage.value = 'Error saving settings';
    toastType.value = 'danger';
    showToast.value = true;
  } finally {
    saving.value = false;
  }
};


const handleLogout = async () => {
  try {
    await authStore.logout();
    router.push('/login');
    
    setTimeout(() => {
      window.location.reload();
    }, 100);
  } catch (error) {
    toastMessage.value = 'Error logging out';
    toastType.value = 'danger';
    showToast.value = true;
  }
};

</script>

<style scoped>
ion-content {
  --overflow: auto;
}

ion-list {
  height: 100%;
  padding-bottom: 20px;
}

ion-item-group {
  margin-bottom: 1rem;
}

ion-button.theme-toggle-btn {
  --padding-end: 16px;
  --padding-start: 16px;
  margin: 8px 0;
}


ion-item {
  --ion-item-interaction: none;
  --padding-start: 16px;
  --padding-end: 16px;
  --inner-padding-end: 16px;
}


ion-item-divider {
  margin-top: 16px;
  --background: transparent;
}

ion-item-divider ion-label {
  font-size: 24px;
  font-weight: 600;
  color: var(--ion-color-primary);
  margin-bottom: 16px;
  text-transform: uppercase;
}


ion-input {
  margin-top: 4px;
}


ion-item ion-label {
  font-size: 30px;
  font-weight: 500;
}


.navigation-buttons {
  display: flex;
  justify-content: space-evenly;
  padding: 12px;
  gap: 8px;
  width: 100%;
  position: fixed;
  bottom: 80px;
  left: 0;
  background: var(--ion-background-color);
  z-index: 1000;
}

.nav-button {
  flex: 0 1 auto;
  min-width: 110px;
  max-width: 200px;
  --padding-start: 4px;
  --padding-end: 4px;
  font-size: 20px;
}

@media (max-width: 480px) {
  .navigation-buttons {
    padding: 8px;
    gap: 4px;
  }

  .nav-button {
    min-width: 80px;
    font-size: 12px;

    ion-icon {
      font-size: 20px;
    }
  }
}

@media (max-width: 360px) {
  .nav-button {
    min-width: 70px;
    --padding-start: 2px;
    --padding-end: 2px;
  }
}


.custom-toggle {
  --handle-width: 16px;
  --handle-height: 16px;
  --handle-spacing: 2px;
  transform: scale(0.8);
}


:host {
  --ion-color-primary: #00aaa2;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-danger: #dc3545;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-warning: #ffc107;
  --ion-color-warning-contrast: #000000;
}


:host(.dark) ion-icon,
:host(.dark) ion-label {
  color: #ffffff !important;
}

.text-light {
  color: #ffffff !important;
}


ion-icon {
  font-size: 24px;
  color: var(--ion-text-color);
}


:host(.dark) button {
  color: #ffffff !important;
}

:host(.dark) ion-item-divider ion-label {
  color: #ffffff !important;
}

.error-message {
  color: var(--ion-color-danger);
  font-size: 20px;
  margin-left: 16px;
  margin-top: 4px;
}
</style>