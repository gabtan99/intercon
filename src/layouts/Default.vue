<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot />
    <NewsletterModal />
    <Footer 
      :address="$static.contactDetails.address"
      :phone_number="$static.contactDetails.phone_number"
      :mobile_number="$static.contactDetails.mobile_number"
    />
  </div>
</template>

<static-query>
query Posts {
  contactDetails: pages (path: "/data/contact-details/"){
    address
    phone_number
    mobile_number
  },
}
</static-query>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterModal from '@/components/NewsletterModal'
import { setFirstVisit } from '@/util/localStorage'

export default {
  components: {
    Header,
    Footer,
    NewsletterModal,
  },
  mounted() {
    setFirstVisit()
  },
}
</script>

<style></style>
