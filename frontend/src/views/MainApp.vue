<template>
  <main>
    <Navbar />
    <router-view />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
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
</style>
