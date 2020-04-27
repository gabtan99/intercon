<template>
  <Layout>
    <PageHeader :page_name="page_name" :image="image" />

    <div class="main">
      
    
      <b-row class="founder-section">
        <div class="col-lg-6">
          
        </div>

        <div class="col-lg-6">
          <h1 class="font-gilroy-bold font-36">
            The Founder
          </h1>

          <h1 class="font-avenir-light font-21">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </h1>
        </div>
      </b-row>

      <b-row class="mission-vision-section">
        <div class="col-lg-6">
          <h1 class="font-gilroy-bold font-36">
            Our Goal
          </h1>

          <h1 class="font-avenir-light font-21">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </h1>
        </div>
        
        <div class="col-lg-6">
          <h1 class="font-gilroy-bold font-36">
            Our Mission
          </h1>

          <h1 class="font-avenir-light font-21">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </h1>
        </div>
      </b-row>

      <b-row class="history-section">

      </b-row>
    </div>
  </Layout>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import NewsletterModal from "@/components/NewsletterModal"

export default {
  data(){
    return {
      page_name: 'About Us',
      image: 'about-header.png',
    }
  },
  components: {
    PageHeader,
    NewsletterModal,
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 80px 15px;
  justify-content: center;
  padding-bottom: 40px;
}

.mission-vision-section {
  width: 90%;
}
</style>
