import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null, // Holds the authenticated user data
    }),
    actions: {
        login(user) {
            this.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        logout() {
            this.user = null;
            localStorage.removeItem("user");
            localStorage.removeItem("authToken");
        },
        completeLogin(token) {
            localStorage.setItem("authToken", token);
        },
        loadUserFromStorage() {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                this.user = JSON.parse(storedUser);
            }
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
        getUser: (state) => state.user,
    },
});
