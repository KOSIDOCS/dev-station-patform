<template>
    <a class="btn btn-fc" href="https://www.facebook.com/kosidev" target="_blank">
           <q-icon
              name="bi-facebook"
              size="18px"
            />
    <span v-if="props.screen !== 'mobile'">Like us on Facebook</span></a>
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
    background-color: #3b5997;
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