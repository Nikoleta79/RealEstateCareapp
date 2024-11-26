import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index.js';
import {IonButton,  IonIcon,
  IonButtons, IonicVue} from '@ionic/vue';
import './theme/variables.css'

import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import '@ionic/vue/css/palettes/dark.system.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const pinia = createPinia();
const app = createApp(App);

app.use(IonicVue);
app.use(pinia);
app.use(router);

// Register components globally (optional)
app.component('ion-buttons', IonButtons);
app.component('ion-button', IonButton);
app.component('ion-icon', IonIcon);
router.isReady().then(() => {
  app.mount('#app');
}).catch((error) => {
  console.error("Router is not ready:", error);
});
