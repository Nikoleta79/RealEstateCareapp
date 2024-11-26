<template>
  <ion-page>
    <IonContent class="ion-padding" :scroll-y="true">
      <main class="container card-content">
        <div v-if="isLoading" class="text-center mt-5">
          <p>Loading documents...</p>
        </div>
        <div v-else class="row">
          <div
              v-for="(document, index) in documents.slice(0, 6)"
              :key="index"
              class="col-md-5 mt-3"
              :class="{ 'offset-md-1': index % 2 !== 0 }"
          >
            <div class="border rounded card-content p-2">
              <h5>{{ document.title }}</h5>
              <a
                  :href="document.downloadLink"
                  target="_blank"
                  class="btn custom-toolbar"
                  aria-label="'Download ' + document.title"
              >Download</a>
            </div>
          </div>
        </div>
      </main>
    </IonContent>
  </ion-page>
</template>

<script setup>
import { IonContent, IonPage } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const isLoading = ref(true);
const documents = ref([]);

// Fetch documents from the API
const fetchDocuments = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/Joshuaisikah/demo/db');
    documents.value = response.data.knowledgeBase.map((doc) => ({
      title: doc.title,
      downloadLink: doc.fileUrl,
    }));
  } catch (error) {
    console.error('Error fetching documents:', error);
  } finally {
    isLoading.value = false;
  }
};

// Fetch documents on component mount
onMounted(fetchDocuments);
</script>

<style scoped>
@import "@/theme/variables.css";

.active-icon {
  color: #00AAA2;
}

.footer-icon-grey {
  color: grey;
}

.footer-text-grey {
  color: grey;
}
</style>