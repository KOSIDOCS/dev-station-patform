<template>
  <carousel :items-to-show="3" :wrapAround="true" class="wrapper-carol">
    <slide v-for="slide in imgLinks" :key="imgLinks.indexOf(slide)">
      <!-- <h1>{{ imgLinks.indexOf(slide) }}</h1> -->
      <shared-ui-carousel-card className="carousel__item" :url="slide"/>
      <!-- <div class="card-wrapped carousel__item">
                <img :src="slide"/>
      </div> -->
    </slide>
  </carousel>
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
// @ts-ignore
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ref } from 'vue'

const imgLinks = ref([
  'https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg',
  'https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg',
  'https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg',
  'https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg',
  'https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg',
  'https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg',
  'https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg',
])

</script>

<style lang="scss" scoped>
h1 {
  background: green;
}

.wrapper-carol {
  width: 85%;
  overflow: visible;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  /* transform: scale(1.1, 1.1); */
  height: 220px;
  transition: 0.9s;
}

/* .card-wrapped {
    background: green;
    width: 420px;
    height: 190px;
    border-radius: 30px;
    margin: 0px;
    padding: 0px;
    overflow: visible;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
        margin: 0px;
        padding: 0px;
    }
} */
</style>