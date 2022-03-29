<template>
  <div class="home_nav">
    <div class="nav_title">
      <p>Connect with beautiful people</p>
    </div>
    <div class="nav_tweaks">
      <div class="filter">
        <div class="filter_hd">
          <p>Sort by</p>
          <span class="filter_icon"><BIconArrowDownUp /></span>
          <span class="semi_colon">:</span>
          <span class="current">Most Recent</span>
          <span class="filter_icon"><BIconCaretDownFill /></span>
        </div>
      </div>

      <div class="v_line"></div>

      <div class="view_type">
        <div class="select_view">
          <div class="vButt" @click="setListType('grid')">
            <div
              :class="
                listType === 'grid'
                  ? 'view_butt view_1 view_butt_selected'
                  : 'view_butt view_1'
              "
            >
              <BIconGridFill />
              <!-- <BIconColumnsGap /> -->
            </div>
            <p>Grid</p>
          </div>
          <div class="vButt" @click="setListType('list')">
            <div
              :class="
                listType === 'list'
                  ? 'view_butt view_2 view_butt_selected'
                  : 'view_butt view_2'
              "
            >
              <BIconListUl />
            </div>
            <p>Details</p>
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
  methods: {
    setListType(type) {
      if (type == "grid") {
        this.store.dispatch("setListType", "grid");
      } else if (type == "list") {
        this.store.dispatch("setListType", "list");
      }
    },
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
  color: #444;
  display: flex;
  align-items: center;
  margin: 0px 10px;
  font-family: machina2;
  border-bottom: var(--border);
  height: var(--nav-height);
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .nav_title {
    color: #444;
    font-size: 16px;
    white-space: nowrap;
  }
  .nav_tweaks {
    .filter {
      color: #777;
      .filter_hd {
        p {
          margin-top: -1px;
          margin-right: 2px;
        }
        .semi_colon {
          font-size: 16px;
          margin: -3px 12px 0px;
        }
        .filter_icon {
          font-size: 12px;
          margin: 0px 0px -2px 8px;
        }
      }
    }
    .v_line {
      width: 1px;
      height: 17px;
      margin: 0px 30px 0px 30px;
      background: var(--color-2);
    }

    .view_type {
      .select_view {
        .vButt {
          cursor: pointer;
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
            color: #555;
            border: var(--border);
          }
        }
      }
    }
  }
}
</style>
