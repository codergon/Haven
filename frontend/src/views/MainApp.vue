<template>
  <div class="container">
    <side-tab />
    <main>
      <Navbar />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Chats from "@/views/Messages/Chats.vue";
import Navbar from "@/components/Navbar.vue";
import SideTab from "@/components/SideTab.vue";

export default {
  components: {
    Chats,
    Navbar,
    SideTab,
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
