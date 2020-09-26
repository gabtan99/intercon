<template>
  <Layout>
    <div class="container main-container">
      <div class="journal-header">
        <img class="header-images" :src="$page.post.header_image" />
        <h4 class="date-style font-gilroy-light font-16">
          {{ $page.post.date | moment("LL") }}
        </h4>
        <h2 v-html="$page.post.title" class="journal-title font-gilroy-bold" />
        <div class="author-div font-gilroy-regular font-16">
          by
          {{ $page.post.author }}
        </div>
      </div>

      <div class="ssbuttons">
        <SocialShareButtons />
      </div>
      <JournalContent :content="$page.post.content" :title="$page.post.title" />
    </div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    header_image
    title
    author
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    content_image
  }
}
</page-query>

<script>
import JournalContent from "@/components/JournalContent";
import SocialShareButtons from "@/components/SocialShareButtons";

import moment from "vue-moment";
export default {
  metaInfo() {
    return {
      title: `${
        this.$page.post.title
      } | Services | Intercon Regenerative Center`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `Learn more about ${this.$page.post.title}`,
        },
        {
          key: "og:title",
          name: "og:title",
          content: `${this.$page.post.title} | Intercon Regenerative Center`,
        },
        {
          key: "og:site_name",
          name: "og:site_name",
          content: "Intercon Regenerative Center",
        },
        {
          key: "og:image",
          name: "og:image",
          content: `${this.$page.post.header_image.src}`,
        },
        {
          name: "og:description",
          name: "og:description",
          content: `A comprehensive read about ${this.$page.post.title}`,
        },
      ],
    };
  },
  methods: {
    log: function() {
      console.log(this.$page.post);
    },
  },
  components: {
    JournalContent,
    SocialShareButtons,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style scoped>
.ssbuttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.journal-header {
  display: block;
  width: 100%;
  text-align: center;
  padding: 2rem 0 1.5rem 0;
}

.header-images {
  width: 900px;
  height: 400px;
  object-fit: cover;
}

.journal-title {
  font-size: 3.4rem;
  margin: 1rem 0 1.5rem 0;
}

.date-style {
  margin: 2rem 0 0 0;
}

.avatar-style {
  margin: 0px 5px;
  object-fit: cover;
}

.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}

@media only screen and (max-width: 1000px) {
  .header-images {
    max-width: 100%;
    max-height: 50%;
    object-fit: cover;
  }
}
</style>
