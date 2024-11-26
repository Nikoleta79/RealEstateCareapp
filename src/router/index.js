import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import SettingsUser from "@/views/SettingsUser.vue";
import LoginPage from "@/views/LoginForm.vue";
import { useAuthStore } from "@/stores/auth"; // Import the Pinia auth store
import KnowledgeBase from "@/views/KnowledgeBase.vue";
import InspectionsSee from "@/views/InspectionsSee.vue";
import ScheduledNow from "@/views/ScheduledNow.vue";
import InspectionAdd from "@/views/InspectionAdd.vue";
import CompletedIns from "@/views/completedIns.vue";
import SearchIns from "@/views/SearchIns.vue";
import HelpIns from "@/views/HelpIns.vue";

const routes = [
  {
    path: "/",
    redirect: "/login", // Redirect to login by default
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage, // Login Page
  },
  {
    path: "/helpIns",
    name: "HelpIns",
    component: HelpIns,
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: "/searchIns",
    name: "SearchIns",
    component: SearchIns,
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: "/completedIns",
    name: "CompletedIns",
    component: CompletedIns,
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: "/inspectionAdd",
    name: "InspectionAdd",
    component: InspectionAdd,
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: "/scheduledNow",
    name: "ScheduledNow",
    component: ScheduledNow,
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: "/knowledgeBase",
    name: "KnowledgeBase",
    component: KnowledgeBase,
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: "/inspectionsSee/:id",
    name: "InspectionsSee",
    component: InspectionsSee,
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsUser, // Add route for settings
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: '/:pathMatch(.*)*', // Fallback route for unmatched paths
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Add navigation guards
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore(); // Access the auth store
  authStore.loadUserFromStorage(); // Ensure user is loaded from localStorage

  const isAuthenticated = authStore.isAuthenticated || localStorage.getItem("authToken");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // If the route requires authentication and the user is not logged in
    if (!isAuthenticated) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else {
    next(); // Always call next() to proceed
  }
});

export default router;