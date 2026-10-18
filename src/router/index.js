import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Timeline from '../views/Timeline.vue'
import AlbumsAndEras from '../views/AlbumsAndEras.vue'
import SKZOO from '../views/SKZOO.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/timeline', name: 'timeline', component: Timeline },
    { path: '/albums', name: 'albums', component: AlbumsAndEras },
    { path: '/skzoo', name: 'skzoo', component: SKZOO },
  ],
})

export default router
