<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterModal from "@/components/NewsletterModal";
import { setFirstVisit } from "@/util/localStorage";

export default {
  components: {
    Header,
    Footer,
    NewsletterModal
  },
  mounted() {
    setFirstVisit();
  }
};
</script>


<style>
</style>
