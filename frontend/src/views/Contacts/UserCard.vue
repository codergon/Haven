<template>
  <div class="userCard_cover">
    <div :class="listType === 'grid' ? 'userCard' : 'userCard_list'">
      <div
        :class="listType === 'grid' ? 'userImg_follow' : 'userImg_follow_list'"
      >
        <div class="img_username">
          <div class="user_img">
            <img :src="avatar" alt="" />
          </div>
          <div class="user_name_mail">
            <p class="user_name">{{ userData.username }}</p>
            <p class="user_mail">{{ userData.email }}</p>
          </div>
        </div>

        <div :class="listType === 'grid' ? 'follow_butt' : 'follow_butt_list'">
          <button>Message</button>
        </div>
      </div>

      <!--  -->
      <div class="userBio" v-if="listType === 'grid'">
        <p v-html="bioNew"></p>
      </div>

      <!--  -->
      <div class="userLocationLinks" v-if="listType === 'grid'">
        <div class="user_location">
          <span><BIconGeoAlt /></span>
          <p>{{ location }}</p>
        </div>
        <ul class="user_handles">
          <li><BIconTwitter class="twitter" /></li>
          <!-- <li><BIconInstagram class="instagram" /></li> -->
        </ul>
      </div>
    </div>
  </div>
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
  props: ["avatar", "bio", "location", "userData"],
  data() {
    return {
      bioNew: this.bio,
    };
  },
  mounted() {
    const regex = /@\w+/g;

    const check = !!this.bioNew.split(regex) ? this.bioNew.split(regex) : [];
    const found = !!this.bioNew.match(regex) ? this.bioNew.match(regex) : [];

    this.bioNew = check
      .map((item, index) => {
        return (
          item +
          `${
            !!found[index]
              ? "<span style='color: var(--tag-elem)' >" +
                found[index] +
                "</span>"
              : ""
          }`
        );
      })
      .join("");
  },
  computed: {
    listType: function () {
      return this.store.state.listType;
    },
  },
};
</script>

<style lang="scss" scoped>
.userCard_cover {
  padding: 5px 8px;
  width: calc(100% / 2);

  .userCard,
  .userCard_list {
    width: 100%;
    border-radius: 8px;
    height: 155px;
    overflow: hidden;
    padding: 15px 10px 10px;
    border: var(--border);
    display: flex;
    color: var(--color-4);
    flex-direction: column;

    div,
    ul {
      display: flex;
      align-items: center;
      flex-direction: row;
    }

    .userImg_follow,
    .userImg_follow_list {
      width: 100%;
      overflow: hidden;
      padding-bottom: 13px;
      border-bottom: var(--border);
      justify-content: space-between;
      .img_username {
        overflow: hidden;
        .user_img {
          width: 30px;
          height: 30px;
          margin-right: 7px;
          border-radius: 100%;
          overflow: hidden;
          display: flex;
          background: var(--bg-4);
          img {
            width: 100%;
            object-fit: cover;
            object-position: top;
            border-radius: 100%;
          }
        }
        .user_name_mail {
          flex: 1;
          overflow: hidden;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          .user_name {
            color: var(--color-2);
            width: 100%;
            font-size: 14px;
            overflow: hidden;
            padding-right: 10px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .user_mail {
            width: 100%;

            font-size: 11px;
            margin-top: 1px;

            overflow: hidden;
            padding-right: 10px;
            white-space: nowrap;

            color: var(--color-4);
            text-overflow: ellipsis;
          }
        }
      }
      .follow_butt,
      .follow_butt_list {
        button {
          color: var(--color-2);
          cursor: pointer;
          background: var(--bg-3);
          font-size: 12px;
          border-radius: 6px;
          border: var(--border);
          padding: 8px 12px;
        }
      }
      .follow_butt_list {
        button {
          font-size: 11px;
          border-radius: 4px;
          padding: 6px 8px 4px;
        }
      }
    }
    .userImg_follow_list {
      padding-bottom: 0px;
      border-bottom: none;
    }
    .userBio {
      flex: 1;
      width: 100%;
      font-size: 11px;
      padding: 13px 0px;
      line-height: 150%;
      align-items: flex-start;

      p {
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -moz-box-orient: vertical;
      }
    }
    .userLocationLinks {
      padding-bottom: 10px;
      justify-content: space-between;
      .user_location {
        overflow: hidden;
        span {
          font-size: 11px;
          margin-right: 3px;
          margin-bottom: -3px;
        }
        p {
          width: 100%;
          font-size: 11px;
          overflow: hidden;
          padding-right: 10px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .user_handles {
        font-size: 12px;
        li {
          margin-left: 10px;
          .twitter {
            color: var(--tw-col);
          }
        }
      }
    }
  }
  .userCard_list {
    height: max-content !important;
  }
}
</style>
