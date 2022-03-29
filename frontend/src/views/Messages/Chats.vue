<template>
  <div class="chat_page">
    <div class="main_chat_sect">
      <div class="main_chat_top_bar">
        <div class="main_chat_top_bar_inn">
          <div class="other_user_info">
            <div class="other_user_img">
              <img
                src="https://blush.design/api/download?shareUri=5jy38bSLBt0MJfla&c=Skin_0%7Ed08b5b&w=800&h=800&fm=png"
                alt=""
              />

              <div class="other_user_status"></div>
            </div>
            <div class="other_user_dets">
              <p class="other_user_name">Amanda Harvey</p>
            </div>
          </div>

          <div class="icons_buttons">
            <div class="action_butts">
              <div class="action_icon">
                <vue-feather type="phone" size="13px" />
              </div>
              <div class="action_icon">
                <vue-feather type="video" size="13px" />
              </div>
              <div class="action_icon">
                <BIconPinAngleFill />
                <span class="slash" />
              </div>
            </div>

            <div class="mute_butt">
              <p>Mute</p>
            </div>
          </div>
        </div>
      </div>

      <MessageComponent />
    </div>
    <DynamicSideTab />
  </div>
</template>

<script>
import DynamicSideTab from "./DynamicSideTab.vue";
import MessageComponent from "./MessageComponent.vue";

export default {
  name: "Chats",
  components: {
    DynamicSideTab,
    MessageComponent,
  },
};
</script>

<style lang="scss" scoped>
.chat_page {
  flex: 1;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: row;
}
.main_chat_sect {
  flex: 1;
  display: flex;
  flex-direction: column;

  .main_chat_top_bar {
    width: 100%;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    background: #fff;
    flex-direction: row;
    justify-content: center;
    border-bottom: var(--border);

    .main_chat_top_bar_inn {
      display: flex;
      max-width: 660px;
      overflow: hidden;
      align-items: center;
      width: calc(100% - 60px);
      justify-content: space-between;

      .other_user_info {
        display: flex;
        align-items: center;
        flex-direction: row;

        .other_user_img {
          width: 30px;
          height: 30px;
          margin-right: 10px;
          border-radius: 100%;
          display: flex;
          position: relative;
          border: 1px solid #999;
          background: rgba($color: #000000, $alpha: 0.09);
        }
        .other_user_img img {
          width: 100%;
          object-fit: cover;
          object-position: top;
          border-radius: 100%;
        }
        .other_user_status {
          bottom: -1px;
          right: 0px;
          width: 8px;
          height: 8px;
          border-radius: 9px;
          background: #28c578;
          position: absolute;
          border: 1px solid #999;
        }

        .other_user_dets {
          display: flex;
          align-items: center;
          flex-direction: row;

          .other_user_name {
            color: #444;
            font-size: 18px;
            white-space: nowrap;
            font-family: machina2;
          }
        }
      }

      .icons_buttons {
        display: flex;
        align-items: center;
        flex-direction: row;

        .action_butts {
          display: flex;
          align-items: center;
          flex-direction: row;
          padding: 0px 15px;
          border-right: var(--border);
        }
        .action_icon {
          width: 25px;
          height: 25px;
          display: flex;
          font-size: 12px;
          align-items: center;
          border-radius: 30px;
          position: relative;
          margin: 0px 7px;
          cursor: pointer;
          color: #666;
          border: var(--border-2);
          justify-content: center;

          .slash {
            width: 100%;
            height: 0px;
            position: absolute;
            transform: rotate(30deg);
            border-top: var(--border-2);
          }
        }

        .mute_butt {
          color: #fff;
          display: flex;
          padding: 4px 10px;
          background: #111;
          border-radius: 4px;
          margin-left: 20px;
          cursor: pointer;
          align-items: center;
        }
      }
    }
  }
}
</style>
