<template>
  <div
    @click="showModal = !showModal"
    class="card"
    :style="{
      '--card-height': target.item.height,
      '--background-color': target.item.background,
      '--margin-style': target.item.margin ? 0 + 'px' : 15 + 'px',
    }"
  >
    <font-awesome
      class="icon-style"
      :icon="target.item.icon"
      :style="{ '--icon-color': target.item.color }"
    />
    <span class="target-name font-16 font-gilroy-bold">
      {{ target.item.name }}
    </span>

    <b-modal
      id="modal-center"
      centered
      hide-header
      hide-footer
      size="lg"
      v-model="showModal"
    >
      <font-awesome
        class="close-icon"
        :icon="'times'"
        @click="showModal = false"
      />

      <TargetModalContent
        :targetName="target.item.name"
        :targetIcon="target.item.icon"
        :color="target.item.color"
      />
    </b-modal>
  </div>
</template>

<script>
import TargetModalContent from '@/components/TargetModalContent'

export default {
  data() {
    return {
      showModal: false,
      selectedTarget: '',
    }
  },
  props: ['target'],
  components: {
    TargetModalContent,
  },
}
</script>

<style scoped>
.card {
  position: relative;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  padding: 20px;
  margin-top: var(--margin-style);
  background-color: var(--background-color);
  height: var(--card-height);
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transition-delay: 0.2s;
  transform: scale(1.03);
  cursor: pointer;
}

.target-name {
  position: absolute;
  padding: 15px;
  right: 0;
  bottom: 0;
  color: var(--blue-branding);
}

.icon-style {
  font-size: 15pt;
  color: var(--icon-color);
}

.close-icon {
  position: absolute;
  right: 20px;
  margin: 18px;
  font-size: 13pt;
  color: var(--gray-2);
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  .card {
    position: relative;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    width: 300px;
    height: 180px;
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
