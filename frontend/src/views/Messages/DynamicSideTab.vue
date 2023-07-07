<template>
  <div class="dynamicSideTab">
    <div class="dynamicSideTab_inn">
      <div class="starred_msg">
        <div class="starred_msg_header">
          <p>Starred Messages</p>
          <vue-feather type="chevron-up" size="13px" />
        </div>

        <ul class="starred_msg_list">
          <li
            v-for="(item, index) in pinnedMessages"
            :key="index"
            class="starred_li"
          >
            <div class="starred_img">
              <img :src="item?.img" alt="" />
            </div>
            <div class="starred_name_mssg">
              <p class="starred_name">{{ item.username }}</p>
              <p class="starred_message">{{ item.message }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="shared_note">
        <div class="shared_note_header">
          <p>Shared Note</p>
          <!-- <BIconJournalText /> -->
        </div>

        <ul class="shared_list">
          <li v-for="(item, index) in sharedNotes" :key="index">
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>

      <div class="shared_media">
        <div class="shared_media_header">
          <p>Chat Media</p>
        </div>

        <div class="shared_media_navbar">
          <li class="media_nav_li">
            <BIconFileEarmarkText class="media_nav_icon" />
          </li>
          <li class="media_nav_li">
            <BIconFileImage class="media_nav_icon" />
          </li>
          <li class="media_nav_li">
            <BIconFileMusic class="media_nav_icon" />
          </li>
          <li class="media_nav_li">
            <vue-feather type="link-2" size="17px" class="media_nav_icon" />
          </li>
        </div>

        <ul class="shared_media_list">
          <li v-for="(item, index) in chatMedia" :key="index">
            <img :src="item" alt="" />
          </li>
        </ul>
      </div>
    </div>

    <div class="expand_butt">
      <vue-feather type="chevron-right" size="13px" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sharedNotes: [
        "Cooking together",
        "Rewatch Game of Thrones together and invite few friends for the final episode.",
      ],
      chatMedia: [
        "https://i.postimg.cc/3r6Cdc43/61358835-2137641849695152-4017323286443051499-n.jpg",
        "https://i.postimg.cc/X7R8Dz4s/23ca6bb44.jpg",
        "https://i.postimg.cc/x1gPTTL4/AC-IN-337.jpg",
        "https://i.postimg.cc/CKBfTF7D/image-six.jpg",
        "https://i.postimg.cc/XJxWs55g/tumblr_pfd4modHw71waeozqo1_1280.jpg",
        "https://i.postimg.cc/tRmDFgfQ/7ba01f9bb093caf18b05493fb0fc5d65.jpg",
      ],
      pinnedMessages: [
        {
          username: "Amanda Harvey",
          message:
            "Going all the way with our goals this year bro. I can't even think of something that would stop me",
          img: "https://blush.design/api/download?shareUri=5jy38bSLBt0MJfla&c=Skin_0%7Ed08b5b&w=800&h=800&fm=png",
        },
        {
          username: "You",
          message: "I really appreciate you boo ❤️",
          img: "https://blush.design/api/download?shareUri=yjiTTUW2WH27-Kul&c=Skin_0%7Eae5d29&w=800&h=800&fm=png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.dynamicSideTab {
  display: flex;
  position: relative;
  flex-direction: column;
  border-left: var(--border);
  width: var(--sidebar-right);

  .dynamicSideTab_inn {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;

    .starred_msg {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 20px 25px 20px;
      flex-direction: column;
      border-bottom: var(--border);

      .starred_msg_header {
        width: 100%;
        display: flex;
        margin: 0px 10px 14px;
        padding: 15px 0px 15px;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        // border-bottom: var(--border);

        p {
          color: var(--extreme-inv);
        }
      }
      .starred_msg_list {
        width: 100%;
        display: flex;
        flex-direction: column;

        .starred_li {
          width: 100%;
          display: flex;
          padding: 10px 0px 7px;
          font-size: 12px;
          flex-direction: row;

          .starred_img {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            margin-right: 10px;
            border-radius: 100%;
            background: rgba($color: #000000, $alpha: 0.09);

            img {
              width: 100%;
            }
          }

          .starred_name_mssg {
            flex: 1;
            flex-wrap: wrap;
            display: flex;
            overflow: hidden;
            flex-direction: column;
            p {
              width: 100%;
              line-height: 16px;
            }
            .starred_name {
              height: 24px;
              color: var(--extreme-inv);
              align-items: center;
            }
            .starred_message {
              line-clamp: 3;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }

    .shared_note {
      width: 100%;
      display: flex;
      margin-top: 10px;
      padding: 0px 22px 20px;
      align-items: center;
      flex-direction: column;

      .shared_note_header {
        width: 100%;
        display: flex;
        margin: 0px 10px 14px;
        padding: 15px 0px 7px;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        p {
          color: var(--extreme-inv);
        }
      }
      .shared_list {
        width: 100%;
        display: flex;
        font-size: 12px;
        padding: 15px 15px;
        font-weight: 500;
        border-radius: 10px;
        flex-direction: column;
        border: var(--border);

        li {
          padding-left: 3px;
          list-style: disc;
          margin-left: 10px;
          margin-bottom: 10px;
        }
      }
    }

    .shared_media {
      width: 100%;
      display: flex;
      margin-top: 12px;
      padding: 0px 22px 20px;
      align-items: center;
      flex-direction: column;

      .shared_media_header {
        width: 100%;
        display: flex;
        margin: 0px 10px 14px;
        padding: 15px 2 px 7px;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        p {
          color: var(--extreme-inv);
        }
      }

      .shared_media_navbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        padding: 0px 10px 0px 0px;
        justify-content: space-between;

        .media_nav_li {
          font-size: 16px;
          display: flex;
          padding: 10px;
          align-items: center;
          width: calc((100% / 4) - 15px);
          flex-direction: column;

          color: var(--coloor-5);
        }
        .media_nav_li:nth-child(2) {
          color: var(--extreme-inv);
          border-bottom: 2px solid #666;
        }
      }

      .shared_media_list {
        width: 100%;
        display: flex;
        font-size: 12px;
        font-weight: 500;
        overflow: hidden;
        flex-direction: row;
        flex-wrap: wrap;

        li {
          aspect-ratio: 1;
          width: calc((100% / 5) - 3px);
          display: flex;
          align-items: center;
          overflow: hidden;
          justify-content: center;
          margin: 0px 1px 2px;

          img {
            object-fit: cover;
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            border-radius: 3px;
            border: 1px solid rgba($color: #000000, $alpha: 0.4);
          }
        }
      }
    }
  }

  .expand_butt {
    top: 26px;
    left: -9px;
    width: 18px;
    height: 18px;
    display: flex;
    cursor: pointer;
    align-items: center;
    background: var(--bg-actual);
    position: absolute;
    border-radius: 15px;
    border: var(--border);
    justify-content: center;
  }
}
</style>
