<template>
  <Layout>
    <div class="container main-container">
      <div class="journal-header">
        <img class="header-images" :src="$page.post.header_image.src" />
        <h4 class="date-style font-gilroy-light font-16">
          {{ $page.post.date | moment('LL') }}
        </h4>
        <h2 v-html="$page.post.title" class="journal-title font-gilroy-bold" />
        <div class="author-div font-gilroy-regular">
          by
          <b-avatar
            :src="$page.post.author_avatar.src"
            size="3rem"
            class="avatar-style"
          ></b-avatar>
          {{ $page.post.author }}
        </div>
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
    author_avatar
    author
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    content_image
  }
}
</page-query>

<script>
import JournalContent from '@/components/JournalContent'
import moment from 'vue-moment'
export default {
  methods: {
    log: function () {
      console.log(this.$page.post)
    },
  },
  components: {
    JournalContent,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>

<style scoped>
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
  padding: 2rem 0 3rem 0;
}

.header-images {
  width: 900px;
  height: 400px;
  object-fit: cover;
}

.journal-title {
  font-size: 3.4rem;
  margin: 0 0 2rem 0;
}

.date-style {
  margin: 2rem 0 0 0;
}

.breadcrumb {
  margin: 0;
  background: transparent;
  justify-content: center;
  padding: 1rem 0;
  font-size: 1.4rem;
}

.avatar-style {
  margin: 0px 5px;
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
</style>
