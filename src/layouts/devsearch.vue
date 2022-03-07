<!-- Style this without using Quasar components -->
<template>
    <div class="search-lay">
        <navigation-search-page-bar />
        <div>
            <router-view />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-lay {
    background: #090B10;
    min-height: 100vh;
}
</style>