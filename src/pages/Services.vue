<template>
  <Layout>
    <PageHeader
      :page_name="$page.pageConfig.page_name"
      :image="$page.pageConfig.header_image"
    />
    <ServicesSection :services="$page.services.edges"/>
    <NewsletterModal currPage="SERVICES"/>
  </Layout>
</template>

<page-query>
query Service {
  pageConfig: pages (path: "/data/services-page/"){
    page_name
    header_image
  },
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
  import PageHeader from '@/components/PageHeader';

  export default {
    metaInfo: {
      title: 'Services | Intercon Regenerative Center',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Services available for your target needs'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Services | Intercon Regenerative Center',
        },
        {
          key: 'og:site_name',
          name: 'og:site_name',
          content: 'Intercon Regenerative Center',
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: require('@/assets/img/services-header.png'),
        },
        {
          name: 'og:description',
          name: 'og:description',
          content: 'Here are the variety of services you can avail at Intercon Regenerative Center',
        },
      ],
    },
    components: {
      ServicesSection,
      NewsletterModal,
      PageHeader
    },
    data() {
      return {
        page_name: 'Services',
        image: 'services-header.png',
      }
    }
  }
</script>

<style scoped>

</style>
