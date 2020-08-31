<template>
  <div class="journal-container">
    <div class="journal-content content font-avenir-light" v-html="content" />
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    title: String,
  },
}
</script>

<style>
.journal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 0 50px 0;
}

.journal-content {
  width: 75%;
  text-justify: inter-word;
}

img[alt='image'] {
  display: block;
  margin: 0 auto;
  object-fit: cover;
  width: 600px;
  height: 350px;
}

.content p {
  line-height: 1.8;
  font-size: 1.8rem;
  margin: 2rem 0rem;
}

h2 {
  font-family: Gilroy-Bold;
  font-size: 2.4rem;
  margin: 2rem 0rem;
}
h3 {
  font-family: Gilroy-Bold;
  font-size: 1.5rem;
}
h4,
h5,
h6 {
  font-family: Gilroy-Bold;
  font-size: 1.15rem;
}

@media only screen and (max-width: 1000px) {
  .journal-content {
    width: 95%;
    margin: auto;
    text-justify: inter-word;
  }

  img[alt='image'] {
    width: 100%;
    max-height: 50%;
  }
}
</style>
