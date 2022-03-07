<template>
    <a class="styled-github-link"
    target="_blank"
    href="https://github.com/KOSIDOCS?tab=repositories"
    >
        <q-icon
              name="bi-github"
              :size="props.iconSize"
              class="q-pb-xs"
            />
    </a>
</template>

<script setup lang="ts">
import { rgba } from 'polished'
const props = withDefaults(defineProps<{
  size?: string,
  iconSize?: string
}>(), {
  size: '56px',
  iconSize: '18px'
})

const customRgba = rgba("white", 0.75);
console.log(props.size);

</script>


<style lang="scss" scoped>
.styled-github-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind('props.size');
  height: v-bind('props.size');
  color: v-bind('customRgba');
}
</style>