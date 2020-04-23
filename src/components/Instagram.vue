<template>
  <div class="main">
    <div class="text-container">
      <h1 class="header font-gilroy-bold font-42">Join Our <br />Community</h1>
      <p class="subheader font-avenir-book font-21">@interconregenerative</p>
    </div>

    <div class="img-container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
};
</script>

<style scoped>
.main {
  background-image: linear-gradient(
    to bottom,
    var(--white),
    var(--lightblue-gradient)
  );
  display: flex;
  flex-direction: row;
  padding: 30px 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10%;
}

.img-container {
  width: 40%;
  height: auto;
  padding: 0px 30px;
}

.header {
  color: var(--blue-branding-dark);
}

.subheader {
  color: var(--blue-branding-dark);
}

.thumbnail {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
}
</style>
