<template>
  <div class="home_page">
    <HomeNav />
    <!--  -->

    <div
      :class="listType === 'grid' ? 'users_container' : 'users_container_list'"
    >
      <div class="users_container_inn">
        <UserCard
          v-for="(item, index) in allUsers"
          :key="index"
          :userData="item"
          :bio="bios[Math.floor(Math.random() * bios.length)]"
          :locations="locations[Math.floor(Math.random() * locations.length)]"
          :avatar="avatars[Math.floor(Math.random() * avatars.length)]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import UserCard from "./UserCard.vue";
import HomeNav from "./HomeNav.vue";

export default {
  props: ["allUsers"],

  setup() {
    const store = useStore();

    return {
      store,
    };
  },

  data() {
    return {
      bios: [
        "Senior developer at SuperSpace. I also work as CEO @mean_apparels sometimes.",
        "I love cats so much 😍",
        "Hyper-Accelerating the Internet of Value & making it easy to build on the Web",
        "💼 Community Manager at @hashnode ⛓ #web3 enthusiast 💻 Developer | UXer 🎤 Public Speaker 📢 Youtuber",
        "Crazy world out there !!!",
      ],
      locations: ["São Paulo", "Your Mind", "Lagos", "New York", "Nowhere"],
      avatars: [
        "https://blush.design/api/download?shareUri=yjiTTUW2WH27-Kul&c=Skin_0%7Eae5d29&w=800&h=800&fm=png",
        "https://blush.design/api/download?shareUri=5jy38bSLBt0MJfla&c=Skin_0%7Ed08b5b&w=800&h=800&fm=png",
        "https://blush.design/api/download?shareUri=0I6cFC5NGKx-CnTR&c=Skin_0%7Ed08b5b&w=800&h=800&fm=png",
        "https://blush.design/api/download?shareUri=k7J-2KZEZ2Zw9JhP&c=Skin_0%7Effdbb4&bg=ddf8f6&w=800&h=800&fm=png",
        "https://blush.design/api/download?shareUri=4DbFWcLrY3SeBAxf&c=Skin_0%7Effdbb4&bg=9dd6a4&w=800&h=800&fm=png",
      ],
    };
  },
  components: {
    HomeNav,
    UserCard,
  },

  computed: {
    listType: function () {
      return this.store.state.listType;
    },
  },
};
</script>

<style lang="scss" scoped>
.home_page {
  height: calc(100% - var(--nav-height));
  width: 100%;
  display: flex;
  overflow: hidden;
  padding: 0px 30px;
  flex-direction: column;

  .users_container,
  .users_container_list {
    width: 100%;
    height: calc(100% - var(--nav-height));
    display: flex;
    overflow: scroll;
    padding-top: 20px;
    flex-direction: column;

    .users_container_inn {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      padding: 0px 5px 50px 0px;
    }
  }
  .users_container_list {
    padding: 20px 5px 0px;

    .users_container_inn {
      height: 100%;
      flex-direction: column;
      align-content: flex-start;
      padding: 0px 5px 30px 0px;
    }
  }
}
</style>
