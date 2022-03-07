<template>
  <main class="land-page">
    <full-screen-banner-full-banner />
    <trends-display-two-column-display />
    <shared-ui-social-connect />
    <shared-ui-footer />
    <!-- <p>Home page here</p>
    <li>Current breakpoint is: {{ $grid.breakpoint }}</li>
        <li>Window width is: {{ $screen.width }}</li>
        <li>Window height is: {{ $screen.height }}</li> -->

  </main>
</template>
<script setup lang="ts">
import { useScreen, useGrid } from 'vue-screen'

const screen = useScreen()
const grid = useGrid('bulma')
</script>

<style lang="scss" scoped>
.land-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background: #080809;
  color: black;
}
</style>

<route>
{
  "name": "Home",
   "meta": {
    "layout": "landingpage",
    "allowAnonymous": true
  }
}
</route>
