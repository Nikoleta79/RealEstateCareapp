<template>
  <ion-page>
    <ion-content :scroll-y="true" tabindex="0">
      <main class="container" aria-label="How to find the app" :class="{ 'dark-mode': themeStore.darkMode }">
        <h2 class="my-3" aria-label="How to find the app" :class="{ 'text-light': themeStore.darkMode }">Help</h2>
        <h2 class="my-3" aria-label="How to find the app" :class="{ 'text-light': themeStore.darkMode }">How to find the app</h2>

        <ul class="list-group">
          <li class="list-group-item" :class="{ 'dark-mode': themeStore.darkMode }"> You can download the RealEstateCare app from the App Store or Google Play. As soon as is downloaded you can navigate and check the inspections.</li>
        </ul>

        <h2 class="my-3" :class="{ 'text-light': themeStore.darkMode }">Scheduled</h2>
        <ul class="list-group">
          <li class="list-group-item" :class="{ 'dark-mode': themeStore.darkMode }">From the main dashboard, you can find an icon "Scheduled",click on that to view a list of all the addresses that have been assigned to you. There you can see and select what damages neeed to be noted. </li>
        </ul>

        <h2 class="my-3" :class="{ 'text-light': themeStore.darkMode }">Completed</h2>
        <ul class="list-group">
          <li class="list-group-item" :class="{ 'dark-mode': themeStore.darkMode }">From the main dashboard, click on "Completed" to view a list of all the addresses that you have completed inspections for and where the damages were found.</li>
        </ul>

        <h2 class="my-3" :class="{ 'text-light': themeStore.darkMode }">Knowledge Base</h2>
        <ul class="list-group">
          <li class="list-group-item" :class="{ 'dark-mode': themeStore.darkMode }">From the main dashboard, click on "Knowledge Base" to access helpful documents to help you with the inspection. You can also donwload those documents.</li>
        </ul>

        <h2 class="my-3" :class="{ 'text-light': themeStore.darkMode }">Settings</h2>
        <ul class="list-group">
          <li class="list-group-item" :class="{ 'dark-mode': themeStore.darkMode }">From the main dashboard, click on "Settings" to access your profile information and change your password. You can also find options to change the theme of your app, to add sounds and turn on or off the notifications</li>
        </ul>

        <h2 class="my-3" :class="{ 'text-light': themeStore.darkMode }">How to reach us out</h2>
        <p :class="{ 'text-light': themeStore.darkMode }">For any issue complain or further help please reach us out at <a href="mailto:team@realestatecareapp.com">team@realestatecareapp.com</a>.</p>
        
        <router-link
            to="/home"
            class="btn btn-danger back-button-bottom mt-4"
            aria-label="Go Back"
            @click="goBackToMainContent"
        >
          Go back
        </router-link>
      </main>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage} from '@ionic/vue';
import { useThemeStore } from '@/stores/theme'

export default {
  name: 'HelpIns',
  components: {
    IonContent,
    IonPage
  },
  setup() {
    const themeStore = useThemeStore()
    return {
      themeStore,
      goBackToMainContent() {
        window.goBackToMainContent();
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 8rem;
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

.list-group-item {
  background: var(--ion-color-light);
  border: 1px solid #ddd;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.list-group-item.dark-mode {
  background: var(--ion-color-dark);
  color: var(--ion-color-light);
  border-color: var(--ion-color-medium);
}

.back-button-bottom {
  display: block;
  margin-top: 10px;
  padding: 1rem 2rem;
  background-color: var(--ion-color-danger);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.2rem;
  white-space: nowrap;
  width: fit-content;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1000;
}

@media (max-width: 576px) {
  .container {
    padding: 1rem;
    padding-bottom: 4rem;
  }
  
  ion-content {
    --padding-bottom: 4rem;
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