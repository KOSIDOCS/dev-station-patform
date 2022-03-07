<template>
  <div class="hamburger" @click="menuClicked" :class="hamburgerOpen ? 'hamburger--is-open' : ''">
    <div class="hamburger__item hamburger__item--first"></div>
    <div class="hamburger__item hamburger__item--middle"></div>
    <div class="hamburger__item hamburger__item--last"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref, defineEmits, watch } from 'vue';

const emit = defineEmits(['menu:clicked'])

const props = withDefaults(defineProps<{
  closeBtn?: boolean,
}>(), {
  closeBtn: false,
});

const hamburgerOpen = ref(false)

const menuClicked = () => {
  hamburgerOpen.value = !hamburgerOpen.value
  emit('menu:clicked', hamburgerOpen.value)
}

watch(() => props.closeBtn, () => {
  if (props.closeBtn === false) {
    hamburgerOpen.value = false
  }
})

</script>

<style lang="scss" scoped>
.bg-blue-bright {
  background-color: blue;
}

.hamburger {
  height: 40px;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    cursor: pointer;
  }
  
  &__item {
    width: 60px;
    min-width: 36px;
    height: 6px;
    border-radius: 2px;
    background: #ffffff;
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 300ms linear;
    
    &--first {
      .hamburger--is-open & {
        transform: translate(0, 18px) rotate(45deg);
      }
    }
    
    &--middle {
      .hamburger--is-open & {
        opacity: 0;
      }
    }
    
    &--last {
      .hamburger--is-open & {
        transform: translate(0, -18px) rotate(-45deg);
      }
    }
  }
}
</style>