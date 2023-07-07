<template>
  <div class="message_comp">
    <div class="message_container_inn">
      <div class="messages_cont">
        <div class="messages_cont_inn">
          <!--  -->

          <div
            v-for="(item, index) in messages"
            :key="index"
            class="message_list_container"
          >
            <SenderMsg v-if="item?.isSender" :data="item" />
            <ReceiverMsg v-else :data="item" />
          </div>

          <!-- <div class="scroll_down_butt">
            <BIconArrowDown />
          </div> -->
        </div>
      </div>

      <div class="message_input_cover">
        <div class="message_input_inn">
          <div class="msg_act_butt">
            <BIconFolderPlus class="message_action_icon" />
          </div>
          <input
            type="text"
            class="message_text_input"
            placeholder="Send secure messages here.."
          />

          <div class="msg_act_butt_1">
            <BIconEmojiDizzy class="message_action_icon" />
          </div>
          <div class="msg_act_butt_2">
            <BIconMic class="message_action_icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SenderMsg from "./SenderMsg.vue";
import ReceiverMsg from "./ReceiverMsg.vue";

export default {
  components: { SenderMsg, ReceiverMsg },
  data() {
    return {
      messages: [
        {
          isSender: true,
          isFile: true,
          fileType: "image",
          txt: "Check out this guy's shot",
          timestamp: 1636585447000,
          media: "https://i.postimg.cc/CKBfTF7D/image-six.jpg",
        },
        {
          isSender: true,
          isFile: false,
          fileType: null,
          txt: "Isn't it fire?",
          timestamp: 1636595447000,
          media: null,
        },
        {
          isSender: false,
          isFile: false,
          fileType: null,
          txt: "It is. Wow! 👏👏",
          timestamp: 1636575447000,
          media: null,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.message_comp {
  width: 100%;
  height: calc(100% - 75px);
  .message_container_inn {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;

    .messages_cont {
      width: 100%;
      display: flex;
      position: relative;
      flex-direction: row;
      overflow: hidden scroll;
      justify-content: center;
      height: calc(100% - 75px);
      .messages_cont_inn {
        display: flex;
        max-width: 660px;
        position: relative;
        padding: 20px 0px 20px;
        flex-direction: column;
        width: calc(100% - 60px);
        .message_list_container {
          padding-bottom: 6px;
        }
      }
      .scroll_down_butt {
        right: 20px;
        width: 35px;
        height: 35px;
        bottom: 10%;
        display: flex;
        color: #555;
        cursor: pointer;
        align-items: center;
        border: var(--border-3);
        border-radius: 100%;
        position: absolute;
        background: #fff;
        justify-content: center;
      }
    }
    .messages_cont::-webkit-scrollbar {
      width: 7px;
      background: transparent;
    }
    .messages_cont::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: rgba($color: #000000, $alpha: 0.16);
    }
    .message_input_cover {
      width: 100%;
      height: 75px;
      display: flex;
      align-items: center;
      // background: #fff;
      flex-direction: row;
      justify-content: center;
      border-top: var(--border);
      .message_input_inn {
        height: 100%;
        display: flex;
        overflow: hidden;
        max-width: 660px;
        padding: 5px 0px;
        align-items: center;
        flex-direction: row;
        width: calc(100% - 60px);

        .msg_act_butt,
        .msg_act_butt_1,
        .msg_act_butt_2 {
          height: 20px;
          display: flex;
          font-size: 16px;
          cursor: pointer;
          position: relative;
          align-items: center;
          padding-right: 20px;
          justify-content: center;
          border-right: var(--border);
        }
        .msg_act_butt_1,
        .msg_act_butt_2 {
          font-size: 15px;
          margin-left: 18px;
        }
        .msg_act_butt_2 {
          padding-right: 0px;
          border-right: none;
          font-size: 16px;
        }
        .message_text_input {
          flex: 1;
          border: none;
          height: 100%;
          padding: 10px;
          flex-wrap: wrap;
          margin: 0px 10px;
        }
      }
    }
  }
}
</style>
