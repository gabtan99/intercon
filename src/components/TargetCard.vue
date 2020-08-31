<template>
  <div
    v-on:click="show(target.target_name)"
    class="card"
    :style="{
      '--background-color': target.background_color,
    }"
  >
    {{ sectionTargetModal() }}
    <img class="icon-style" :src="target.target_icon" alt="icon" />

    <div class="card-content">
      <span class="target-name font-21 font-gilroy-bold">
        {{ target.target_name }}
      </span>

      <p class="ellipsis font-avenir-light font-16">
        {{ target.target_description }}
      </p>
    </div>

    <b-modal
      centered
      hide-header
      hide-footer
      size="lg"
      id="modal-scrollable"
      scrollable
      @hide="close"
      v-model="showModal"
    >
      <font-awesome class="close-icon" :icon="'times'" v-on:click="close" />
      <TargetModalContent
        :targetContent="selectedTargetContent"
        :targetServices="selectedTargetServices"
      />
    </b-modal>
  </div>
</template>

<script>
import TargetModalContent from "@/components/TargetModalContent";

export default {
  data() {
    return {
      showModal: false,
      selected: this.selectedTarget,
      selectedTargetContent: {},
      selectedTargetServices: [],
    };
  },
  props: ["target", "selectedTarget"],
  components: {
    TargetModalContent,
  },
  methods: {
    show: function(target) {
      this.selectedTargetContent = this.target;
      this.selectedTargetServices = this.target.target_services;
      this.showModal = true;
    },
    close: function() {
      this.showModal = false;
      this.$router.push("/targets");
    },
    sectionTargetModal: function() {
      if (this.selectedTarget) {
        if (this.selectedTarget === this.target.target_name)
          this.show(this.selectedTarget);
      }
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 3px;
  background-color: var(--background-color);
  padding: 15px;
  margin: 8px;
  height: 150px;
  width: 420px;
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 1px 5px 8px 2px var(--gray-2);
  cursor: pointer;
}

.target-name {
  color: var(--blue-branding);
}

.card-content {
  margin-left: 15px;
}

.ellipsis {
  margin: 3px 0px 3px;
  color: var(--blue-branding);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.icon-style {
  width: 64px;
  height: 64px;
  border-radius: 500px;
}

.close-icon {
  position: absolute;
  right: 20px;
  margin: 18px;
  font-size: 13pt;
  color: var(--gray-2);
  cursor: pointer;
}

@media only screen and (max-width: 1000px) {
  .card {
    position: relative;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    width: 400px;
    height: 180px;
    margin: 8px;
  }

  .close-icon {
    position: absolute;
    right: 18px;
    margin: 18px;
    font-size: 18pt;
    color: var(--gray-2);
    cursor: pointer;
  }
}
</style>
