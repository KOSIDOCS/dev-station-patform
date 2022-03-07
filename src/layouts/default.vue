<template>
  <q-layout
    class="bg-tertiary"
    view="hHh lpR fff"
  >
    <!-- <main-header :onboarding="isOnboarding" /> -->
    <navigation-top-bar />

    <q-page-container
      class="layout-default sk-container"
      :class="centerAligned && 'layout-default--align-center'"
    >
      <router-view />
    </q-page-container>

    <!-- <main-footer class="bg-transparent text-secondary" /> -->
  </q-layout>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const Auth: any = inject('Auth')
const isOnboarding = computed(() =>
  !!route.matched.find(({ meta }) => meta.onboard) ||
  !!Auth.needRedirectToOnboard())
const centerAligned = computed(() =>
  !!route.matched.find(({ meta }) => meta.centerAligned))
</script>

<style lang="scss">
.layout-default {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  // padding: 0px 0px 50px !important;

  &--align-center {
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }
}
</style>
