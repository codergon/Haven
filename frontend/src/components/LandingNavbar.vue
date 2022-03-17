<template>
  <nav>
    <div class="nav_bar">
      <div class="logo">Haven</div>

      <div class="nav_links_theme">
        <div class="nav_links">
          <router-link to="/auth/login">Sign In</router-link>
          <router-link to="/auth/register">Sign Up</router-link>
          <router-link to="/auth/features" class="features_link"
            >Features</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  height: 68px;
  width: 100%;
  display: flex;
  background: #fff;
  flex-direction: row;
  //   border-bottom: var(--border);

  .nav_bar {
    width: 100%;
    display: flex;
    color: #000;
    font-weight: 600;
    padding: 0px 8%;
    overflow: hidden;
    flex-direction: row;
    justify-content: space-between;
  }

  .logo {
    font-size: 19px;
    font-family: machina2;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .nav_links_theme {
    display: flex;
    align-items: center;
    flex-direction: row;

    .nav_links {
      display: flex;
      flex-direction: row;
      a {
        padding: 4px 15px;
        margin-right: 10px;
        border-radius: 5px;
      }
      a:nth-child(2) {
        color: #fff;
        background: #222;
      }
    }
  }

  @media screen and (max-width: 850px) {
    .nav_bar {
      padding: 0px 7vw !important;
    }
    .logo {
      font-size: 14px;
    }
    .nav_links {
      font-size: 12px;
      a {
        padding: 4px 6px !important;
        margin-right: 6px !important;
      }
      .features_link {
        display: none;
      }
    }
  }
}
</style>
