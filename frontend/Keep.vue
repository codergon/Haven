<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {};
</script>

<style></style>

// with theme

<template>
  <nav>
    <div class="nav_bar">
      <div class="logo">Haven</div>

      <div class="nav_links_theme">
        <div class="nav_links">
          <router-link to="/auth/login">Sign In</router-link>
          <router-link to="/auth/register">Sign Up</router-link>
          <router-link to="/auth/features">Features</router-link>
        </div>

        <!-- <div class="theme_butt">
          <div class="theme_active"></div>
          <div class="theme_icons">
            <div class="theme_icon_cover theme_icon_cover_active">
              <vue-feather type="sun" size="12px" class="bell_icon" />
            </div>
            <div class="theme_icon_cover">
              <vue-feather type="moon" size="12px" class="bell_icon" />
            </div>
          </div>
        </div> -->
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
    font-size: 18px;
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

  .theme_butt {
    width: 55px;
    height: 23px;
    padding: 3px;
    border-radius: 20px;
    position: relative;
    background: rgba(0, 0, 0, $alpha: 0.07);
  }
  .theme_icons {
    left: 3px;
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    justify-content: space-around;
  }
  .theme_icon_cover {
    width: 50%;
    cursor: pointer;
    justify-content: center;
  }
  .theme_active {
    width: 50%;
    height: 100%;
    border-radius: 18px;
    background: #fff;
  }
  .theme_icon_cover_active {
    color: #000;
  }
}
</style>
