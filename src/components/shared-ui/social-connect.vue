<template>
    <div class="social-btns-wrapper">
        <span v-if="grid.breakpoint === 'mobile'">FOLLOW US:</span>
        <social-links-facebook-btn :screen="grid.breakpoint"/>
        <social-links-twitter-btn :screen="grid.breakpoint"/>
        <social-links-instagram-btn :screen="grid.breakpoint"/><br/>
        <social-links-platforms-btn  v-if="grid.breakpoint !== 'mobile'" name="Coming Soon" icon="bi-apple" :screen="grid.breakpoint"/>
    </div>
    <div v-if="grid.breakpoint === 'mobile'" class="only-mobile">
        <span>GET OUR APPS:</span>
        <social-links-platforms-btn name="Coming Soon" icon="bi-apple" :screen="grid.breakpoint"/>
    </div>
</template>

<script setup lang="ts">
import { useGrid } from 'vue-screen'

const grid = useGrid('bulma')

</script>

<style lang="scss" scoped>
.social-btns-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 50px 0px;
    margin: 0px;
    background: #080809;
}

div > span {
    font-size: 1rem;
    font-weight: 600;
    color: white;
    margin-right: 15px;
}

.only-mobile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0px;
    margin: 0px;
}
</style>