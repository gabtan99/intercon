<template>
  <Layout class="gray-bg">
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
    <div class="show-more-div">
      <Pager
        :info="$page.blogs.pageInfo"
        class="font-gilroy-medium font-18"
        linkClass="pager-style"
      />
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
	blogs: allBlogPost (perPage: 6, page: $page) @paginate {
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
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import { Pager } from "gridsome";

export default {
  metaInfo: {
    title: "Blog | Intercon Regenerative Center",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. ",
      },
      {
        key: "og:title",
        name: "og:title",
        content: "Blog | Intercon Regenerative Center",
      },
      {
        key: "og:site_name",
        name: "og:site_name",
        content: "Intercon Regenerative Center",
      },
      {
        key: "og:image",
        name: "og:image",
        content: require("@/assets/img/target-header.png"),
      },
      {
        name: "og:description",
        name: "og:description",
        content:
          "At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. ",
      },
    ],
  },
  methods: {
    log: function() {
      console.log(this.$page.blogs.pageInfo);
    },
  },
  components: {
    PageHeader,
    BlogCard,
    Pager,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.blog-cards-container {
  display: grid;
  justify-content: space-evenly;
  grid-column-gap: 20px;
  grid-template-columns: auto auto;
}

.show-more-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
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

@media only screen and (min-width: 1880px) {
  .blog-cards-container {
    display: grid;
    justify-content: space-evenly;
    grid-column-gap: 20px;
    grid-template-columns: auto auto auto;
  }
}
</style>
