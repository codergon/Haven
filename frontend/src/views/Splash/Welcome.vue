<template>
  <div class="container">
    <LandingNavbar />
    <div class="landingContainer">
      <div class="first_section">
        <div class="landing_text">
          <p class="main_txt">
            Meet people and make <br />
            new friends in a safe <br />
            space built to suit you.
          </p>
          <p class="sub_txt">
            As the name implies, Haven is your place of Safety and a space
            <br />
            of shelter, shielding you away from the franticity of each day.
            <br />
          </p>

          <p class="sub_txt_small">
            As the name implies, Haven is your <br />
            place of Safety and a space of shelter, <br />
            shielding you away from the franticity <br />
            of each day.
            <br />
          </p>

          <a href="#" class="get_started_link"
            >Explore you new zone of comfort</a
          >
        </div>

        <div class="hero_img_sect">
          <img src="@/static/img/2.png" alt="" />
        </div>
      </div>

      <!-- <div class="second_section"></div> -->
    </div>

    <div class="dash_lines">
      <img src="@/static/img/5.png" alt="" />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import LandingNavbar from "@/components/LandingNavbar.vue";

export default {
  components: {
    Footer,
    LandingNavbar,
  },
};
</script>

<style lang="scss" scoped>
$f_br: 1190px;
$s_br: 900px;

.container {
  width: 100%;
  display: flex;
  //   background: #F5F5F5;
  flex-direction: column;

  .dash_lines {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    img {
      width: auto;
      opacity: 0.6;
      max-width: 100%;
      background-repeat: no-repeat;
    }
  }
}
.landingContainer {
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;

  .first_section {
    width: 84%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: calc(100vh - 65px);
    // padding-bottom: calc(10vh + 80px);
    .hero_img_sect {
      width: 50%;

      img {
        width: 100%;
        max-width: 100%;
      }
    }
    .landing_text {
      width: 50%;
      display: flex;
      flex-direction: column;

      .main_txt {
        color: #000;
        font-size: 40px;
        font-weight: 700;
        line-height: 126%;
        margin-bottom: 20px;
        font-family: machina;
      }
      .sub_txt,
      .sub_txt_small {
        font-size: 15px;
        line-height: 137%;
        margin-bottom: 15px;
      }
      .sub_txt_small {
        display: none;
      }
      .get_started_link {
        color: #555;
        font-size: 15px;
        width: max-content;
        padding-bottom: 4px;
        background: #222;
        color: #fff;
        padding: 7px 12px;
        border-radius: 5px;
      }

      @media screen and (max-width: $f_br) {
        margin-right: 30px;
        .main_txt {
          font-size: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    min-height: 80vh;

    .first_section {
      width: 86vw;
      padding: 15vh 0vh 10vh;
      height: max-content;
      overflow: hidden;
      flex-direction: column-reverse;
      justify-content: start;

      .hero_img_sect {
        width: max-content;
        max-width: 90%;
        align-items: center;
        margin-right: 0px;
      }
      .landing_text {
        width: max-content;
        max-width: 100%;
        align-items: center;
        margin-top: 5vh;
        margin-right: 0px;

        .main_txt {
          width: 100%;
          font-size: 24px;
          margin-bottom: 15px;
        }
        .sub_txt {
          display: none;
        }
        .sub_txt_small {
          width: 100%;
          display: block;
          font-size: 15px;
        }
        .get_started_link {
          font-size: 14px;
          margin-top: 10px;
          align-self: flex-start;
        }
      }
    }
  }

  .second_section {
    width: 100%;
    display: flex;
    padding: 0px 8%;
    height: 100vh;
    flex-direction: row;
    align-items: center;
    background: #111;
  }
}
</style>
