<template>
  <div class="main">
    <div class="col-lg-6">
      <h1 class="hero-title font-gilroy-bold font-42">
        {{ heroConfig.hero_title }}
      </h1>

      <h1 class="hero-subtitle font-avenir-light font-24">
        {{ heroConfig.hero_subtitle }}
      </h1>

      <div class="hero-buttons">
        <GreenButton :onClick="learnMore">
          Learn More
        </GreenButton>

        <WhiteButton :onClick="watchVideo">
          Watch
          <font-awesome :icon="['fab', 'youtube']" class="social" />
        </WhiteButton>
      </div>
    </div>

    <div class="col-lg-6 image">
      <b-img :src="heroConfig.hero_image" fluid />
    </div>

    <youtube-modal
      :showModal="showModal"
      :hideModal="closeVideo"
      :youtubeLink="socials.youtube_channel_url"
      :youtubeHandle="heroConfig.youtube_handle"
      :videoLink="heroConfig.youtube_link"
    />
  </div>
</template>

<script>
import GreenButton from "@/components/GreenButton";
import WhiteButton from "@/components/WhiteButton";
import Waves from "@/components/Waves";
import YoutubeModal from "@/components/YoutubeModal";

export default {
  props: ["heroConfig", "socials"],
  components: {
    GreenButton,
    WhiteButton,
    Waves,
    YoutubeModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    watchVideo() {
      this.showModal = true;
    },
    closeVideo() {
      this.showModal = false;
    },
    learnMore() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10% 1rem;
}

.hero-title {
  color: var(--blue-branding-dark);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.hero-subtitle {
  margin-bottom: 4rem;
}

.hero-image {
  margin-top: -4rem;
}

.hero-buttons {
  margin-bottom: 1rem;
}

.white-button {
  margin-left: 2rem;
  /* margin-top: 2rem; */
}

@media only screen and (max-width: 1000px) {
  .image {
    display: none;
  }
}
</style>
