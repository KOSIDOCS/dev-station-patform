<template>
    <div class="wrapper">
        <span>Channels</span>
        <!-- <q-icon
              name="bi-instagram"
              size="18px"
            /> -->
        <carousel class="carousel-menu" :items-to-show="6" :wrapAround="true">
    <slide v-for="slide in menuLinks" :key="menuLinks.indexOf(slide)">
      <div class="menu-btn">{{ slide }}</div>
    </slide>
  </carousel>
    </div>
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
// @ts-ignore
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ref } from 'vue'

const menuLinks = ref(['Architecture', 'Character', 'Concept Art', 'Mecha', 'Game Art', 'Anime & Manga', 'Digital Art', 'Illustration', 'Photography', 'Painting', 'Sketchbook', 'Video Art', 'Web Art', 'Other']);
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: row;
    width: 80%;

    span {
        font-size: 1.1rem;
        font-weight: bold;
        margin-right: 1rem;
        padding: 15px 20px;
        border-radius: 10px;
        background: #313437;
    }
}

.carousel-menu {
    width: 100%;
    overflow: hidden;
}
.menu-btn {
    background: green;
    padding: 10px 10px;
    color: white;
    font-size: 1.4rem;
}
</style>