<template>
  <div 
     class="styled-btn"
    @click="menuClicked">
    <span class="styled-icon-wrapper">
      <div
        v-if="true"
        class="line line-1 styled-line1"
      ></div>
      <div
        v-if="true"
        class="line-2 styled-line2"
      ></div>
      <div class="line line-3 styled-line3"></div>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref, defineEmits } from 'vue';

const emit = defineEmits(['menu:clicked'])

const props = withDefaults(defineProps<{
  background?: string,
  iconColor?: string,
  size?: string,
  open?: boolean,
  showShadow?: boolean,
}>(), {
  background: '#6d77d5',
  iconColor: "#ffffff",
  size: '100px',
  open: false,
  showShadow: false,
});

const menuClicked = () => {
  emit('menu:clicked')
  console.log('menuClicked');
}

const showShadowB = ref(props.showShadow ? "0 24px 38px 3px rgba(0, 0, 0, 0.025), 0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);" : '');

const isOpenLine3 = ref(props.open ? "rotate(0) translate(0, 4px)" : 'none');

const isOpenLine1 = ref(props.open ? "translateX(0.25rem)" : 'none');

const line1Transform = ref(props.open ? "rotate(45deg) translate(4px, 6px)" : "rotate(0) translate(0, 0)");

const line1Animation = ref(props.open ? "line1AnimationIn 0.5s linear" : 'line1AnimationOut 0.5s linear');

const line2IsOpen = ref(props.open ? "rotate(0)" : "rotate(0) ");

const line2Opacity = ref(props.open ? 0 : 1);

const line3Transform = ref(props.open ? "rotate(-45deg) translate(8px, -6px)" : "rotate(0) translate(0, 0)");

const line3Animation = ref(props.open ? "line3AnimationIn 0.5s linear" : 'line3AnimationOut 0.5s linear');
</script>

<style lang="scss" scoped>
.styled-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind('props.size');
  height: v-bind('props.size');
  border-radius: 0.5rem;
  background: v-bind('props.background');
  box-shadow: v-bind('showShadowB');

  @media only screen and (min-width: 600px) {
    .line {
      transition: transform 0.25s;
    }

    &:hover .line-1 {
        transform: v-bind('isOpenLine1');
    }

    &:hover .line-3 {
      transform: v-bind('isOpenLine3');
    }
  }
}

.styled-icon-wrapper {
  position: relative;
  width: 36px;
  height: 36px;
}

.styled-line1 {
 @keyframes line1AnimationIn { 
  0% {
    transform: rotate(0deg) translate(0, 0);
  }
  25% {
    transform: rotate(0deg) translate(0 , 6px);
  }
  75% {
    transform: rotate(0deg) translate(0, 6px);
  }
  100% {
    transform: rotate(45deg) translate(4px, 6px);
  }
}

 @keyframes line1AnimationOut { 
 0% {
    transform: rotate(45deg) translate(6px, 6px);
  }
  25% {
    transform: rotate(0deg) translate(0, 9px);
  }
  75% {
    transform: rotate(0deg) translate(0, 9px);
  }
  100% {
    transform: rotate(0deg) translate(0, 0);
  }
}

  position: absolute;
  width: 36px;
  min-width: 36px;
  height: 4px;
  border-radius: 2px;
  left: 0;
  transform-origin: 50% 100%;
  background: v-bind('props.iconColor');
  top: 8px;
  transform: v-bind('line1Transform');
  animation: v-bind('line1Animation');
}

.styled-line2 {
  position: absolute;
  width: 36px;
  min-width: 36px;
  height: 4px;
  border-radius: 2px;
  left: 0;
  transform-origin: 50% 100%;
  background: v-bind('props.iconColor');
  top: 16px;
  transform: v-bind('line2IsOpen');
  opacity: v-bind('line2Opacity');
  transition: opacity 0.25s;
}

.styled-line3 {
 @keyframes line3AnimationIn { 
  0% {
    transform: rotate(0deg) translate(0, 0);
  }
  25% {
    transform: rotate(0deg) translate(0, -8px);
  }
  75% {
    transform: rotate(0deg) translate(0, -8px);
  }
  100% {
    transform: rotate(-45deg) translate(8px, -6px);
  }
}

 @keyframes line3AnimationOut { 
 0% {
    transform: rotate(-45deg) translate(8px, -6px);
  }
  25% {
    transform: rotate(0deg) translate(0, -9px);
  }
  75% {
    transform: rotate(0deg) translate(0, -9px);
  }
  100% {
    transform: rotate(0deg) translate(0, 0);
  }
}

  position: absolute;
  width: 36px;
  min-width: 36px;
  height: 4px;
  border-radius: 2px;
  left: 0;
  transform-origin: 50% 100%;
  background: v-bind('props.iconColor');
  top: 24px;
  transform: v-bind('line3Transform');
  animation: v-bind('line3Animation');
}
</style>