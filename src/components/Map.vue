<template>
  <vl-map
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
        <img src="@/assets/img/map-marker.png" height="50px"/>
      </template>
    </vl-overlay>
  </vl-map>
</template>

<script>
export default {
  data() {
    return {
      zoom: 19,
      center:  [120.9954475, 14.637538],
      rotation: 0,
      overlayCoordinate: [120.995388, 14.63757],
      overlayPositioning: "bottom-center"
    };
  }
};
</script>