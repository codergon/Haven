<template>
  <div class="message_comp">
    <div class="message_container_inn">
      <div class="messages_cont">
        <div class="messages_cont_inn"></div>
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
export default {};
</script>

<style lang="scss" scoped>
.message_comp {
  flex: 1;
  width: 100%;
  .message_container_inn {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;

    .messages_cont {
      flex: 1;
      width: 100%;
      display: flex;
      padding: 20px 0px 0px;
      align-items: center;
      flex-direction: column;
      .messages_cont_inn {
        width: 660px;
        overflow: hidden;
        max-width: calc(100% - 60px);
      }
    }
    .message_input_cover {
      width: 100%;
      height: 75px;
      display: flex;
      align-items: center;
      background: #fff;
      flex-direction: row;
      justify-content: center;
      border-top: var(--border);
      .message_input_inn {
        width: 660px;
        display: flex;
        height: 100%;
        overflow: hidden;
        max-width: calc(100% - 60px);
        padding: 5px 0px;
        align-items: center;
        flex-direction: row;
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
