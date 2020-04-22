<template>
  <footer class="footer">
    <div class="container">
      <div class="mainContent">
        <div class="row">
          <div class="col-sm-2">
            <h3>Links</h3>
            <div class="horizontal">
              <g-link to="/" class="link">Home</g-link>
              <g-link to="/about/" class="link">About Us</g-link>
              <g-link to="/services/" class="link">Services</g-link>
              <g-link to="/targets/" class="link">Targets</g-link>
              <g-link to="/contact/" class="link">Contact Us</g-link>
            </div>
          </div>
          <div class="col-sm-5">
            <h3>Contact Us</h3>
            <div class="horizontal">
              <p>210B Del Monte Ave, La Loma, Quezon City, 1114 Metro Manila</p>
              <p>+63 9171234567 | +8888 1234</p>
              <p>info@interconregenerative.com</p>
            </div>
          </div>
          <div class="col-sm">
            <h3>Subscribe to Newsletter</h3>
            <div class="horizontal">
              <p>
                You can trust us. we only send promo offers, not a single spam
              </p>
              <form
                @submit.prevent="handleSubmit"
                style="box-shadow: 0px 30px 30px #00000029;"
              >
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control emailInput"
                    name="email"
                    placeholder="Your email address"
                    v-on:input="handleChange"
                  />
                  <span class="input-group-btn subscribe">
                    <button class="btn btn-default subscribeBtn" type="submit">
                      Join
                    </button>
                  </span>
                </div>
              </form>
              <p v-if="showSuccess" class="successMsg">
                Thank You for Subscribing!
              </p>
            </div>
          </div>
        </div>
      </div>
      <span v-html="settings.footer" class="copyright" />
    </div>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      email: null,
      showSuccess: false,
    };
  },
  methods: {
    handleChange(text) {
      this.email = text.target.value;
      console.log(this.email);
    },
    handleSubmit() {
      this.showSuccess = true;
      //   const url = "https://us19.api.mailchimp.com/3.0/lists/42801b9de0";
      //   const token = "c3566894e1b61bc0ee7c1bd61a1c810c-us19";
      //   const data = {
      //     members: [
      //       {
      //         email_address: "gabtanwdwad99@gmail.com",
      //         status: "subscribed",
      //       },
      //     ],
      //   };
      //   axios
      //     .post(url, {
      //       headers: {
      //         Authorization: `auth ${token}`,
      //         "Access-Control-Allow-Origin": "http://localhost:8080",
      //         "Content-Type": "application/json",
      //       },
      //       crossDomain: true,
      //       body: {
      //         data: JSON.stringify(data),
      //       },
      //     })
      //     .then(function(response) {
      //       this.showSuccess = true;
      //       console.log(response);
      //     })
      //     .catch(function(error) {
      //       console.log(error);
      //     });
    },
  },
};
</script>

<style scoped>
p {
  font-size: 13px;
}

.footer {
  font-size: 0.8rem;
  background: #123450 0% 0% no-repeat padding-box;
  color: #ffffff;
}

.bold {
  font-weight: bold;
}

.copyright {
  display: flex;
  justify-content: center;
  padding: 1.2rem 0;
}

.horizontal {
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
  padding-top: 0.2rem;
}

.link {
  color: #ffffff;
  padding: 5px 0px;
}

.mainContent {
  padding-top: 3rem;
}

.subscribe {
  background: #0e95b6;
  padding: 0px 10px;
  border-radius: 0px 30px 30px 0px;
}

.subscribeBtn {
  color: #ffffff;
  font-weight: bold;
}

.emailInput {
  border-radius: 30px 0px 0px 30px;
  padding: 0px 20px;
}

.emailInput::placeholder {
  opacity: 0.5;
}

.successMsg {
  color: #8bf38b;
  padding: 10px 0px;
}
</style>
