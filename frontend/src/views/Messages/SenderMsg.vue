<template>
  <div class="msgCover">
    <!--  -->
    <div class="msgContainerMedia" v-if="!!data?.isFile">
      <div class="mediaContainer">
        <img :src="data?.media" v-if="data?.fileType === 'image'" alt="" />
        <video
          :src="data?.media"
          v-else-if="data?.fileType === 'video'"
          controls
          alt=""
        />
      </div>
      <div class="textContainer" v-if="!!data?.txt">
        <p>
          {{ data?.txt }}
        </p>
        <p class="msg_time">{{ dayjs(data?.timestamp).format("hh:mm a") }}</p>
      </div>
    </div>

    <div class="msgContainer" v-else>
      <div class="textContainer">
        <p>
          {{ data?.txt }}
        </p>
        <p class="msg_time">{{ dayjs(data?.timestamp).format("hh:mm a") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    data: Object,
  },
  mounted() {},
  data() {
    return {
      dayjs,
    };
  },
};
</script>

<style lang="scss" scoped>
.msgCover {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: flex-end;

  .msgContainer,
  .msgContainerMedia {
    max-width: 48%;
    flex-wrap: wrap;
    color: #333;
    display: flex;
    font-weight: 600;
    flex-direction: row;
    border: 1px solid #e5e5e5;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 0px;
    background: rgba($color: #000000, $alpha: 0.02);

    .mediaContainer {
      display: flex;
      flex-direction: column;

      img,
      video {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }

    .textContainer {
      width: 100%;
      overflow: hidden;
      font-weight: 400;
      padding: 15px 15px 10px;
      overflow-wrap: break-word;

      .msg_time {
        color: #999;
        margin-top: 2px;
        font-size: 10px;
        font-weight: 500;
        text-align: end;
        text-transform: uppercase;
      }
    }
  }
  .msgContainerMedia {
    width: 250px;
    max-width: 42%;
  }
}
</style>
