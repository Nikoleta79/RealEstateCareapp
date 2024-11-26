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

  <header>
    <div class="d-flex justify-content-between align-items-center dashboard-toolbar">
      <!-- Left Section: Logo -->
      <div class="d-flex align-items-center">
        <img src="@/assets/logo.svg" alt="Real Estate Care Logo" class="logo-style" />
      </div>

      <!-- Right Section: Buttons -->
      <div class="d-flex align-items-center">
        <ion-buttons>
          <ion-icon
              :icon="notificationsOffOutline"
              size="large"
              class="custom-icon-style text-white"
          ></ion-icon>
          <ion-icon
              :icon="settings"
              size="large"
              class="custom-icon-style text-white"
              @click="handleSettingsClick"
          ></ion-icon>
        </ion-buttons>
      </div>
    </div>
  </header>
</template>

<script setup>
import { IonHeader, IonToolbar, IonButtons, IonIcon } from "@ionic/vue";
import { settings, notificationsOffOutline } from "ionicons/icons";
import { squareOutline,ellipseOutline,chevronDownOutline} from "ionicons/icons";
// Function to handle Settings button click
const handleSettingsClick = () => {
  // Call the global function to show the SettingsUser component
  window.showSettings();
};
</script>

<style scoped>
/* Add any specific styling for the header */
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
