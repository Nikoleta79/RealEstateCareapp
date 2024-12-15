
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    notificationsEnabled: true,
    language: 'en',
  }),
  actions: {
    toggleNotifications() {
      this.notificationsEnabled = !this.notificationsEnabled
    },
    setLanguage(newLanguage) {
      this.language = newLanguage
    }
  }
})
