<template>
  <div class="home_page">
    <HomeNav />
    <!--  -->

    <div class="users_container">
      <div class="users_container_inn">
        <UserCard
          v-for="(item, index) in allUsers"
          :key="index"
          :userData="item"
          :bio="!!bios[index] ? bios[index] : ''"
          :location="!!location[index] ? location[index] : 'Earth'"
          :avatar="avatars[index]"
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
  setup() {
    const store = useStore();

    return {
      store,
    };
  },

  data() {
    return {
      allUsers: [],
      bios: [
        "Senior developer at SuperSpace. I also work as CEO @mean_apparels sometimes.",
        "I love cats so much 😍",
        "Hyper-Accelerating the Internet of Value & making it easy to build on the Web",
        "💼 Community Manager at @hashnode ⛓ #web3 enthusiast 💻 Developer | UXer 🎤 Public Speaker 📢 Youtuber",
        "Crazy world out there !!!",
      ],
      location: ["São Paulo", "Your Mind", "Lagos", "New York", "Nowhere"],
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

  methods: {
    async GetAllUsers() {
      await axios
        .get("user/allUsers")
        .then((res) => {
          this.allUsers = res?.data?.allusers
            ?.filter((item) => item.email !== this.store.state.user.email)
            .slice(0, 5);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.GetAllUsers();
    // console.log(this.$route.path);
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

  .users_container {
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
      padding: 0px 5px 50px 0px;
      flex-direction: row;
    }
  }
}
</style>
