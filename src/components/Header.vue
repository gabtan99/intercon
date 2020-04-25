<template>
  <b-navbar type="light" sticky :class="scrollingShadow">
    <b-container fluid="lg" class="desktop-nav">
      <b-navbar-brand>
        <img
          src="@/assets/img/irc-logo-brand.png"
          alt="Intercon Regenrative Center"
          class="navbar__brand-img"
        />
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
        <img
          src="@/assets/img/irc-logo-brand.png"
          alt="Intercon Regenrative Center"
          class="navbar__brand-img"
        />
      </b-navbar-brand>
      <b-container class="ml-auto font-21 d-flex justify-content-end">
        <div
          class="px-3 py-2 d-flex align-items-center justity-content-center mobile-nav__burger"
          v-b-toggle.mobile-nav-sidebar
        >
          <font-awesome icon="bars" class="mobile-nav__burger-icon" />
        </div>
      </b-container>
      <b-sidebar
        id="mobile-nav-sidebar"
        backdrop
        shadow
        body-class="d-flex flex-column justify-content-center align-items-center"
        no-header-close
      >
        <b-img
          src="/assets/img/irc-logo-brand.png"
          alt="Intercon Regenrative Center"
          fluid
          class="mb-5 w-75 mobile-nav__brand"
        ></b-img>
        <b-nav
          vertical
          class="d-flex justity-content-center align-items-center"
        >
          <b-nav-item
            to="/"
            exact
            class="mb-4 font-24 font-gilroy-bold header-nav-item "
            exact-active-class="header-nav-item--active"
          >
            Home
          </b-nav-item>
          <b-nav-item
            to="/services"
            class="my-4 font-24 font-gilroy-bold header-nav-item "
            active-class="header-nav-item--active"
          >
            Services
          </b-nav-item>
          <b-nav-item
            to="/targets"
            exact
            class="my-4 font-24 font-gilroy-bold header-nav-item "
            exact-active-class="header-nav-item--active"
          >
            Targets
          </b-nav-item>
          <b-nav-item
            to="/about"
            exact
            class="my-4 font-24 font-gilroy-bold header-nav-item "
            exact-active-class="header-nav-item--active"
          >
            About Us
          </b-nav-item>
          <b-button
            pill
            to="/contact"
            exact
            class="px-5 py-3 mt-4 green-button font-24 font-gilroy-bold"
            exact-active-class="green-button--active"
          >
            Contact Us
          </b-button>
        </b-nav>
      </b-sidebar>
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
      if (window.scrollY > 0) {
        this.scrollingShadow = "navbar--scroll-shadow";
      } else {
        this.scrollingShadow = "";
      }
    },
  },
  created() {
    let vue = this;
    // window.addEventListener("scroll", vue.handleScroll);
  },
  destroyed() {
    let vue = this;
    // window.removeEventListener("scroll", vue.handleScroll);
  },
};
</script>

<style scoped>
.navbar {
  background: var(--white);
}

.navbar--scroll-shadow {
  box-shadow: 0px 2px 3px var(--button-shadow);
  -webkit-box-shadow: 0px 2px 3px var(--button-shadow);
  -moz-box-shadow: 0px 2px 3px var(--button-shadow);
  -o-box-shadow: 0px 2px 3px var(--button-shadow);
  -ms-box-shadow: 0px 2px 3px var(--button-shadow);
}
.navbar__brand-img {
  height: 9rem;
  width: auto;
}

@media only screen and (max-width: 991px) {
  .desktop-nav.container-lg {
    display: none;
  }
}
@media only screen and (max-width: 576px) {
  .navbar__brand-img {
    height: 6rem;
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
.green-button--active,
.green-button--active:hover {
  text-decoration: underline;
}

@media only screen and (min-width: 992px) {
  .mobile-nav.container {
    display: none;
  }
}

.mobile-nav__burger {
  border: 1.5px solid var(--green-branding);
  color: var(--green-branding);
  border-radius: 0.7rem;
  cursor: pointer;
  transition: all ease-in 0.15s;
  -webkit-transition: all ease-in 0.15s;
  -moz-transition: all ease-in 0.15s;
  -o-transition: all ease-in 0.15s;
  -ms-transition: all ease-in 0.15s;
  box-shadow: 0px 2px 3px var(--button-shadow);
  -webkit-box-shadow: 0px 2px 3px var(--button-shadow);
  -moz-box-shadow: 0px 2px 3px var(--button-shadow);
  -o-box-shadow: 0px 2px 3px var(--button-shadow);
  -ms-box-shadow: 0px 2px 3px var(--button-shadow);
}
.mobile-nav__burger:hover {
  background: var(--green-branding);
  /* background-color: var(--green-branding); */
  border-color: var(--white);
  color: var(--white);
  transform: scale(1.2);
}
@media only screen and (max-width: 576px) {
  .mobile-nav__burger {
    font-size: 1.8rem;
    border-radius: 0.6rem;
  }
}
</style>
