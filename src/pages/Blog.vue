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
      <div class="show-more-div">
        <Pager
          :info="$page.blogs.pageInfo"
          class="font-gilroy-medium font-18"
          linkClass="pager-style"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  pageConfig: pages (path: "/data/blog-page/"){
    page_name
    header_image
    description_title
  },
	blogs: allBlogPost (perPage: 4, page: $page) @paginate {
    pageInfo {
      totalPages,
      currentPage,
      
    }
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
import { Pager } from 'gridsome'

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
    log: function () {
      console.log(this.$page.blogs.pageInfo)
    },
    showMore: function () {},
  },
  components: {
    PageHeader,
    BlogCard,
    Pager,
  },
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.blog-cards-container {
  display: flex;
  flex-wrap: wrap;
  padding: 1.75%;
  flex-direction: row;
  max-width: 70%;
}

.show-more-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 30px 0;
}

.pager-style {
  color: var(--gray-3);
  margin: 10px;
  padding: 3px 8px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}

.pager-style:hover {
  box-shadow: 1px 5px 8px 2px var(--gray-1);
  background-color: transparent;
  text-decoration: none;
}

.active {
  color: var(--blue-branding);
}

.show-more-btn {
  background-color: transparent;
  box-shadow: 0 3px 3px 1px var(--gray-2);
  border: none;
  color: var(--blue-3);
  transition: all 0.2s ease-in-out;
}

.show-more-btn:hover {
  transform: scale(1.02);
  box-shadow: 1px 5px 8px 2px var(--gray-2);
  cursor: pointer;
}

@media only screen and (max-width: 1000px) {
  .main-container {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }

  .blog-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
}
</style>
