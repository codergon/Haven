import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    darkTheme: !!localStorage.getItem("darkTheme") ? true : false,
    listType: localStorage.getItem("listType") === "list" ? "list" : "grid",
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    isAuthenticated: (state) => {
      return !!state.user;
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    setListType(state, type) {
      localStorage.setItem("listType", type);
      state.listType = type;
    },
    setTheme(state, newTheme) {
      localStorage.setItem("darkTheme", newTheme);
      state.darkTheme = newTheme;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    setListType(context, type) {
      context.commit("setListType", type);
    },
    setTheme(context, state) {
      context.commit("setTheme", !state.darkTheme);
    },
  },
  plugins: [createPersistedState()],
});
