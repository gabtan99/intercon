<template>
  <Layout>
    <PageHeader
      :page_name="$page.pageConfig.page_name"
      :image="$page.pageConfig.header_image"
    />

    <div class="main-container">
      <div class="blog-cards-container">
        <BlogCard
          v-for="item in $page.blogs.edges"
          :key="item.node.id"
          :blog="item.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Blog {
  pageConfig: pages (path: "/data/blog-page/"){
    page_name
    header_image
    description_title
  },
	blogs: allBlogPost {
    edges {
      node {
        id
        path
        title
        excerpt
        author
        date
        header_image
        author_avatar
        timeToRead
      }
    }
  }
}
</page-query>

<script>
import PageHeader from '@/components/PageHeader'
import BlogCard from '@/components/BlogCard'

export default {
  metaInfo: {
    title: 'Blog | Intercon Regenerative Center',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. ',
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Blog | Intercon Regenerative Center',
      },
      {
        key: 'og:site_name',
        name: 'og:site_name',
        content: 'Intercon Regenerative Center',
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: require('@/assets/img/target-header.png'),
      },
      {
        name: 'og:description',
        name: 'og:description',
        content:
          'At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. ',
      },
    ],
  },
  methods: {
    log: function (e) {
      console.log(e)
    },
  },
  components: {
    PageHeader,
    BlogCard,
  },
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  padding: 40px 30px;
  width: 100%;
}

.blog-cards-container {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
}

@media (min-width: 560px) {
  .journal-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .journal-post {
    padding: 5rem 0;
  }
}
</style>
