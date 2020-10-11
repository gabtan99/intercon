<template>
  <b-modal
    centered
    hide-header
    hide-footer
    size="lg"
    v-model="showModal"
    no-close-on-backdrop
  >
    <b-row>
      <font-awesome class="close-icon" :icon="'times'" @click="hideModal" />
    </b-row>
    <div class="modal-style">
      <a class="font-gilroy-light font-18 youtube-link" :href="youtubeLink">
        <font-awesome :icon="['fab', 'youtube']" class="youtube-icon" />
        {{ youtubeHandle }}
      </a>
    </div>
    <div>
      <youtube
        :fitParent="true"
        :resize="true"
        :player-vars="{
          autoplay: 1,
        }"
        :video-id="video_id"
      />
    </div>
  </b-modal>
</template>

<script>
import GreenButton from "@/components/GreenButton";
import WhiteButton from "@/components/WhiteButton";
import Waves from "@/components/Waves";
import YoutubeModal from "@/components/YoutubeModal";

export default {
  data() {
    return {
      video_id: "",
    };
  },
  props: [
    "showModal",
    "youtubeLink",
    "youtubeHandle",
    "hideModal",
    "videoLink",
  ],
  mounted() {
    this.video_id = this.videoLink.split("v=")[1];
    console.log(this.video_id);
  },
};
</script>

<style scoped>
.title {
  text-align: center;
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
  top: 20px;
  right: 20px;
  font-size: 13pt;
  color: var(--gray-2);
  cursor: pointer;
}

@media only screen and (max-width: 1000px) {
  .title {
    text-align: center;
    font-size: 2.4rem;
    padding: 0px 15px;
  }

  .close-icon {
    top: 20px;
    right: 20px;
  }
}
</style>
