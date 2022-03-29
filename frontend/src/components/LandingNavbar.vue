<template>
  <nav>
    <div class="nav_bar">
      <div class="logo">Haven</div>

      <div class="nav_links_theme">
        <div class="nav_links" v-if="isLoggedIn">
          <div class="logout" @click="logOut">Sign Out</div>
        </div>

        <div class="nav_links" v-else>
          <router-link to="/auth/login">Sign In</router-link>
          <router-link to="/auth/register">Sign Up</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.$router.go("/");
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  height: 68px;
  width: 100%;
  display: flex;
  background: #fff;
  flex-direction: row;
  //   border-bottom: var(--border);

  .nav_bar {
    width: 100%;
    display: flex;
    color: #000;
    font-weight: 600;
    padding: 0px 8%;
    overflow: hidden;
    flex-direction: row;
    justify-content: space-between;
  }

  .logo {
    font-size: 19px;
    font-family: machina2;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .nav_links_theme {
    display: flex;
    align-items: center;
    flex-direction: row;

    .nav_links {
      display: flex;
      flex-direction: row;
      a {
        padding: 6px 15px;
        margin-right: 10px;
        border-radius: 5px;
      }
      a:nth-child(2) {
        color: #fff;
        background: #222;
      }
      .logout {
        color: #fff;
        cursor: pointer;
        padding: 6px 15px;
        margin-right: 10px;
        border-radius: 5px;
        background: #222;
      }
    }
  }

  @media screen and (max-width: 850px) {
    .nav_bar {
      padding: 0px 7vw !important;
    }
    .logo {
      font-size: 14px;
    }
    .nav_links {
      font-size: 12px;
      a {
        padding: 5px 10px !important;
        margin-right: 8px !important;
      }
      .logout {
        padding: 5px 10px !important;
        margin-right: 8px !important;
      }
    }
  }
}
</style>
