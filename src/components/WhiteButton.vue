<template>
  <b-button
    class="px-5 py-3 white-button"
    :class="styles ? styles : 'font-16 font-gilroy-bold'"
    pill
    @click="onClick"
  >
    <slot />
  </b-button>
</template>

<script>
export default {
  props: {
    onClick: Function,
    styles: String,
  },
};
</script>

<style scoped>
.white-button {
  background-color: var(--white);
  border: none;
  box-shadow: 0 3px 6px var(--button-shadow);
  color: var(--black-text);
  transition: all ease-in 0.15s;
}

.white-button:hover {
  transform: translateY(-0.3rem);
  background-color: var(--white);
}

.white-button:active,
.white-button:focus {
  background-color: var(--white) !important;
}
</style>
