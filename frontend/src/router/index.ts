import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainApp from "@/views/MainApp.vue";
import Welcome from "@/views/Welcome.vue";

import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Welcome,
  },
  {
    path: "/app/",
    name: "main app",
    component: MainApp,
  },

  // Authentication Screens
  {
    path: "/auth/login",
    name: "Login page",
    component: Login,
  },
  {
    path: "/auth/register",
    name: "SignUp page",
    component: Register,
  },
  // {
  // path: "/about",
  // name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  // import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
