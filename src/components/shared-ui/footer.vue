<template>
    <footer>
        <q-icon
              name="bi-instagram"
              size="18px"
            /> © {{currentYear}}, DEVSTATION. | <a href="https://www.facebook.com/kosidev" target="_blank">Terms of Services</a> | <a href="https://www.facebook.com/kosidev" target="_blank">Privacy Policy</a>
    </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());

</script>

<style lang="scss" scoped>
footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    padding: 0px;
    margin: 0px;
    color: #9b9b9b;
}

footer > i {
    margin-right: 15px;
}

footer > a {
    text-decoration: none;
    color: #9b9b9b;
    margin-left: 10px;
    margin-right: 10px;
}
</style>