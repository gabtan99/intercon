<template>
  <div class="main">
    <div class="text-container">
      <h1 class="header font-gilroy-bold font-48">Join Our <br />Community</h1>

      <a
        class="subheader font-avenir-book font-24"
        href="https://www.instagram.com/interconregenerative/"
        >@interconregenerative</a
      >
    </div>

    <div class="img-container">
      <div class="left thumbnail">
        <a :href="recentImages[0].url">
          <img :src="recentImages[0].thumbnail" />
        </a>
      </div>

      <div class="top thumbnail">
        <a :href="recentImages[1].url">
          <img :src="recentImages[1].thumbnail" />
        </a>
      </div>

      <div class="right thumbnail">
        <a :href="recentImages[2].url">
          <img :src="recentImages[2].thumbnail" />
        </a>
      </div>
      <div class="bottom thumbnail">
        <a :href="recentImages[3].url">
          <img :src="recentImages[3].thumbnail" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
  computed: {
    recentImages: function() {
      const recent = this.images.slice(Math.max(this.images.length - 4, 0));
      return recent.map((item) => {
        return {
          url: `https://www.instagram.com/p/${item.node.shortcode}/`,
          thumbnail: item.node.thumbnail_src,
        };
      });
    },
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.left {
  grid-row: 4 / span 6;
  grid-column: 1 / span 6;
}

.top {
  grid-row: 1 / span 6;
  grid-column: 6 / span 6;
  z-index: 3;
}

.right {
  grid-row: 6 / span 6;
  grid-column: 10 / span 6;
  z-index: 2;
}

.bottom {
  grid-row: 8 / span 6;
  grid-column: 5 / span 6;
  z-index: 1;
}

.main {
  background-image: linear-gradient(
    to bottom,
    var(--white),
    var(--lightblue-gradient)
  );
  display: flex;
  flex-direction: row;
  padding: 2rem;
  padding-top: 5rem;
  padding-bottom: 10rem;
  flex-wrap: wrap;
  justify-content: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10%;
  padding: 20px 0px;
}

.header {
  color: var(--blue-branding-dark);
}

.subheader {
  color: var(--blue-branding-dark);
  transition: all ease-in 0.15s;
  text-decoration: none;
}

.subheader:hover {
  transform: translateY(-0.3rem);
  color: var(--blue-branding-light);
}

.thumbnail {
  position: relative;
  overflow: hidden;
  box-shadow: 0px 30px 30px #00000029;
  transition: all ease-in 0.15s;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.img-container {
  display: grid;
  grid-template-columns: repeat(15, 0.2fr);
  grid-template-rows: repeat(13, 0.2fr);
}

img {
  object-fit: cover;
  width: 200px;
  height: 200px;
}
@media only screen and (max-width: 768px) {
  .img-container {
    padding-top: 30px;
  }

  img {
    width: 130px;
    height: 130px;
  }
}
</style>
