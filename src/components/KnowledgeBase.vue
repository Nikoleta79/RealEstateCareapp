<template>
    <ion-page>
      <ion-content class="ion-padding" :scroll-y="true">
        <main class="container" :class="{ 'dark-mode': themeStore.darkMode }">
          <router-link
              to="/home"
              class="btn btn-danger back-button-top mb-4"
              aria-label="Go Back"
              @click="goBackToMainContent"
          >
            Go back
          </router-link>
  
          <div class="row">
            <div class="col-sm-6 mt-3">
              <div class="document-card" :class="{ 'dark-mode': themeStore.darkMode }">
                <h5 :class="{ 'text-light': themeStore.darkMode }">Example document 1</h5>
                <ion-button
                    @click="file(1)"
                    expand="block"
                    class="download-btn"
                    aria-label="Download example document 1"
                >
                  <ion-icon :icon="downloadOutline" slot="start"></ion-icon>
                  Download
                </ion-button>
              </div>
            </div>
            <div class="col-sm-6 mt-3">
              <div class="document-card" :class="{ 'dark-mode': themeStore.darkMode }">
                <h5 :class="{ 'text-light': themeStore.darkMode }">Example document 2</h5>
                <ion-button
                    @click="file(2)"
                    expand="block"
                    class="download-btn"
                    aria-label="Download example document 2"
                >
                  <ion-icon :icon="downloadOutline" slot="start"></ion-icon>
                  Download
                </ion-button>
              </div>
            </div>
            <div class="col-sm-6 mt-3">
              <div class="document-card" :class="{ 'dark-mode': themeStore.darkMode }">
                <h5 :class="{ 'text-light': themeStore.darkMode }">Example document 3</h5>
                <ion-button
                    @click="file(3)"
                    expand="block"
                    class="download-btn"
                    aria-label="Download example document 3"
                >
                  <ion-icon :icon="downloadOutline" slot="start"></ion-icon>
                  Download
                </ion-button>
              </div>
            </div>
            <div class="col-sm-6 mt-3 mb-3">
              <div class="document-card" :class="{ 'dark-mode': themeStore.darkMode }">
                <h5 :class="{ 'text-light': themeStore.darkMode }">Example document 4</h5>
                <ion-button
                    @click="file(4)"
                    expand="block"
                    class="download-btn"
                    aria-label="Download example document 4"
                >
                  <ion-icon :icon="downloadOutline" slot="start"></ion-icon>
                  Download
                </ion-button>
              </div>
            </div>
          </div>
  
        </main>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonContent, IonButton, IonIcon } from '@ionic/vue';
  import { downloadOutline } from 'ionicons/icons';
  import { useThemeStore } from '@/stores/theme';
  import FileSaver from 'file-saver';
  
  import file1 from '@/assets/files/example-document-1.docx?url'
  import file2 from '@/assets/files/example-document-2.docx?url'
  import file3 from '@/assets/files/example-document-3.docx?url'
  import file4 from '@/assets/files/example-document-4.docx?url'
  
  export default {
    name: 'KnowledgeBase',
    components: {
      IonPage,
      IonContent,
      IonButton,
      IonIcon
    },
    data() {
      return {
        themeStore: useThemeStore(),
        downloadOutline
      }
    },
    methods: {
      file(number = false) {
        const files = {
          1: file1,
          2: file2,
          3: file3,
          4: file4
        };
  
        if (number && files[number]) {
          this.downloadFile(files[number]);
        }
      },
      downloadFile(fileUrl) {
        fetch(fileUrl)
            .then(response => response.blob())
            .then(blob => {
              FileSaver.saveAs(blob, fileUrl.split('/').pop());
            })
            .catch(error => {
              console.error('Error downloading file:', error);
            });
      },
      goBackToMainContent() {
        window.goBackToMainContent();
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    position: relative;
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-bottom: 4cm;
  }
  
  .document-card {
    background: var(--ion-color-light);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    min-width: 280px;
    flex: 1 1 300px;
    max-width: 500px;
  }
  
  .document-card.dark-mode {
    background-color: var(--ion-color-dark-shade);
    border-color: var(--ion-color-dark-tint);
  }
  
  .dark-mode {
    background-color: var(--ion-color-dark);
    color: var(--ion-color-light);
  }
  
  h5 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  .download-btn {
    --background: #00aaa2;
    --background-hover: #008f86;
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  
  .back-button-top {
    display: block;
    padding: 0.5rem 1rem;
    background-color: var(--ion-color-danger);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 1.2rem;
    white-space: nowrap;
    width: fit-content;
    margin-bottom: 2rem;
  }
  
  .back-button-bottom {
    display: block;
    padding: 0.5rem 1rem;
    background-color: var(--ion-color-danger);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 0.9rem;
    white-space: nowrap;
    width: fit-content;
    margin-top: 2rem;
    margin-bottom: 4cm;
  }
  
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
    }
    
    .row {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  
    .document-card {
      padding: 2rem;
    }
  }
  
  
  @media (max-width: 576px) {
    .container {
      padding: 0.5rem;
      margin-bottom: 6rem;
    }
  
    .document-card {
      padding: 1rem;
    }
  
    h5 {
      font-size: 1rem;
    }
  }
  </style>