<template>
  <nav>
    <div class="nav_bar">
      <div class="search_bar">
        <vue-feather type="search" size="15px" class="bell_icon" />
        <input type="text" placeholder="Search and explore profiles" />
      </div>

      <div class="settings">
        <div class="theme_notification">
          <div class="theme_butt">
            <div class="theme_active"></div>
            <div class="theme_icons">
              <div class="theme_icon_cover theme_icon_cover_active">
                <vue-feather type="sun" size="12px" class="bell_icon" />
              </div>
              <div class="theme_icon_cover">
                <vue-feather type="moon" size="12px" class="bell_icon" />
              </div>
            </div>
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
export default {
  computed: {
    user: function () {
      return this.$store.getters.user;
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
      color: #999;
    }
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .theme_butt {
    width: 55px;
    height: 23px;
    padding: 3px;
    margin-right: 18px;
    border-radius: 20px;
    position: relative;
    background: rgba(0, 0, 0, $alpha: 0.07);
  }
  .theme_icons {
    left: 3px;
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    justify-content: space-around;
  }
  .theme_icon_cover {
    width: 50%;
    cursor: pointer;
    justify-content: center;
  }
  .theme_active {
    width: 50%;
    height: 100%;
    border-radius: 18px;
    background: #fff;
  }
  .theme_icon_cover_active {
    color: #000;
  }

  .user_details {
    padding: 0px 20px;
    border-left: 1px solid #dadada;
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
    color: #555;
    font-size: 13px;
  }
  .user_mail {
    font-size: 10px;
  }
}
</style>
