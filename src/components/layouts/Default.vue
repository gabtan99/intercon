<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot/>
    <NewsletterModal />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import NewsletterModal from "@/components/NewsletterModal"

export default {
  components: {
    Header,
    Footer,
    NewsletterModal
  }
}
</script>


<style>

</style>
