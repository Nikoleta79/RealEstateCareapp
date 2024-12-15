import { createRouter, createWebHistory } from '@ionic/vue-router';
import { useAuthStore } from '../stores/auth';
import HomePage from '../views/HomePage.vue';
import LoginForm from '../views/LoginForm.vue';
import DashBoard from '@/components/DashBoard.vue';
import InspectionSee from '@/components/InspectionSee.vue';
import KnowledgeBase from '@/components/KnowledgeBase.vue';
import ScheduledNow from '@/components/ScheduledNow.vue';
import SearchIns from '@/components/SearchIns.vue';
import SettingsUser from '@/components/SettingsUser.vue';
import HelpIns from '@/components/HelpIns.vue';
import { App as CapacitorApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';


const routes = [
  {
    path: '/',
    redirect: '/home' // Redirect the root to homepage
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'), // Lazy load HomePage component
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginForm.vue') // Lazy load LoginForm component
  },
  {
    path: '/dashBoard',
    name: 'DashBoard',
    component: () => import('@/components/DashBoard.vue'), // Lazy load DashBoard component
    meta: { requiresAuth: true }
  },
  {
    path: '/help',
    name: 'HelpIns',
    component: () => import('@/components/HelpIns.vue'), // Lazy load HelpIns component
    meta: { requiresAuth: true }
  },
  {
    path: '/inspectionsee',
    name: 'InspectionSee',
    component: () => import('@/components/InspectionSee.vue'), // Lazy load InspectionSee component
    meta: { requiresAuth: true }
  },
  {
    path: '/knowledgebase',
    name: 'KnowledgeBase',
    component: () => import('@/components/KnowledgeBase.vue'), // Lazy load KnowledgeBase component
    meta: { requiresAuth: true }
  },
  {
    path: '/schedulednow',
    name: 'ScheduledNow',
    component: () => import('@/components/ScheduledNow.vue'), // Lazy load ScheduledNow component
    meta: { requiresAuth: true }
  },
  {
    path: '/searchins',
    name: 'SearchIns',
    component: () => import('@/components/SearchIns.vue'), // Lazy load SearchIns component
    meta: { requiresAuth: true }
  },
  {
    path: '/settinguser',
    name: 'SettingUser',
    component: () => import('@/components/SettingsUser.vue'), // Lazy load SettingsUser component
    meta: { requiresAuth: true }
  },
  {
    path: '/:catchAll(.*)', 
    beforeEnter: () => {      
      window.location.href = '/NotFound.html';
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  authStore.loadUserFromStorage(); // Ensure user is loaded from localStorage

  if (to.path === '/login' && authStore.isAuthenticated) {
        next('/home');
  } else if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next('/login');
  } else {
    next();
  }
});

if (Capacitor.isNativePlatform()) {
  CapacitorApp.addListener('backButton', (event) => {
    const currentRoute = router.currentRoute.value.path;
    
   
    if (currentRoute === '/settings') {
      event.preventDefault(import.meta.env.BASE_URL); 
    } else {
      router.back();  
    }
  });
}

export default router;




