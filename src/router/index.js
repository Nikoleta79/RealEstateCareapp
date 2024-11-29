import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), //creating a web history with the base URL
    routes: [
        {
            path: '/:catchAll(.*)',
            redirect: '/'
        },  
        {
            path: '/', //when user navigates to the root path
            name: 'home', //name of the route
            component: () => import('../views/dashboardMain.vue') //lazy loading the component
        },
        {
            path: '/completed', //when user navigates to the /completed path
            name: 'completed', 
            component: () => import('../views/completedIns.vue') //lazy loading the component
        },
        {
            path: '/help', //when user navigates to the /help path
            name: 'Information',
            component: () => import('../views/InformationIns.vue') //lazy loading the component
        },
        {
            path: '/knowledge-base', //when user navigates to the /knowledge-base path
            name: 'knowledge-base',
            component: () => import('../views/knowledge-base.vue') //lazy loading the component
        },
        {
            path: '/scheduled', //when user navigates to the /scheduled path
            name: 'scheduled',
            component: () => import('../views/scheduledIns.vue') //lazy loading the component
        },
        {
            path: '/search', //when user navigates to the /search path
            name: 'search',
            component: () => import('../views/searchIns.vue') //lazy loading the component
        },
        {
            path: '/settings', //when user navigates to the /settings path
            name: 'settings',
            component: () => import('../views/settingsUser.vue') //lazy loading the component
        },
        {
            path: '/login', //when user navigates to the /login path
            name: 'login',
            component: () => import('../views/loginIns.vue') //lazy loading the component
        },
        {
            path: '/inspections/', //when user navigates to the /inspections path
            name: 'inspections',
            component: () => import('../views/inspectionsIns.vue'), //lazy loading the component
        },
        {
            path: '/inspection/', //when user navigates to the /inspection path
            name: 'inspection',
            component: () => import('../views/inspectionIns.vue'), //lazy loading the component
        },
    ],
})

export default router