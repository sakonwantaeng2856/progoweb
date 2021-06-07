import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "@/views/register.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
