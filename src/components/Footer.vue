<template>
  <footer class="footer">
    <div class="container">
      <div class="mainContent">
        <div class="row ">
          <div class="col-md-2 links">
            <h2 class="font-gilroy-bold font-24">Links</h2>
            <div class="horizontal">
              <g-link to="/" class="link font-avenir-light font-16"
                >Home</g-link
              >
              <g-link to="/about/" class="link font-avenir-light font-16"
                >About Us</g-link
              >
              <g-link to="/services/" class="link font-avenir-light font-16"
                >Services</g-link
              >
              <g-link to="/targets/" class="link font-avenir-light font-16"
                >Targets</g-link
              >
              <g-link to="/contact/" class="link font-avenir-light font-16"
                >Contact Us</g-link
              >
            </div>
          </div>
          <div class="col-md-5 contact">
            <h2 class="font-gilroy-bold font-24">Contact Us</h2>
            <div class="horizontal">
              <span class="contact-info">
                <font-awesome :icon="'map-marker-alt'" class="icon" />
                <p class="font-avenir-light font-16">
                  210B Del Monte Ave, La Loma, Quezon City, 1114 Metro Manila
                </p>
              </span>

              <span class="contact-info">
                <font-awesome :icon="'phone-alt'" class="icon" />
                <p class="font-avenir-light font-16">
                  +63 9171234567 | +8888 1234
                </p>
              </span>

              <span class="contact-info">
                <font-awesome :icon="'envelope'" class="icon" />
                <p class="font-avenir-light font-16">
                  info@interconregenerative.com
                </p>
              </span>
            </div>
          </div>
          <div class="col-md newsletter">
            <h2 class="font-gilroy-bold font-24">Subscribe to Newsletter</h2>
            <div class="horizontal">
              <p class="font-avenir-light font-16">
                You can trust us. we only send promo offers, not a single spam
              </p>
              <form
                @submit.prevent="handleSubmit"
                style="box-shadow: 0px 30px 30px #00000029;"
              >
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control emailInput font-avenir-light font-16"
                    name="email"
                    placeholder="Your email address"
                    v-on:input="handleChange"
                  />
                  <span class="input-group-btn subscribe">
                    <button
                      v-if="!isLoading"
                      class="btn btn-default subscribeBtn font-gilroy-extra-bold font-16"
                      type="submit"
                    >
                      Join
                    </button>

                    <div v-else>
                      <span
                        class="spinner-border spinner-border-lg"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </div>
                  </span>
                </div>
              </form>

              <p
                v-if="showMessage && isSuccess"
                class="successMsg font-avenir-light font-16"
              >
                Thank You for subscribing! A confirmation email will be sent.
              </p>
              <p
                v-else-if="showMessage && !isSuccess"
                class="errorMsg font-avenir-light font-16"
              >
                Uh oh! Something went wrong.
              </p>
              <div class="row" style="margin-left: 5px;">
                <a href="https://www.facebook.com/interconregenerative/">
                  <font-awesome
                    :icon="['fab', 'facebook-square']"
                    class="social"
                /></a>
                <a href="https://www.instagram.com/interconregenerative/">
                  <font-awesome :icon="['fab', 'instagram']" class="social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span
        v-html="settings.footer"
        class="copyright font-avenir-light font-16"
      />
    </div>
  </footer>
</template>

<script>
import { signupNewsletter } from "@/services/newsletter";

export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      email: null,
      isLoading: false,
      isSuccess: false,
      showMessage: null,
    };
  },
  methods: {
    handleChange(text) {
      this.email = text.target.value;
    },
    showResult(ok) {
      this.isLoading = false;
      this.showMessage = true;
      if (ok) {
        this.isSuccess = true;
      } else {
        this.isSuccess = false;
      }
    },
    handleSubmit() {
      if (this.email === null || this.email.length === 0) return null;

      this.isLoading = true;
      signupNewsletter(this.email)
        .then((res) => {
          this.showResult(true);
        })
        .catch((err) => {
          this.showResult(false);
          console.log("err", err);
        });
    },
  },
};
</script>

<style scoped>
.footer {
  font-size: 0.8rem;
  background: var(--blue-branding);
  color: var(--white);
  padding-top: 30px;
  padding-bottom: 15px;
}

.copyright {
  display: flex;
  justify-content: center;
  padding: 1.4rem 0;
}

.horizontal {
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;
}

.link {
  color: var(--white);
  padding: 5px 0px;
  transition: all ease-in 0.15s;
  text-decoration: none;
}

.link:hover {
  transform: translateY(-0.1rem);
  color: var(--alt-blue-secondary);
}

.mainContent {
  padding-top: 3rem;
}

.subscribe {
  background: var(--blue-branding-light);
  padding: 0px 10px;
  border-radius: 0px 30px 30px 0px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.subscribeBtn {
  color: var(--white);
}

.emailInput {
  border-radius: 30px 0px 0px 30px;
  padding: 0px 20px;
}

.emailInput::placeholder {
  opacity: 0.5;
}

.successMsg {
  color: var(--green-branding-light);
  padding-top: 10px;
}

.errorMsg {
  color: var(--white);
  padding-top: 10px;
}

.icon {
  margin-right: 15px;
  font-size: 13px;
}

.social {
  margin: 20px 0px;
  margin-right: 15px;
  color: var(--white);
  font-size: 24px;
}

.social:hover {
  color: var(--gray-3);
}

.contact-info {
  display: flex;
  flex-direction: row;
  margin: 5px 0px;
}
</style>
