import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/css/index.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faBars,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(
  faFacebookSquare,
  faInstagram,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faBars,
  faPaperPlane,
);

export default function(Vue, { head }) {
  Vue.use(BootstrapVue);
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : "",
  };
}
