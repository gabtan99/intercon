<template>
  <div>
    <b-card tag="article" class="blog-card" v-on:click="goToBlog(blog.path)">
      <b-card-img alt="image" :src="blog.header_image" class="card-img" />
      <div class="text-wrapper">
        <h4
          v-b-popover.hover.top="{
            title: this.blog.title,
            customClass: 'font-avenir-medium font-16',
          }"
          class="font-gilroy-bold font-18 ellipsis-title "
        >
          {{ blog.title }}
        </h4>
        <b-card-text
          class="font-avenir-light font-16 ellipsis "
          style="margin: 10px 0px;"
        >
          {{ blog.excerpt }}
        </b-card-text>

        <div class="status-div">
          <div class="author-div">
            <span class="author-text">by {{ blog.author }}</span>
          </div>
          <div class="date-div">
            {{ blog.date | moment("LL") }}
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import moment from "vue-moment";
export default {
  props: ["blog"],
  methods: {
    goToBlog: function(path) {
      this.$router.push(path);
    },
    log: function() {
      console.log(this.blog.path);
    },
  },
};
</script>
<style scoped>
.blog-card {
  position: relative;
  width: 380px;
  height: 380px;
  border: none;
  padding: 0px;
  margin: 20px 0;
  box-shadow: 0 3px 3px 1px var(--gray-1);
  transition: all 0.2s ease-in-out;
}

.blog-card:hover {
  transform: scale(1.02);
  box-shadow: 1px 5px 8px 2px var(--gray-2);
  cursor: pointer;
}

.card-img {
  max-width: 380px;
  height: 200px;
  margin-bottom: 15px;
  object-fit: cover;
}

.card-body {
  padding: 0;
}

.text-wrapper {
  padding: 0px 20px;
}

.ellipsis-title {
  color: var(--blue-branding);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ellipsis {
  margin: 15px 0px 15px;
  color: var(--blue-branding);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.status-div {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  font-size: 1.2rem;
  left: 0;
  bottom: 0;
}

.author-div {
  display: flex;
  flex-direction: row;
}

.author-text {
  padding: 2px;
}

@media only screen and (max-width: 1000px) {
  .blog-card {
    position: relative;
    max-height: 380px;
    max-width: 380px;
    margin: 20px 0px;
    border: none;
    padding: 0px;
    box-shadow: 0 3px 3px 1px var(--gray-1);
    transition: all 0.2s ease-in-out;
  }

  .author-text {
    padding: 3px;
    margin: 0px 0px 0px 8px;
  }
}
</style>
