<template>
  <nav>
    <div class="nav_bar">
      <div class="search_bar">
        <vue-feather type="search" size="15px" class="bell_icon" />
        <input type="text" placeholder="Search and explore profiles" />
      </div>

      <div class="settings">
        <div class="theme_notification">
          <div class="theme_butt" @click="ToggleDarkTheme()">
            <i class="ph-sun" v-if="darkTheme" />
            <i class="ph-moon" v-else />
          </div>
          <div class="notification_butt">
            <vue-feather type="bell" size="16px" class="bell_icon" />
          </div>
        </div>
        <div class="user_details">
          <div class="user_img">
            <img
              src="https://blush.design/api/download?shareUri=0I6cFC5NGKx-CnTR&c=Skin_0%7Ed08b5b&w=800&h=800&fm=png"
              alt=""
            />
          </div>
          <div class="user_name_mail">
            <p class="user_name">{{ user?.username }}</p>
            <p class="user_mail">{{ user?.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
export default {
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
  methods: {
    ToggleDarkTheme() {
      this.store.dispatch("setTheme", this.store.state.darkTheme);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  height: 68px;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: var(--border);
  .nav_bar {
    width: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    padding: 0px 30px;
    justify-content: space-between;
  }

  .search_bar {
    min-width: 40%;
    padding-right: 30px;
    overflow: hidden;

    input {
      flex: 1;
      font-size: 13px;
      border: none;
      outline: none;
      font-weight: 500;
      letter-spacing: 0.02rem;
      padding: 6px 8px 5px;
      :focus {
        outline: none;
        border: none;
      }
    }
    input::placeholder {
      color: var(--color-4);
    }
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .theme_butt {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 18px;
    border-radius: 4px;
    align-items: center;
    color: var(--color-2);
    background: var(--bg-3);
    justify-content: center;
  }

  .user_details {
    padding: 0px 20px;
    border-left: var(--border);
  }
  .user_img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 100%;
    overflow: hidden;
  }
  .user_img img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 100%;
  }

  .theme_notification {
    padding: 0px 20px;
  }

  .user_name_mail {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  .user_name {
    color: var(--color-2);
    font-size: 13px;
  }
  .user_mail {
    color: var(--color-4);
    font-size: 10px;
  }
}
</style>
