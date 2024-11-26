// /stores/mainContentStore.js
import { defineStore } from 'pinia';

export const useMainContentStore = defineStore('mainContent', {
    state: () => ({
        currentBodyComponent: 'MainContent', // Default component
    }),
    actions: {
        setCurrentBodyComponent(componentName) {
            this.currentBodyComponent = componentName;
        },
    },
});
