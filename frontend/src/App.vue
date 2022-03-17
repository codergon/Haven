<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainApp from "./views/MainApp.vue";
import SideTab from "@/components/SideTab.vue";

export default defineComponent({
  name: "App",
  components: {
    MainApp,
    SideTab,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap");

html,
body {
  margin: 0;
  padding: 0;
}
body {
  width: 100vw;
  height: 100vh;
  // background: #333;
}

* {
  box-sizing: border-box;
}

@font-face {
  font-family: "euclid1";
  src: url("./static/fonts/EuclidCircularA-Regular.woff") format("woff");
}

@font-face {
  font-family: "euclid2";
  src: url("./static/fonts/EuclidCircularA-Medium.woff") format("woff");
}
@font-face {
  font-family: "euclid3";
  src: url("./static/fonts/EuclidCircularA-Semibold.woff") format("woff");
}
@font-face {
  font-family: "machina";
  src: url("./static/fonts/NeueMachina-Light.otf");
}
@font-face {
  font-family: "machina2";
  src: url("./static/fonts/NeueMachina-Regular.woff") format("woff");
}

p,
a,
li,
ul,
button,
input {
  margin: 0;
  padding: 0;
  border: none;
  color: inherit;
  list-style: none;
  text-decoration: none;
  background: transparent;
}
button:focus,
input:focus,
input:active {
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  background: transparent;
}

:root {
  --def-color: #8a8c8f;
  --color-2: #7c7e82;

  --border: 1px solid #dfdfdf;
  --border-2: 1px solid #b9b9b9;
  --border-3: 1px solid #a2a2a2;
}

#app {
  width: 100%;
  height: 100%;
  color: var(--def-color);
  font-size: 14px;
  // font-weight: 700;
  font-family: "Nunito";
  font-family: euclid1;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
