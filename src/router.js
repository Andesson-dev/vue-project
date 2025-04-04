import { createRouter, createWebHistory } from "vue-router";
import App from "/components/App.vue"; // Your main page
import Service from "/components/Service.vue"; // New Service page

const routes = [
  { path: "/", component: App },
  { path: "/service", component: Service },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
