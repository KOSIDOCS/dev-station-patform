<template>
    <div class="wrapper">
        <nav class="side-bar">
            <ul>
                <li v-for="collabs in gigCollabPair" :key="collabs">
                    <router-link :to="{ name: 'SearchPage' }">{{collabs}}</router-link>
                </li>
            </ul>
        </nav>
        <div class="middle-content">
            <shared-ui-carousel />
            <shared-ui-scroll-menu />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const gigCollabPair = ref(['UI/FE', 
'UI/FE/BE', 'UI/UX', 'UI/FS', 'UI/FE/BE/FS', 'UI/FE/BE/FS/UX',
'AR/VR/FE/BE', 'BE/DEVOPS/FE', 'RESEARCH/FE/UI', 'STARTUP/FE/UI/BE'
])

</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    font-size: 60px;
    margin: 50px 38px;
}

.side-bar {
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    background: #313437;
    color: white;
    border-radius: 30px;
    max-width: 280px;
    margin-bottom: 40px;
    padding: 40px;
}

ul {
    list-style: none;

    li {
        font-size: 1.2rem;
        padding-bottom: 30px;
        a {
            color: white;
            text-decoration: none;
        }
    }
}

.middle-content {
    /* background: blue; */
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    overflow: visible;
    /* justify-content: center; */
}
</style>

<route>
{
  "name": "SearchPage",
   "meta": {
    "layout": "devsearch",
    "allowAnonymous": true
  }
}
</route>