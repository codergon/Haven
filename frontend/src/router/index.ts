import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import MainApp from "@/views/MainApp.vue";
import Chats from "@/views/Messages/Chats.vue";
import Profile from "@/views/Profile/Profile.vue";
import Settings from "@/views/Settings/Settings.vue";
import Contacts from "@/views/Contacts/Contacts.vue";
import Homepage from "@/views/Homepage/Homepage.vue";

import Home from "@/views/Splash/Welcome.vue";

import store from "../store";

import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";

const routes: Array<RouteRecordRaw> = !store.getters.user
  ? [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ]
  : [
      {
        path: "/",
        component: MainApp,
        children: [
          {
            path: "",
            component: Homepage,
          },
          {
            path: "profile",
            component: Profile,
          },
          {
            path: "direct/inbox",
            component: Chats,
          },
          {
            path: "contacts",
            component: Contacts,
          },
          {
            path: "settings",
            component: Settings,
          },
        ],
      },
    ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
