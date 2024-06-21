import { createWebHistory, createRouter } from "vue-router";

import Register from "./components/register.vue";
import Login from "./components/login.vue";

const routes = [
  {
    name: "register",
    component: Register,
    path: "/",
  },
  {
    name: "login",
    component: Login,
    path: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
