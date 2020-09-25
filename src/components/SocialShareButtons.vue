<template>
  <div>
    <div
      class="fb-share-button"
      data-href="https://www.your-domain.com/your-page.html"
      data-layout="button_count"
    >
      <a target="_blank" :href="this.url" class="fb-xfbml-parse-ignore"
        >Share</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
    };
  },

  mounted() {
    if (process.isClient) {
      this.url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}&amp;src=sdkpreparse`;
      // "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse";
    }
  },
};
</script>
