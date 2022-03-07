<template>
    <!-- <div class="trends-top">
        <div class="img-small-top">Small Top</div>
        <div class="img-small-below">Small below</div>
        <div class="img-big-first">Big first</div>
        <div class="img-big-last">Big last</div>
        
        <div class="img-left-big">Big left</div>
        <div class="img-small-first">small first</div>
         <div class="img-small-first-2">small first</div>
        <div class="img-small-mid">small mid</div>
        <div class="img-small-mid-2">small mid 2</div>
        <div class="img-small-last">small last</div>
       <div class="img-small-last-2">small last 2</div>

       <div v-for="item in trends" :key="item.id" v-bind:class="[item.placement]">
            <shared-ui-allied-image :imgUrl="item.image" :title="item.name"/>
       </div>
    </div> -->

    <!-- <ul class="trends-top">
        <li v-for="item in trends" :key="item.id" v-bind:class="[item.placement]">
            <figure>
                <shared-ui-allied-image :imgUrl="item.image" :title="item.name"/>
            </figure>
        </li>
    </ul> -->

    <div class="gallery">
  <ul class="gallery__list">
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22942_hires.jpg" alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"></router-link>
        <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23021_hires.jpg" alt="A first look at dunes"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23002_hires.jpg" alt="K2-138 6 Planets Artwork (Artist's Illustration) "></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA21212_hires.jpg" alt="Small Prominences"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22983_hires.jpg" alt="Ezinu Crater"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22990_hires.jpg" alt="Polar Ice"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
       <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22963_hires.jpg" alt="Jupiter"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22918_hires.jpg" alt="Star Gaia 17pbi Seen by Spitzer"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22900_hires.jpg" alt="Another Cloudy Day"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
         <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22941_hires.jpg" alt="South Equatorial Belt Brown Barge Close-up"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22936_hires.jpg" alt="Earth-based Observation of Jupiter"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22937_hires.jpg" alt="Jupiter's South Tropical Disturbance"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <!-- <li>
      <figure>
         <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22933_hires.jpg" alt="Jupiter's Southern Circumpolar Cyclones"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22906_hires.jpg" alt=" Juno Flyby Movie "></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22895_hires.jpg" alt="Swiss Cheese on a Red Planet"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA21211_hires.jpg" alt="Solar Active Region's Cameo Appearance"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22914_hires.jpg" alt="Bow Shock Around Young Star"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
         <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22695_hires.jpg" alt="Jupiter's North Equatorial Belt"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22770_hires.jpg" alt="Titan Mosaic: The Surface Under the Haze"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
         <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA18144_hires.jpg" alt="Reappearing Coronal Hole"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22820_hires.jpg" alt="NASA's ASTER Captures Lava Flow, Ash from Guatemala Volcano"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22869_hires.jpg" alt="Active Dunes in Wirtz Crater"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>
    <li>
      <figure>
        <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22569_hires.jpg" alt="Supernova Remnant G54"></router-link>
         <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>




    <li>
          <figure>
       <a href="/">
            <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22942_hires.jpg" alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms">
       </a>
      </figure>
    </li>

    <li>
          <figure>
         <router-link class="route" to="/"><img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22942_hires.jpg" alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"/></router-link>
      </figure>
    </li> -->
  </ul>
</div>
</template>

<script setup lang="ts">
import { trends } from '@/constants'


</script>

<style lang="scss" scoped>

/* .trends-top {
    width: 100%;
    display: grid; */
    /* grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(90px, auto);
    grid-gap: 10px; */
    /* grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-template-rows: repeat(auto, minmax(200px, 250px));
    grid-gap: 1rem;
    grid-auto-flow: dense;
    width: none;
    grid-template-areas: none;
    list-style: none;
} */

/* figure {
    height: 100%;
}

figure > img {
    width: 100%;
  height: 100%;
  object-fit: cover;
}

.trends-top > * {
    background: #3bbced;
    padding: 0px;
} */

/* @media only screen and (min-width: 768px) { */

/* .trends-top {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 10px;
    width: 100%;
    grid-template-areas: 
    "imgSmallTop imgSmallTop imgSmallTop imgBigFirst imgBigFirst imgBigFirst imgBigFirst imgBigFirst imgBigLast imgBigLast imgBigLast imgBigLast"
    "imgSmallTop imgSmallTop imgSmallTop imgBigFirst imgBigFirst imgBigFirst imgBigFirst imgBigFirst imgBigLast imgBigLast imgBigLast imgBigLast"
    "imgSmallBelow imgSmallBelow imgSmallBelow imgBigFirst imgBigFirst imgBigFirst imgBigFirst imgBigFirst imgBigLast imgBigLast imgBigLast imgBigLast"
    "imgSmallBelow imgSmallBelow imgSmallBelow imgBigFirst imgBigFirst imgBigFirst imgBigFirst imgBigFirst imgBigLast imgBigLast imgBigLast imgBigLast"
    "imgLeftBig imgLeftBig imgLeftBig imgLeftBig imgSmallFirst imgSmallFirst imgSmallFirst imgSmallMid imgSmallMid imgSmallLast imgSmallLast imgSmallLast"
    "imgLeftBig imgLeftBig imgLeftBig imgLeftBig imgSmallFirst imgSmallFirst imgSmallFirst imgSmallMid imgSmallMid imgSmallLast imgSmallLast imgSmallLast"
    "imgLeftBig imgLeftBig imgLeftBig imgLeftBig imgSmallFirst2 imgSmallFirst2 imgSmallFirst2 imgSmallMid2 imgSmallMid2 imgSmallLast2 imgSmallLast2 imgSmallLast2"
    "imgLeftBig imgLeftBig imgLeftBig imgLeftBig imgSmallFirst2 imgSmallFirst2 imgSmallFirst2 imgSmallMid2 imgSmallMid2 imgSmallLast2 imgSmallLast2 imgSmallLast2";
} */

/* .img-small-top{
 grid-area: imgSmallTop;
}
.img-small-below{
 grid-area: imgSmallBelow;
}
.img-big-first{
 grid-area: imgBigFirst;
}
.img-big-last{
 grid-area: imgBigLast;
} */

/** Second Part */
/* .img-left-big {
    grid-area: imgLeftBig;
}

.img-small-first {
    grid-area: imgSmallFirst;
}

.img-small-mid {
    grid-area: imgSmallMid;
}

.img-small-mid-2 {
    grid-area: imgSmallMid2;
}

.img-small-last {
    grid-area: imgSmallLast;
} 

.img-small-last-2 {
    grid-area: imgSmallLast2;
}

.img-small-first-2 {
    grid-area: imgSmallFirst2;
}

} */



div.gallery {
  padding: 0rem;
  margin: 0px;
}

.gallery > .gallery__list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(auto, 200px);
  grid-auto-flow: dense;
  list-style: none;
}


.gallery > .gallery__list > li > figure {
  position: relative;
  height: 100%;
  width: 100%;
}

.gallery > .gallery__list > li > figure > a {
  /* position: relative; */
  height: inherit;
  width: inherit;
  text-decoration: none;
  display: inherit;

   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.gallery > .gallery__list > li > figure > .route {
  /* position: relative; */
  height: inherit;
  width: inherit;
  text-decoration: none;
  display: inherit;

   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.gallery > .gallery__list > li > figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

figcaption {
    background: #090B10;
    padding: 10px 10px;
    width: 100%;
    z-index: 10;
    position: absolute;
    bottom: 0px;
    color: white;
    opacity: 0.7;
}

/* @media only screen and (min-width: 600px)  {} */

/* For Desktops */
@media only screen and (min-width: 768px) {
    div.gallery {
  padding: 0rem;
  margin: 0px;
}

.gallery > .gallery__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(6, 200px);
  grid-auto-flow: dense;
  list-style: none;
}

.gallery > .gallery__list > li:nth-child(4n) {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery > .gallery__list > li:nth-child(8n) {
  grid-column: span 3;
  grid-row: span 3;
}
}
</style>