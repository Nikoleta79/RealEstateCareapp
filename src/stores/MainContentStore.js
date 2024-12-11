
import { defineStore } from 'pinia';

export const useMainContentStore = defineStore('mainContent', {
    state: () => ({
        currentBodyComponent: 'MainContent',
    }),
    actions: {
        setCurrentBodyComponent(componentName) {
            this.currentBodyComponent = componentName;
        },
    },
});
