<template>
    <a class="btn btn-fc" href="https://www.facebook.com/kosidev" target="_blank">
           <q-icon
              :name="icon"
              size="18px"
            />
    <span v-if="props.screen !== 'mobile'">{{name}}</span></a>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

const props = withDefaults(defineProps<{
  name?: string,
  icon?: string,
  screen?: string,
}>(), {
    name: "",
    icon: "",
    screen: "",
});
</script>

<style lang="scss" scoped>
.btn-fc {
    background-color: #333;
    border-color: #333;
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