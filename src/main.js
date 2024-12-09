import { createApp } from 'vue';
import { createPinia } from 'pinia'; //Pinia import
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';


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


import './theme/variables.css';

// Pinia initialization
const pinia = createPinia();

const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .use(pinia); 

router.isReady().then(() => {
  app.mount('#app');
});