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
  font-size: 1.6rem;
  margin: 2rem 0rem;
}
h2 {
  font-family: Gilroy-Bold;
  font-size: 2.4rem;
  margin: 2rem 0rem;
}
h3 {
  font-size: 1.5rem;
}
h4,
h5,
h6 {
  font-size: 1.15rem;
}
</style>
