import { defineStore } from 'pinia';

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    activeSection: 'mainContent'
  }),
  
  actions: {
    setActiveSection(section) {
      this.activeSection = section;
    },
    
    resetToMain() {
      this.activeSection = 'mainContent';
    }
  },
  
  getters: {
    currentSection: (state) => state.activeSection,
    isMainContent: (state) => state.activeSection === 'mainContent',
    isSearch: (state) => state.activeSection === 'searchIns',
    isHelp: (state) => state.activeSection === 'helpIns'
  }
});