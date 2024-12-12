import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { IonicVue, IonIcon, IonContent, IonPage  } from '@ionic/vue';



import App from './App.vue'
import router from './router'


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
import 'bootstrap/dist/css/bootstrap.min.css';


import './assets/variables.css';

const app = createApp(App)
app.component('ion-icon', IonIcon);
app.component('ion-page', IonPage);
app.component('ion-content', IonContent);
app.use(createPinia())
app.use(router)
app.use(IonicVue)

router.isReady().then(() => {
app.mount('#app')});
