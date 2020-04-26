import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import BootstrapVue from "bootstrap-vue";
import VueYoutube from "vue-youtube";

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
  faSmileWink,
  faDumbbell,
  faFootballBall,
  faLeaf,
  faMale,
  faFemale,
  faTimes,
  faStarOfLife,
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
  faSmileWink,
  faDumbbell,
  faFootballBall,
  faLeaf,
  faMale,
  faFemale,
  faTimes,
  faStarOfLife
);

export default function(Vue, { head }) {
  Vue.use(BootstrapVue);
  Vue.use(VueYoutube);
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);

  if (process.isClient) {
    head.script.push({
      src: require("./scripts/chatbot.js"),
    });
  }

  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : "",
  };
}
