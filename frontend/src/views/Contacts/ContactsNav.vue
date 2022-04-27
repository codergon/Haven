<template>
  <div class="home_nav">
    <div class="filter">
      <div class="filter_hd">
        <span class="current">Friends</span>
        <span class="current">Latest</span>
      </div>
    </div>

    <div class="view_type">
      <div class="select_view">
        <div class="vButt">
          <div class="view_butt view_2 view_butt_selected">
            <BIconListUl v-if="listType === 'list'" />
            <i class="ph-squares-four-fill" v-else />
          </div>
        </div>
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
  computed: {
    listType: function () {
      return this.store.state.listType;
    },
  },
};
</script>

<style lang="scss" scoped>
.home_nav {
  color: var(--color-2);
  display: flex;
  align-items: center;
  margin: 0px 10px;
  white-space: nowrap;
  border-bottom: var(--border);
  height: var(--nav-height);
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .filter {
    color: var(--color-2);
    .filter_hd {
      p {
        margin-top: -1px;
        margin-right: 2px;
      }
      .current {
        font-size: 12px;
        padding-bottom: 2px;
        padding: 5px 12px;
        border-radius: 4px;
        margin-right: 10px;
        background: var(--bg-3);
        border: var(--border);
      }
      .semi_colon {
        font-size: 16px;
        margin: -3px 12px 0px;
      }
      .filter_icon {
        margin-left: 2px;
        padding-top: 5px;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .view_type {
    .vButt {
      margin-right: 10px;
      .view_butt {
        color: var(--color-2);
        padding: 6px 8px;
        margin: 0px 10px;
        border-radius: 4px;
        transition: all 0.2s;
        border: 1px solid transparent;
      }
      .view_2 {
        font-size: 18px;
      }
      .view_butt_selected {
        color: var(--color-2);
        border: var(--border);
      }
    }
  }
}
</style>
