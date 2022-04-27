<template>
  <div :class="`container ${darkTheme ? 'dark_theme' : ''}`">
    <side-tab />
    <main>
      <Navbar />
      <router-view :allUsers="allUsers"></router-view>
    </main>
  </div>
</template>

<script>
import { useStore } from "vuex";
import Chats from "@/views/Messages/Chats.vue";
import Navbar from "@/components/Navbar.vue";
import SideTab from "@/components/SideTab.vue";
import axios from "axios";

export default {
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  props: ["darkTheme"],

  data() {
    return {
      allUsers: [],
    };
  },
  components: {
    Chats,
    Navbar,
    SideTab,
  },

  methods: {
    async GetAllUsers() {
      await axios
        .get("user/allUsers")
        .then((res) => {
          this.allUsers = res?.data?.allusers?.filter(
            (item) => item.email !== this.store.state.user.email
          );
          // .slice(0, 5);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  computed: {
    listType: function () {
      return this.store.state.listType;
    },
  },

  mounted() {
    this.GetAllUsers();
  },
};
</script>

<style lang="scss" scoped>
main {
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}
.container {
  // Dimensions
  --nav-height: 70px;
  --sidebar-left: 290px;
  --sidebar-right: 300px;

  // Colors
  --extreme: #fff;
  --extreme-inv: #000;
  --bg-actual: #fff;

  --color-4: #7c7e82;
  --color-3: #dfdfdf;
  --color-2: #484848;
  --def-color: #8a8c8f;
  --dark-col: #555;
  --bg: #f1f1f1;
  --bg-2: #f5f5f5;
  --bg-3: #eee;
  --bg-4: #ddd;
  --tag-elem: #1d7ff0;

  // Perm Colors
  --tw-col: #188cd8;

  // Configs
  --border: 1px solid #dfdfdf;
  --border-2: 1px solid #b9b9b9;
  --border-3: 1px solid #a2a2a2;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  letter-spacing: 0.03em;
  color: var(--color-2);
}

.dark_theme {
  // Dimensions
  --nav-height: 70px;
  --sidebar-left: 290px;
  --sidebar-right: 300px;

  // Colors
  --extreme: #000;
  --extreme-inv: #fff;
  --bg-actual: #111;

  --color-4: #888;
  --color-3: #dfdfdf;
  --color-2: #ccc;
  --def-color: #8a8c8f;
  --dark-col: #555;
  --bg: #f1f1f1;
  --bg-2: #666;
  --bg-3: #333;
  --bg-4: #ddd;
  --tag-elem: #1d7ff0;

  // Perm Colors
  --tw-col: #188cd8;

  // Configs
  --border: 1px solid #333;
  --border-2: 1px solid #b9b9b9;
  --border-3: 1px solid #a2a2a2;

  background: #080808;
}
</style>
