<template>
  <div class="main">
    <!-- <div
      class="fb-share-button margin"
      data-href="https://www.your-domain.com/your-page.html"
      data-layout="button"
    >
      <a target="_blank" :href="this.url" class="fb-xfbml-parse-ignore"
        >Share</a
      >
    </div>
    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      class="twitter-share-button margin"
      data-show-count="false"
      >Tweet</a
    > -->
    <ClientOnly>
      <Facebook :url="this.url" scale="2" class="icon" />
      <Twitter :url="this.url" scale="2" class="icon" />
      <Telegram :url="this.url" scale="2" class="icon" />
      <Email :url="this.url" scale="2" class="icon" />
    </ClientOnly>
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
    //   let fbScript = document.createElement("script");
    //   fbScript.setAttribute("src", "https://platform.twitter.com/widgets.js");
    //   fbScript.setAttribute("nonce", "DPkpUGcq");
    //   fbScript.setAttribute("crossorigin", "anonymous");
    //   fbScript.setAttribute("defer", true);
    //   fbScript.setAttribute("async", true);

    //   let twitterScript = document.createElement("script");
    //   twitterScript.setAttribute(
    //     "src",
    //     "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=120542477974467&autoLogAppEvents=1"
    //   );
    //   document.head.appendChild(fbScript);
    //   document.head.appendChild(twitterScript);

    //   if (process.isClient) {
    //     this.url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    //       window.location.href
    //     )}&amp;src=sdkpreparse`;
    //     // "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse";
    //   }

    if (process.isClient) {
      this.url = window.location.href;
    }
  },
  components: {
    Facebook: () =>
      import("vue-socialmedia-share")
        .then((m) => m.Facebook)
        .catch(), // Lazy load it in
    Twitter: () =>
      import("vue-socialmedia-share")
        .then((m) => m.Twitter)
        .catch(), // Lazy load it in
    Telegram: () =>
      import("vue-socialmedia-share")
        .then((m) => m.Telegram)
        .catch(), // Lazy load it in
    Email: () =>
      import("vue-socialmedia-share")
        .then((m) => m.Email)
        .catch(), // Lazy load it in
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon {
  margin: 0px 10px;
  cursor: pointer;
}
</style>
