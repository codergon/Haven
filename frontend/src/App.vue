<template>
  <Loading v-if="loading" />
  <router-view :darkTheme="darkTheme" />
</template>

<script>
import { defineComponent } from "vue";
import Loading from "@/components/Loading.vue";
import axios from "axios";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    Loading,
  },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  computed: {
    darkTheme: function () {
      return this.store.state.darkTheme;
    },
  },
  data() {
    return {
      user: null,
      loading: true,
    };
  },
  async created() {
    await axios
      .get("user/auth")
      .then((res) => {
        this.user = res?.data?.userData;
        this.store.dispatch("user", res?.data?.userData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => (this.loading = false));
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
  // background: #111;
  overscroll-behavior: none;
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
  // // Dimensions
  // --nav-height: 70px;
  // --sidebar-left: 290px;
  // --sidebar-right: 300px;

  // // Colors
  // --color-3: #dfdfdf;
  // --color-2: #7c7e82;
  // --def-color: #8a8c8f;
  // --bg: rgba(0, 0, 0, 0.07);

  // // Configs
  // --border: 1px solid #dfdfdf;
  // --border-2: 1px solid #b9b9b9;
  // --border-3: 1px solid #a2a2a2;
}

#app {
  width: 100%;
  height: 100%;
  color: var(--def-color);
  font-size: 15px;
  // font-weight: 700;
  font-family: "Nunito";
  font-family: euclid1;
  // background: #0e0e0e;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  div {
    display: flex;
  }
}
</style>
