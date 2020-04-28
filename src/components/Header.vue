<template>
  <b-navbar type="light" sticky :class="scrollingShadow" style="z-index: 999">
    <b-container fluid="lg" class="desktop-nav">
      <b-navbar-brand>
        <a href="/">
          <img
            src="@/assets/img/irc-logo-brand.png"
            alt="Intercon Regenrative Center"
            class="navbar__brand-img"
          />
        </a>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          to="/"
          exact
          class="mx-4 font-18 font-gilroy-bold header-nav-item "
          exact-active-class="header-nav-item--active"
        >
          Home
        </b-nav-item>
        <b-nav-item
          to="/services"
          class="mx-4 font-18 font-gilroy-bold header-nav-item "
          active-class="header-nav-item--active"
        >
          Services
        </b-nav-item>
        <b-nav-item
          to="/targets"
          exact
          class="mx-4 font-18 font-gilroy-bold header-nav-item "
          exact-active-class="header-nav-item--active"
        >
          Targets
        </b-nav-item>
        <b-nav-item
          to="/about"
          exact
          class="mx-4 font-18 font-gilroy-bold header-nav-item "
          exact-active-class="header-nav-item--active"
        >
          About Us
        </b-nav-item>
        <b-button
          pill
          to="/contact"
          exact
          class="px-5 py-3 green-button font-18 font-gilroy-bold"
          exact-active-class="green-button--active"
        >
          Contact Us
        </b-button>
      </b-navbar-nav>
    </b-container>

    <b-container class="mobile-nav">
      <b-navbar-brand>
        <a href="/">
          <img
            src="@/assets/img/irc-logo-brand.png"
            alt="Intercon Regenrative Center"
            class="navbar__brand-img"
          />
        </a>
      </b-navbar-brand>
      <b-container class="ml-auto font-21 d-flex justify-content-end ">
        <div class="outer-menu">
          <input class="checkbox-toggle" type="checkbox" />
          <div class="hamburger">
            <div></div>
          </div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a class="mob-link font-gilroy-bold" href="/">Home</a>
                  </li>
                  <li>
                    <a class="mob-link font-gilroy-bold" href="/services"
                      >Services</a
                    >
                  </li>
                  <li>
                    <a class="mob-link font-gilroy-bold" href="/targets"
                      >Targets</a
                    >
                  </li>
                  <li>
                    <a class="mob-link font-gilroy-bold" href="/about"
                      >About Us</a
                    >
                  </li>
                  <li>
                    <a class="mob-link font-gilroy-bold" href="/contact"
                      >Contact Us</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      scrollingShadow: "",
    };
  },
  methods: {
    goToContact() {
      if (this.$route.fullPath !== "/contact") {
        this.$router.push("/contact");
      }
    },
    handleScroll(e) {
      // fix: testing
      if (process.isClient) {
        if (window.scrollY > 0) {
          this.scrollingShadow = "navbar--scroll-shadow";
        } else {
          this.scrollingShadow = "";
        }
      }
    },
  },
  mounted() {
    // if (process.isClient) {
    //   window.addEventListener("scroll", this.handleScroll);
    // }
  },
  beforeDestroy() {
    // if (process.isClient) {
    //   window.removeEventListener("scroll", this.handleScroll);
    // }
  },
};
</script>

<style scoped>
.navbar {
  background: var(--white);
}
.navbar--scroll-shadow {
  box-shadow: 0px 2px 3px var(--gray-2);
  -webkit-box-shadow: 0px 2px 3px var(--gray-2);
  -moz-box-shadow: 0px 2px 3px var(--gray-2);
  -o-box-shadow: 0px 2px 3px var(--gray-2);
  -ms-box-shadow: 0px 2px 3px var(--gray-2);
}
.navbar__brand-img {
  height: 9rem;
  width: auto;
}
@media only screen and (max-width: 867px) {
  .desktop-nav.container-lg {
    display: none;
  }
}
@media only screen and (max-width: 867px) {
  .navbar__brand-img {
    height: 7rem;
    width: auto;
  }
}
.header-nav-item .nav-link {
  color: var(--black-text) !important;
  transition: all ease-in 0.15s;
  -webkit-transition: all ease-in 0.15s;
  -moz-transition: all ease-in 0.15s;
  -o-transition: all ease-in 0.15s;
  -ms-transition: all ease-in 0.15s;
  border-bottom: 0.3rem solid transparent;
}
.header-nav-item .nav-link:hover {
  transform: translateY(-0.3rem);
  color: var(--blue-branding) !important;
}
.header-nav-item .nav-link.header-nav-item--active {
  border-bottom: 0.3rem solid;
  border-bottom-color: var(--bluegreen-link);
}
.nav-item {
  display: flex;
  align-items: center;
}
.green-button {
  background-color: var(--green-branding);
  border: none;
  box-shadow: 0px 3px 6px var(--button-shadow);
  -webkit-box-shadow: 0px 3px 6px var(--button-shadow);
  -moz-box-shadow: 0px 3px 6px var(--button-shadow);
  -o-box-shadow: 0px 3px 6px var(--button-shadow);
  -ms-box-shadow: 0px 3px 6px var(--button-shadow);
  color: var(--white-text);
  transition: all ease-in 0.15s;
}
.green-button:hover {
  transform: translateY(-0.3rem);
  background-color: var(--green-branding);
}
.green-button:active,
.green-button:focus {
  background-color: var(--green-branding) !important;
}

@media only screen and (min-width: 868px) {
  .mobile-nav.container {
    display: none;
  }
}

.mob-link {
  color: var(--green-branding);
}

.flex-center {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}

.outer-menu {
  z-index: 1;
}

.outer-menu .checkbox-toggle {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
  width: 60px;
  height: 60px;
  opacity: 0;

  margin-top: 10px;
}
.outer-menu .checkbox-toggle:checked + .hamburger > div {
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.outer-menu .checkbox-toggle:checked + .hamburger > div:before,
.outer-menu .checkbox-toggle:checked + .hamburger > div:after {
  top: 0;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.outer-menu .checkbox-toggle:checked + .hamburger > div:after {
  opacity: 0;
}
.outer-menu .checkbox-toggle:checked ~ .menu {
  pointer-events: auto;
  visibility: visible;
}
.outer-menu .checkbox-toggle:checked ~ .menu > div {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition-duration: 0.75s;
  transition-duration: 0.75s;
}
.outer-menu .checkbox-toggle:checked ~ .menu > div > div {
  opacity: 1;
  -webkit-transition: opacity 0.4s ease 0.4s;
  transition: opacity 0.4s ease 0.4s;
}

.outer-menu .checkbox-toggle:checked:hover + .hamburger > div {
  -webkit-transform: rotate(225deg);
  transform: rotate(225deg);
}
.outer-menu .hamburger {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 65px;
  height: 70px;
  padding: 0.5em 1em;
  background: transparent;
  border-radius: 0 0.12em 0.12em 0;
  cursor: pointer;
  -webkit-transition: box-shadow 0.4s ease;
  transition: box-shadow 0.4s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 10px;
}
.outer-menu .hamburger > div {
  position: relative;
  -webkit-box-flex: 0;
  flex: none;
  width: 100%;
  height: 3px;
  background: var(--green-branding);
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.outer-menu .hamburger > div:before,
.outer-menu .hamburger > div:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -8px;
  right: 0;
  width: 100%;
  height: 3px;
  background: inherit;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.outer-menu .hamburger > div:after {
  top: 8px;
}
.outer-menu .menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  visibility: hidden;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  outline: 1px solid transparent;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.outer-menu .menu > div {
  width: 200vw;
  height: 200vw;
  color: #fefefe;
  background: var(--white);
  border-radius: 50%;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-box-flex: 0;
  flex: none;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.outer-menu .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  -webkit-transition: opacity 0.4s ease;
  transition: opacity 0.4s ease;
  overflow-y: auto;
  -webkit-box-flex: 0;
  flex: none;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.outer-menu .menu > div > div > ul {
  list-style: none;
  padding: 0 1em;
  margin: 0;
  display: block;
  max-height: 100vh;
}
.outer-menu .menu > div > div > ul > li {
  padding: 0;
  margin: 1em;
  font-size: 24px;
  display: block;
}
.outer-menu .menu > div > div > ul > li > a {
  cursor: pointer;
  text-decoration: none;
}
.outer-menu .menu > div > div > ul > li > a:hover {
  color: var(--green-branding-dark);
}
.outer-menu .menu > div > div > ul > li > a:hover:after {
  width: 100%;
}
.outer-menu .menu > div > div > ul > li > a:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: -0.15em;
  right: 0;
  width: 0;
  height: 2px;
  background: #e5e5e5;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
}
</style>
