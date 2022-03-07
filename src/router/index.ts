import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
// import Auth from '@/auth0'

generatedRoutes.push({
  path: '/:pathMatch(.*)*',
  redirect: { name: 'Home' }
})

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes
})

//router.beforeEach(Auth.routeGuard)

export default router
