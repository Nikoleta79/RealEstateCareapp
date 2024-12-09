import { createRouter, createWebHistory } from '@ionic/vue-router';
import { useAuthStore } from '../stores/auth';
import HomePage from '../views/HomePage.vue';
import LoginForm from '../views/LoginForm.vue';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';

const routes = [
  {
    path: '/',
    redirect: '/home' // Redirect the root to homepage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/:catchAll(.*)', 
    beforeEnter: () => {      
      window.location.href = '/NotFound.html';
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  authStore.loadUserFromStorage(); // Ensure user is loaded from localStorage

  if (to.path === '/login' && authStore.isAuthenticated) {
    // Prevent navigation to login if already authenticated
    next('/home');
  } else if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    // Redirect to login if trying to access a protected route without authentication
    next('/login');
  } else {
    next();
  }
});

if (Capacitor.isNativePlatform()) {
  CapacitorApp.addListener('backButton', (event) => {
    const currentRoute = router.currentRoute.value.path;
    const authStore = useAuthStore();

    if (currentRoute === '/home') {
      CapacitorApp.exitApp();
    } else if (currentRoute === '/login' && authStore.isAuthenticated) {
      event.preventDefault();
    } else {
      router.back();
    }
  });
}

export default router;
