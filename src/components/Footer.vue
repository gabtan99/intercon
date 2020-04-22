<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <h3>Links</h3>
          <div class="linkContainer">
            <g-link to="/" class="link">Home</g-link>
            <g-link to="/about/" class="link">About Us</g-link>
            <g-link to="/services/" class="link">Services</g-link>
            <g-link to="/targets/" class="link">Targets</g-link>
            <g-link to="/contact/" class="link">Contact Us</g-link>
          </div>
        </div>
        <div class="col-sm">
          <h3>Contact Us</h3>
        </div>
        <div class="col-sm">
          <h3>Subscribe to Newsletter</h3>
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
  padding: 6rem 0;
  background: #123450 0% 0% no-repeat padding-box;
  color: #ffffff;
}

.copyright {
  display: flex;
  justify-content: center;
}

.linkContainer {
  display: flex;
  flex-direction: column;
}

.link {
  color: #ffffff;
}
</style>
