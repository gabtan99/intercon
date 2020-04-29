<template>
  <div>
    <div id="testmap"></div>
    <img id="pointer" src="@/assets/img/map-marker.png" height="50px" />
  </div>
  <!-- <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    data-projection="EPSG:4326"
    style="height: 300px"
  >
    <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>

    <vl-overlay id="overlay" :position="overlayCoordinate" :positioning="overlayPositioning">
      <template>
        <img src="@/assets/img/map-marker.png" height="50px" />
      </template>
    </vl-overlay>
  </vl-map>-->
</template>

<script>
import "ol/ol.css";
function initMap() {
  const Map = require("ol/Map").default;
  const View = require("ol/View").default;
  const TileLayer = require("ol/layer/Tile").default;
  const OSM = require("ol/source/OSM").default;
  const Overlay = require("ol/Overlay").default;

  let map = new Map({
    target: "testmap",
    layers: [new TileLayer({ source: new OSM() })],
    view: new View({
      projection: "EPSG:4326",
      center: [120.9954475, 14.637538],
      zoom: 19
    })
  });

  var popup = new Overlay({
    element: document.getElementById("pointer"),
    positioning: "bottom-center"
  });
  popup.setPosition([120.995388, 14.63757]);
  map.addOverlay(popup);
}

export default {
  // data() {
  // return {
  //   zoom: 19,
  //   center: [120.9954475, 14.637538],
  //   rotation: 0,
  //   overlayCoordinate: [120.995388, 14.63757],
  //   overlayPositioning: "bottom-center"
  // };
  // },
  mounted() {
    this.$nextTick(function() {
      initMap();
    });
  }
};
</script>

<style scoped>
#testmap {
  height: 300px;
}
</style>