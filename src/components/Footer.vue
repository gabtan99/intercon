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
              <form>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control emailInput"
                    name="email"
                    placeholder="Your email address"
                  />
                  <span class="input-group-btn subscribe">
                    <button class="btn btn-default subscribeBtn" type="button">
                      Join
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <span v-html="settings.footer" class="copyright" />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
};
</script>

<style scoped>
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
}

.link {
  color: #ffffff;
  padding: 5px;
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
  opacity: 0.3;
}
</style>
