<template>
  <div class="container">
    <side-tab />
    <main>
      <Navbar />
      <Chats />
    </main>
  </div>
</template>

<script>
import Chats from "@/views/Chats.vue";
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
  background: rgba(0, 0, 0, $alpha: 0.07);
  background: #fff;
  // background: #f6f7f9;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
