<template>
  <div class="main">
    <div class="col-lg-6">
      <h1 class="hero-title font-gilroy-bold font-42">
        The Future of
        <br />
        Personalized Healthcare
      </h1>

      <h1 class="hero-subtitle font-avenir-light font-24">
        Enhance and optimize your body’s self
        <br />
        healing mechanisms in the most safest and
        <br />
        natural way possible.
      </h1>

      <div class="hero-buttons">
        <GreenButton :onClick="learnMore">
          Learn More
        </GreenButton>

        <WhiteButton :onClick="watchVideo">
          Watch Video
        </WhiteButton>
      </div>
    </div>

    <div class="col-lg-6 image">
      <b-img :src="require('../assets/img/hero-img.png')" fluid />
    </div>

    <b-modal centered hide-header hide-footer size="lg" v-model="showModal">
      <font-awesome
        class="close-icon"
        :icon="'times'"
        @click="showModal = false"
      />
      <div class="modal-style">
        <h1 class="font-avenir-light">
          Subscribe to our channel and be part of our growing community!
        </h1>
        <a
          class="font-gilroy-light font-18 youtube-link"
          :href="settings.youtube_link"
        >
          <font-awesome class="youtube-icon" :icon="['fab', 'youtube']" />
          {{ settings.youtube_handle }}
        </a>
      </div>
      <div>
        <youtube
          :fitParent="true"
          :resize="true"
          :resizeDelay="0"
          :player-vars="{
            autoplay: 1,
          }"
          video-id="r1ZLSbQ0r0I"
        />
      </div>
    </b-modal>
  </div>
</template>

<script>
import GreenButton from '@/components/GreenButton'
import WhiteButton from '@/components/WhiteButton'
import Waves from '@/components/Waves'

export default {
  components: {
    GreenButton,
    WhiteButton,
    Waves,
  },
  data() {
    return {
      settings: require('../../data/theme.json'),
      showModal: false,
    }
  },
  methods: {
    watchVideo() {
      this.showModal = true
    },
    learnMore() {
      this.$router.push('/about')
    },
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 80px 15px;
  justify-content: center;
  padding-bottom: 40px;
}

.hero-title {
  color: var(--blue-branding-dark);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.hero-subtitle {
  margin-bottom: 4rem;
}

.hero-buttons {
  margin-bottom: 10rem;
}

.hero-image {
  margin-top: -4rem;
}

.white-button {
  margin-left: 2rem;
}

.modal-style {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0px 20px;
}

.youtube-icon {
  color: #ff0000;
  margin: 2px 5px;
}

.youtube-link {
  display: flex;
  text-decoration: none;
  color: inherit;
  padding: 5px 0px 0px;
}

.youtube-link:hover {
  color: var(--green-branding-light);
  text-decoration: underline;
}

.close-icon {
  position: absolute;
  right: 10px;
  margin: 10px;
  font-size: 13pt;
  color: var(--gray-2);
  cursor: pointer;
}

@media only screen and (max-width: 1000px) {
  .image {
    display: none;
  }

  .main {
    padding: 10px 10px;
    padding-top: 25px;
  }
  .white-button {
    margin: 0rem;
    margin-top: 10px;
  }
}
</style>
