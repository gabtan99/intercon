import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/css/index.css"

export default function(Vue, { head }) {
  Vue.use(BootstrapVue);
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
