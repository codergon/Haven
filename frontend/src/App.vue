<template>
  <div class="container">
    <SideTab />
    <MainApp />
  </div>
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

p,
li,
ul,
input {
  margin: 0;
  padding: 0;
  list-style: none;
  background: transparent;
}
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
  font-weight: 700;
  font-family: "Nunito";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
