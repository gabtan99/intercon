<template>
  <b-button
    class="px-5 py-3 green-button"
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
.green-button {
  background-color: var(--green-branding);
  border: none;
  box-shadow: 0px 3px 6px var(--button-shadow);
  color: var(--white-text);
  transition: all ease-in 0.15s;
}
.green-button:hover {
  transform: translateY(-0.3rem);
  background-color: var(--green-branding);
}
.green-button:active,
.green-button:focus {
  background-color: var(--green-branding) !important;
}
</style>
