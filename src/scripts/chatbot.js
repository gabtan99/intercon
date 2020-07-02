if (process.isClient) {
  window.$crisp = [];
  window.$crisp.push(["config", "container:index", [1000]]);
  window.CRISP_WEBSITE_ID = "8e584714-54f3-4459-a0de-0f29d40cf2f0";
  (function() {
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
}
