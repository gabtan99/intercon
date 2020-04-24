<template>
  <div class="main">
    <div class="text-container">
      <h1 class="header font-gilroy-bold font-42">Join Our <br />Community</h1>
      <<<<<<< HEAD
      <a
        class="subheader font-avenir-book font-21"
        href="https://www.instagram.com/interconregenerative/"
        >@interconregenerative</a
      >
      =======
      <p class="subheader font-avenir-book font-21">@interconregenerative</p>
      >>>>>>> 44a025a9772d28150003f5f45c916d55c550e4ce
    </div>

    <div class="img-container">
      <b-row>
        <div class="thumbnail">
          <img src="../assets/img/colon-heart.png" />
        </div>
        <div class="thumbnail">
          <img src="../assets/img/hyperbaric.png" />
        </div>
      </b-row>
      <b-row>
        <div class="thumbnail">
          <img src="../assets/img/colon-hydrotherapy.png" />
        </div>
        <div class="thumbnail">
          <img src="../assets/img/red-light.png" />
        </div>
      </b-row>
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
  padding: 80px 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10%;
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
    width: 140px;
    height: 140px;
  }
}
</style>
