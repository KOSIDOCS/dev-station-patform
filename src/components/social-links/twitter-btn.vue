<template>
    <a class="btn btn-fc" href="https://www.facebook.com/kosidev" target="_blank">
           <q-icon
              name="bi-twitter"
              size="18px"
            />
    <span v-if="props.screen !== 'mobile'">Follow us on Twitter</span></a>
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
    background-color: #1582d6;
    border-color: #1166a8;
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