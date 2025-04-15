import { createRouter, createWebHistory } from 'vue-router'
import Home from '../home.vue'
import Service from '../views/service.vue'
import ContactUs from '../views/contact.vue'
import AboutUs from '../views/about.vue'
import Pokemon from '../views/pokemon.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/service', component: Service },
  { path: '/contact', component: ContactUs },
  { path: '/about', component: AboutUs },
  { path: '/pokemon', component: Pokemon },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
