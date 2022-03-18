<template>
  <div class="container">
    <LandingNavbar />
    <div class="landingContainer">
      <div class="first_section">
        <div class="hero_img_sect">
          <img src="@/static/img/3.png" alt="" />
        </div>

        <div class="auth_form">
          <div class="auth_form_inn">
            <div class="auth_form_hd">
              <p class="hd_main">Hey there 👋</p>
              <p class="hd_sub">Fill in your details to create an account</p>
            </div>

            <div class="real_form">
              <div class="input_container">
                <input
                  type="email"
                  v-model="email"
                  placeholder="Email Address"
                  class="input_tag"
                />
                <p class="incorrectDetails" v-if="!rightEmail">
                  <BIconXCircle /> Invalid email address supplied
                </p>
              </div>
              <div class="input_container">
                <input
                  type="text"
                  placeholder="Username"
                  v-model="username"
                  class="input_tag"
                />
                <p class="incorrectDetails" v-if="!rightUsername">
                  <BIconXCircle /> Username must be at least 4 characters
                </p>
              </div>
              <div class="input_container">
                <input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  class="input_tag"
                />
                <p class="incorrectDetails" v-if="!rightPassword">
                  <BIconXCircle /> Password must contain lowercase, uppercase
                  letters & digits without spaces.
                </p>
              </div>

              <div class="rem_container">
                <input type="checkbox" class="remember_input" />
                <p class="input_label">Remember me</p>
              </div>

              <button class="submit_butt" @click="submitDetails">
                Create new account
              </button>
            </div>

            <div class="other_act">
              <p class="other_auth">
                Already created an account?
                <router-link to="/auth/login">Sign In</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dash_lines">
      <img src="@/static/img/5.png" alt="" />
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer.vue";
import * as EmailValidator from "email-validator";
import * as PasswordValidator from "password-validator";
import LandingNavbar from "@/components/LandingNavbar.vue";

export default {
  components: {
    Footer,
    LandingNavbar,
  },
  data() {
    return {
      email: "",
      username: "",
      password: "",
      rightEmail: true,
      rightUsername: true,
      rightPassword: true,
    };
  },
  methods: {
    async submitDetails() {
      const data = {
        email: this.email,
        username: this.username,
        password: this.password,
      };
      var PassValidator = new PasswordValidator();
      var UsernameValidator = new PasswordValidator();
      PassValidator.is()
        .min(8)
        .is()
        .max(15)
        .has()
        .uppercase()
        .has()
        .lowercase()
        .has()
        .digits(1)
        .has()
        .not()
        .spaces()
        .is()
        .not()
        .oneOf(["Passw0rd", "Password123"]);
      UsernameValidator.is().min(4).is().max(15).has().not().spaces();

      if (!data?.email && !data?.username && !data?.password) {
        return;
      }

      if (EmailValidator.validate(data?.email)) {
        this.rightEmail = true;
      } else {
        this.rightEmail = false;
      }

      if (UsernameValidator.validate(data?.username)) {
        this.rightUsername = true;
      } else {
        this.rightUsername = false;
      }

      if (PassValidator.validate(data?.password)) {
        this.rightPassword = true;
      } else {
        this.rightPassword = false;
      }

      if (
        EmailValidator.validate(data?.email) &&
        UsernameValidator.validate(data?.username) &&
        PassValidator.validate(data?.password)
      ) {
        await axios.post("register", data).then((res) => {
          console.log(res);
        });
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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

  @media screen and (max-width: 850px) {
    .first_section {
      width: 86vw !important;
      padding: 15vh 0vh 10vh;
      height: max-content;
      overflow: hidden;
      flex-direction: column !important;
      .auth_form {
        margin-top: 15px;
        padding-left: 0px !important;
        width: 100% !important;
        .auth_form_inn {
          width: 100% !important;
        }
      }
    }
  }

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
    .auth_form {
      width: 50%;
      display: flex;
      align-items: center;
      padding-left: 5%;
      flex-direction: column;

      div {
        display: flex;
        flex-direction: column;
      }
      .auth_form_inn {
        width: 320px;

        .auth_form_hd {
          .hd_main {
            color: #000;
            font-size: 21px;
            font-weight: 700;
            margin-bottom: 15px;
            font-family: machina;
          }
          .hd_sub {
            font-size: 15px;
            color: #00000080;
            margin-bottom: 18px;
            // width: max-content;
            padding-bottom: 15px;
            border-bottom: 1px dashed #dfdfdf;
          }
        }

        .real_form {
          .input_container {
            width: 100%;
            margin-bottom: 20px;

            .incorrectDetails {
              font-size: 10px;
              margin-top: 10px;
              color: #4a4aff;
              svg {
                margin-right: 2px;
                margin-bottom: -2px;
              }
            }

            .input_label {
              color: #000;
              margin-bottom: 12px;
              font-weight: 700;
              font-family: machina;
            }
            .input_label_password {
              width: 100%;
              color: #000;
              margin-bottom: 12px;
              font-weight: 700;
              align-items: center;
              flex-direction: row;
              justify-content: space-between;

              .inp_label {
                font-family: machina;
              }
              .forgotPass {
                font-size: 12px;
                font-weight: 400;
                cursor: pointer;
                margin-bottom: 1px;
              }
            }
            .input_tag {
              width: 100%;
              color: #000;
              border-radius: 5px;
              padding: 14px 20px;
              letter-spacing: 0.04rem;
              border: 1px solid #dfdfdf;
            }
          }
          .rem_container {
            width: 100%;
            align-items: center;
            flex-direction: row;
            margin-bottom: 20px;
            .input_label {
              color: #000;
              font-family: machina;
              font-weight: 700;
              margin-left: 10px;
            }
            .remember_input {
              cursor: pointer;
            }
          }

          .submit_butt {
            color: #fff;
            padding: 12px 0px;
            font-weight: 700;
            font-family: machina;
            background: #000;
            border-radius: 5px;
            cursor: pointer;
          }
        }

        .other_act {
          margin-top: 18px;
          .other_auth {
            color: #333;
            font-size: 12px;
            a {
              font-weight: 700;
              color: #4a4aff;
            }
          }
        }
      }
    }
  }
}
</style>
