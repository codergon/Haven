<template>
  <div class="sideNav">
    <div class="sidebar_top_bar">Haven</div>

    <div class="sidebar_content">
      <div class="sidebar_content_top_bar">
        <p>Switch account</p>
        <vue-feather type="chevron-down" size="13px" />
      </div>

      <div class="side_menu">
        <p class="list_sect_header">Menu</p>
        <ul>
          <router-link
            v-for="(item, index) in menuOptions"
            :key="index"
            :to="item?.path"
            v-bind:class="{ active_page: this.$route.path == item?.path }"
          >
            <div class="li_icon_option">
              <vue-feather
                :type="`${item.icon}`"
                size="17px"
                v-if="
                  item.icon !== 'list' &&
                  item.icon !== 'home' &&
                  item.icon !== 'settings'
                "
                class="option_icon"
              />
              <BIconSlashSquare
                v-else-if="item.icon === 'home'"
                class="option_icon"
              />
              <BIconSliders
                v-else-if="item.icon === 'settings'"
                class="option_icon"
              />

              <i class="ph-users-three option_icon option_icon_people" v-else />

              <p>{{ item.option }}</p>
            </div>

            <div class="menu_badge" v-if="item?.num !== undefined">
              {{ item?.num }}
            </div>
          </router-link>
        </ul>
      </div>

      <div class="pinned_messages">
        <p class="list_sect_header">Direct Messages</p>
        <ul>
          <li
            v-for="(item, index) in UnPinnedMssgs"
            :key="index"
            class="user_details_li"
          >
            <div class="user_details">
              <div class="user_img">
                <img :src="item?.img" alt="" />
              </div>
              <div class="user_name_mail">
                <p class="user_name">{{ item?.username }}</p>
              </div>
            </div>

            <div class="chat_icons">
              <BIconPinAngleFill class="chat_pin_icon" />
              <div
                class="chat_message_num"
                v-if="item?.num !== undefined && item?.num !== 0"
              >
                {{ item?.num }}
              </div>
            </div>
          </li>
        </ul>

        <div class="chats_hor_line" />

        <ul>
          <li
            v-for="(item, index) in PinnedMssgs"
            :key="index"
            class="user_details_li"
          >
            <div class="user_details">
              <div class="user_img">
                <img :src="item?.img" alt="" />
              </div>
              <div class="user_name_mail">
                <p class="user_name">{{ item?.username }}</p>
              </div>
            </div>

            <div class="chat_icons">
              <div
                class="chat_message_num"
                v-if="item?.num !== undefined && item?.num !== 0"
              >
                {{ item?.num }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      menuOptions: [
        { icon: "home", option: "Home", path: "/" },
        { icon: "user", option: "Profile", path: "/profile" },
        { icon: "mail", option: "Messages", num: 6, path: "/direct/inbox" },
        { icon: "list", option: "Contacts", path: "/contacts/" },
        { icon: "settings", option: "Settings", path: "/settings/" },
      ],
      pinnedChat: [
        {
          num: 1,
          pinned: true,
          username: "Jaybee Cruxy",
          img: "https://blush.design/api/download?shareUri=yjiTTUW2WH27-Kul&c=Skin_0%7Eae5d29&w=800&h=800&fm=png",
        },
        {
          num: 3,
          pinned: true,
          username: "Amanda Harvey",
          img: "https://blush.design/api/download?shareUri=5jy38bSLBt0MJfla&c=Skin_0%7Ed08b5b&w=800&h=800&fm=png",
        },
        {
          num: 0,
          pinned: false,
          username: "Dean Morrison",
          img: "https://blush.design/api/download?shareUri=0I6cFC5NGKx-CnTR&c=Skin_0%7Ed08b5b&w=800&h=800&fm=png",
        },
        {
          num: 2,
          pinned: false,
          username: "Phillip Lewis",
          img: "https://blush.design/api/download?shareUri=k7J-2KZEZ2Zw9JhP&c=Skin_0%7Effdbb4&bg=ddf8f6&w=800&h=800&fm=png",
        },
        {
          num: 0,
          pinned: false,
          username: "Christine Lucas",
          img: "https://blush.design/api/download?shareUri=4DbFWcLrY3SeBAxf&c=Skin_0%7Effdbb4&bg=9dd6a4&w=800&h=800&fm=png",
        },
      ],
    };
  },
  computed: {
    PinnedMssgs() {
      return this.pinnedChat.filter((item) => !item?.pinned);
    },
    UnPinnedMssgs() {
      return this.pinnedChat.filter((item) => item?.pinned);
    },
  },
};
</script>

<style lang="scss" scoped>
.sideNav {
  width: 290px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border-right: var(--border);

  .sidebar_top_bar {
    width: 100%;
    height: 68px;
    display: flex;
    color: var(--color-2);
    font-size: 16px;
    align-items: center;
    padding: 0px 41px;
    border-bottom: var(--border);
  }

  .sidebar_content {
    display: flex;
    padding: 0px 25px 20px;
    overflow: hidden;
    flex-direction: column;

    .sidebar_content_top_bar {
      width: 100%;
      height: var(--nav-height);
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 0px 16px;
      justify-content: space-between;
      border-bottom: var(--border);
    }

    .list_sect_header {
      width: 100%;
      font-size: 13px;
      padding: 8px 16px;
      margin-top: 20px;
      color: var(--color-2);
      letter-spacing: 0.01rem;
      text-transform: uppercase;
    }

    ul {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
    }
    li,
    a {
      width: 100%;
      display: flex;
      border-radius: 6px;
      padding: 10px 14px;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      overflow: hidden;

      .li_icon_option {
        flex: 1;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .option_icon {
        font-size: 15px;
        margin-right: 12px;
      }
      .option_icon_people {
        font-size: 16px;
      }

      .menu_badge {
        width: 13px;
        height: 15px;
        display: flex;
        color: var(--color-2);
        font-size: 10px;
        font-weight: 800;
        border-radius: 3px;
        align-items: center;
        justify-content: center;
        background: var(--bg-3);
        border: var(--border);
      }
    }
    .side_menu {
      flex-direction: column;
    }

    .side_menu {
      color: var(--color-4);
    }
    .side_menu .active_page {
      color: var(--color-2);
      background: var(--bg-3);
    }
    .side_menu a {
      margin-bottom: 10px;
      border: 1px solid transparent;
    }
    .side_menu a:hover {
      border: var(--border);
    }

    .pinned_messages {
      flex-direction: column;
    }

    .pinned_messages .list_sect_header {
      margin-bottom: 5px;
    }
    .user_details_li {
      padding: 7px 14px;
      margin-bottom: 5px;
      border: 1px solid transparent;
    }
    .user_details_li:hover {
      border: var(--border);
    }
    .user_details {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      overflow: hidden;
    }
    .user_img {
      width: 30px;
      height: 30px;
      margin-right: 7px;
      border-radius: 100%;
      overflow: hidden;
      display: flex;
      background: rgba($color: #000000, $alpha: 0.09);
    }
    .user_img img {
      width: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: 100%;
    }

    .user_name_mail {
      flex: 1;
      overflow: hidden;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
    .user_name {
      width: 100%;
      color: var(--color-2);
      font-size: 13px;
      overflow: hidden;
      padding-right: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .user_mail {
      font-size: 10px;
    }

    .chat_icons {
      display: flex;
      align-items: center;
      flex-direction: row;
    }

    .chat_pin_icon {
      font-size: 10px;
      margin-top: 2px;
    }
    .chat_message_num {
      width: 13px;
      height: 15px;
      display: flex;
      font-size: 10px;
      padding: 1px 0px;
      align-items: center;
      color: var(--color-2);
      font-weight: 800;
      margin-top: 3px;
      margin-left: 9px;
      border-radius: 2px;
      justify-content: center;
      background: var(--bg-3);
      border: var(--border);
    }

    .chats_hor_line {
      margin: 10px 12px 15px;
      border-top: var(--border);
    }
  }
}
</style>
