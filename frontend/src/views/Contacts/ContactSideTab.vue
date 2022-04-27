<template>
  <div class="contactSideTab">
    <div class="SideTab">
      <!--  -->

      <div class="tab_section">
        <div class="section_header">
          <p>Group</p>
          <i class="ph-users"></i>
        </div>
        <ul class="section_content">
          <li class="active">
            <p>Friends</p>
            <i class="ph-radio-button-fill"></i>
          </li>
          <li><p>Received</p></li>
          <li><p>Requested</p></li>
          <li><p>Suggested</p></li>
        </ul>
      </div>

      <div class="tab_section">
        <div class="section_header">
          <p>Sort by</p>
          <i class="ph-faders-horizontal"></i>
        </div>
        <ul class="section_content section_content_list">
          <li class="active">
            <p>Latest to Earliest</p>
            <i class="ph-sort-ascending-fill"></i>
          </li>
          <li>
            <p>Earliest to Latest</p>
            <i class="ph-sort-descending-fill"></i>
          </li>
        </ul>
      </div>

      <div class="tab_section">
        <div class="section_header">
          <p>List style</p>
        </div>
        <ul class="section_content section_content_style">
          <li
            @click="setListType('list')"
            :class="listType === 'list' ? 'active' : ''"
          >
            <i class="ph-list-dashes-fill"></i>
            <p>Brief</p>
          </li>
          <li
            @click="setListType('grid')"
            :class="listType === 'grid' ? 'active' : ''"
          >
            <i class="ph-squares-four-fill"></i>
            <p>Details</p>
          </li>
        </ul>
      </div>

      <!--  -->
    </div>

    <div class="expand_butt">
      <vue-feather type="chevron-right" size="13px" />
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
.contactSideTab {
  display: flex;
  position: relative;
  flex-direction: column;
  border-left: var(--border);
  width: var(--sidebar-right);

  .SideTab {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    .tab_section {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 20px 25px 10px;
      flex-direction: column;
      border-bottom: var(--border);
      .section_header {
        width: 100%;
        display: flex;
        font-size: 14px;
        margin: 0px 10px 14px;
        padding: 5px 8px 10px;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        p {
          color: var(--color-2);
        }
        i {
          color: var(--color-4);
        }
      }
      .section_content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        li {
          flex: 1;
          white-space: nowrap;
          font-size: 13px;
          display: flex;
          cursor: pointer;
          padding: 8px 8px;
          margin-right: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          align-items: center;
          border: var(--border);
          justify-content: center;
          i {
            margin-left: 4px;
            font-size: 10px;
          }
          &.active {
            color: var(--color-2);
            background: var(--bg-3);
          }
          &:hover {
            background: var(--bg-3);
          }
        }
      }
      .section_content_list {
        li {
          width: 100%;
          padding: 12px 10px;
          justify-content: space-between;
          border: none;
          color: var(--color-4);
          margin-right: 0px;
          i {
            font-size: 14px;
          }

          &.active {
            border: var(--border);
            color: var(--color-2);
            background: none;
          }
          &:hover {
            background: var(--bg-3);
          }
        }
      }
      .section_content_style {
        li {
          flex: 1;
          padding: 8px 12px;
          i {
            font-size: 14px;
            margin-left: 0px;
            margin-right: 8px;
          }
          p {
            margin-right: 4px;
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
