<template>
            <div class="card-wrapped carousel__item">
                <img :src="props.url"/>
            </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

const props = withDefaults(defineProps<{
  url?: string,
  className?: string,
}>(), {
    url: "https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg",
    className: "carousel__item",
});
</script>

<style lang="scss" scoped>
.card-wrapped {
    background: green;
    width: 420px;
    height: 190px;
    border-radius: 30px;
    margin: 0px;
    padding: 0px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
        margin: 0px;
        padding: 0px;
    }
}
</style>