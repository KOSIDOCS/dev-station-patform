<template>
    <a class="btn btn-fc" href="https://www.facebook.com/kosidev" target="_blank">
    <!-- <i _ngcontent-nof-c26="" class="fab fa-facebook"></i> -->
           <q-icon
              name="bi-instagram"
              size="18px"
            />
    <span v-if="props.screen !== 'mobile'">Follow us on Instagram</span></a>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

const props = withDefaults(defineProps<{
  screen?: string,
}>(), {
    screen: "",
});
</script>

<style lang="scss" scoped>
.btn-fc {
    background-image: linear-gradient(137deg,#4e60d3 0,#913baf 14%,#d52d88 76%,#f26d4f 100%);
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 15px;
}

i, span {
    color: white;
}

span {
    margin-left: 10px;
}
</style>