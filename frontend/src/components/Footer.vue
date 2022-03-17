<template>
  <footer>
    <div class="footer_cont">
      <div class="first_sect">
        <div class="logo">Haven</div>
        <div class="little_description">
          High-quality interface assets for designers and startup creatives
        </div>
        <ul class="socials">
          <li>
            <BIconInstagram />
          </li>
          <li>
            <BIconTwitter />
          </li>
          <li>
            <BIconGithub />
          </li>
          <li>
            <BIconDiscord />
          </li>
        </ul>
      </div>

      <div class="subscribe_sect">
        <p class="subscribe_header">Discover more products from us</p>
        <p class="subscribe_text">
          Be the first to be notified and explore new<br />
          awesome products we develop 👇 <br />
        </p>
        <div class="subcribe_input_cover">
          <input
            type="text"
            class="subcribe_input"
            placeholder="Email Address"
          />
          <button class="subscribe_button">Subscribe</button>
        </div>
      </div>

      <ul class="quick_links">
        <p class="quick_links_hd">Quick Links</p>
        <div class="quick_links_inn">
          <li>Pricing</li>
          <li>Contact</li>
          <li>About Haven</li>
          <li>Features</li>
          <li>Privacy Policy</li>
        </div>
      </ul>
    </div>

    <div class="developed_by_sect">
      <p>
        Designed and developed by <br class="break_devs_links" />
        <a href="https://twitter/thealpha_knight">@thealphaknight</a> and
        <a href="https://twitter/yinka_ganiyu">@jaybee</a>
      </p>

      <p>&copy;2022</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  width: 100%;
  overflow: hidden;
  padding: 120px 0px 30px;
  align-items: center;
  flex-direction: column;

  .footer_cont {
    width: 84%;
    display: flex;
    min-height: 225px;
    color: #000;
    overflow: hidden;
    font-weight: 400;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .first_sect {
      max-width: 300px;
      display: flex;
      flex-direction: column;
      .logo {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 25px;
        font-family: machina;
      }
      .little_description {
        font-size: 15px;
        color: #00000080;
        margin-bottom: 20px;
      }

      .socials {
        display: flex;
        align-items: center;
        flex-direction: row;
        li {
          color: #222;
          font-size: 22px;
          cursor: pointer;
          margin-right: 30px;
        }
      }
    }
    .subscribe_sect {
      display: flex;
      flex-direction: column;
      .subscribe_header,
      .subscribe_text {
        width: 340px;
        margin-bottom: 20px;
      }
      .subscribe_header {
        font-size: 19px;
        font-weight: 700;
        margin-bottom: 25px;
        font-family: machina;
      }
      .subscribe_text {
        font-size: 15px;
        color: #00000080;
      }

      .subcribe_input_cover {
        display: flex;
        align-items: center;
        flex-direction: row;
        input {
          height: 45px;
          padding: 0px;
          width: 300px;
          text-indent: 15px;
          border-radius: 5px;
          border: 1px solid #aaa;
        }
        button {
          height: 45px;
          color: #fff;
          font-size: 15px;
          cursor: pointer;
          padding: 0px 18px;
          margin-left: 10px;
          border-radius: 5px;
          background: #222;
        }
      }
    }
    .quick_links {
      display: flex;
      padding-left: 50px;
      flex-direction: column;
      .quick_links_hd {
        font-size: 19px;
        font-weight: 700;
        margin-bottom: 23px;
        font-family: machina;
      }
      .quick_links_inn {
        display: flex;
        flex-direction: column;

        li {
          display: flex;
          align-items: center;
          color: #00000080;
          margin-bottom: 5px;
          flex-direction: row;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 950px) {
    padding: 8vh 0px 30px !important;

    .footer_cont {
      width: 86%;
      flex-direction: column;
      justify-content: flex-start;
      .first_sect,
      .subscribe_sect {
        margin-bottom: 50px;
      }
      .first_sect {
        .logo {
          margin-bottom: 15px;
        }
      }
      .subscribe_header {
        margin-bottom: 15px !important;
      }
      .subcribe_input_cover {
        font-size: 13px;
        input {
          text-indent: 10px !important;
          max-width: 60% !important;
          height: 35px !important;
        }
        button {
          height: 35px !important;
        }
      }
      .quick_links {
        width: 100%;
        padding-left: 0px;
        flex-direction: column;

        .quick_links_inn {
          width: 100% !important;
          overflow: hidden !important;
          flex-direction: row;
          flex-wrap: wrap;

          li {
            margin-right: 15px;
            margin-bottom: 10px;
            justify-content: start;
          }
        }
      }
    }
    .developed_by_sect {
      font-size: 12px !important;
      width: 86% !important;
      margin-bottom: 0vh !important;
      p {
        line-height: 20px;
        margin-bottom: 10px;
        .break_devs_links {
          display: block;
        }
      }
    }
  }

  .developed_by_sect {
    width: 84%;
    display: flex;
    color: #888;
    font-size: 13px;
    padding: 40px 0px 20px;
    font-weight: 500;
    margin-bottom: 50px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    .break_devs_links {
      display: none;
    }
    a {
      color: #4a4aff;
    }
  }
}
</style>
