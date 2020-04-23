<template>
  
</template>

<script>
export default {
  props: [color, height],
  data() {

  },

  
}
</script>

<style scoped>
.card {
  position: relative;
  border: 1px solid #EEEEEE;
  border-radius: 3px;
  padding: 20px;
  margin: 5px 0px;
}

.card:hover {
  box-shadow: 1px 2px #D9D9D9;
  cursor: pointer;
}

.target-name {
  position: absolute;
  padding: 15px;
  right: 0;
  bottom: 0;
}

/* .item {
  background-color: {color};
  height: {height};
} */
</style>