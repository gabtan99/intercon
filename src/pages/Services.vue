<template>
  <Layout>
    <ServicesSection :services="$page.services.edges"/>
    <NewsletterModal currPage="SERVICES"/>
  </Layout>
</template>

<page-query>
query Service {
	services: allServices{
    edges {
      node {
        id
        title
        path
        preview_description
        header_image
        preview_benefits{
          benefit
        }
        preview_conditions{
          condition
        }
      }
    }
  }
}
</page-query>

<script>
  import ServicesSection from '@/components/ServicesSection';
  import NewsletterModal from '@/components/NewsletterModal';

  export default {
    components: {
      ServicesSection,
      NewsletterModal
    }
  }
</script>

<style scoped>

</style>
