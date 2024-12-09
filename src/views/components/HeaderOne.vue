<template>
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

  <header role="banner">
    <div 
      class="d-flex justify-content-between align-items-center dashboard-toolbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <!-- Left Section: Logo -->
      <div 
        class="d-flex align-items-center" 
        @click="handleMainContentClick" 
        style="cursor: pointer;"
        role="button"
        tabindex="0"
        aria-label="Go to main content"
      >
        <img src="@/assets/logo.svg" alt="Real Estate Care Logo" class="logo-style" />
      </div>

      <!-- Right Section: Buttons -->
      <div class="d-flex align-items-center">
        <ion-buttons role="toolbar" aria-label="Navigation actions">
          <ion-icon
            :icon="notifications ? notificationsOutline : notificationsOffOutline"
            size="large"
            class="custom-icon-style text-white"
            role="button"
            tabindex="0"
            :aria-label="notifications ? 'Notifications enabled' : 'Notifications disabled'"
            aria-pressed="false"
          ></ion-icon>
          <ion-icon
            :icon="settings"
            size="large"
            class="custom-icon-style text-white"
            @click="handleSettingsClick"
            role="button"
            tabindex="0"
            aria-label="Settings"
            aria-haspopup="true"
          ></ion-icon>
        </ion-buttons>
      </div>
    </div>
  </header>
</template>

<script setup>
import { IonHeader, IonToolbar, IonButtons, IonIcon } from "@ionic/vue";
import {settings, notificationsOffOutline, notificationsOutline} from "ionicons/icons";
import { squareOutline, ellipseOutline, chevronDownOutline} from "ionicons/icons";
import { useAuthStore } from '@/stores/auth';
import {computed} from "vue";

const authStore = useAuthStore();
const notifications = computed(() => authStore.getUser?.settings?.notifications ?? false);

const handleSettingsClick = () => {
  window.showSettings();
};

const handleMainContentClick = () => {
  window.goBackToMainContent();
};
</script>

<style scoped>

.dashboard-toolbar {
  padding: 10px 15px;
  background-color: #00aaa2;
}

.custom-icon-style {
  cursor: pointer;
  color: #fff;
}

.logo-style {
  height: 40px;
}
</style>
