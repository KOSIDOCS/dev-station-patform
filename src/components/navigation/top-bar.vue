<template>
   
   <!-- dropdown-menu -->
   <nav v-if="openDropdown" class="dropdown">
     <ul>
       <li><router-link :to="{ name: 'Home' }" @click="closeDropdown" class="nav-btn">Home</router-link></li>
     <li><router-link :to="{ name: 'MarketPlace' }" @click="closeDropdown" class="nav-btn">MarketPlace</router-link></li>
     <li><router-link :to="{ name: 'About' }" @click="closeDropdown" class="nav-btn">About</router-link></li>
     </ul>
   </nav>
  <!-- dropdown-menu end -->

  <header class="Wrapper">
    <shared-ui-hambuger-btn
         v-if="$grid.breakpoint === 'xs'"
        :style="{ transform: 'scale(0.5, 0.5)' }"
        @menu:clicked="menuClicked"
        :closeBtn="openDropdown"
    />
    <div class="nav-wrap">
    <shared-ui-menu-button>
      <!-- <shared-ui-github-link /> -->
        <a class="app-name" href="/">
          <q-icon
              name="bi-instagram"
              size="18px"
            />
            <span>DEV</span>
            <span class="station">STATION</span>
        </a>
    </shared-ui-menu-button>
    <ul v-if="$grid.breakpoint !== 'xs'">
    <li><router-link :to="{ name: 'Home' }" class="nav-btn">Home</router-link></li>
    <li><router-link :to="{ name: 'MarketPlace' }" class="nav-btn">MarketPlace</router-link></li>
    <li><router-link :to="{ name: 'About' }" class="nav-btn">About</router-link></li>
   </ul>

    </div>
    <div class="app-title"> SKILLS COLLAB </div>
    <a class="instagram" href="https://www.instagram.com/kosidev/" target="_blank">
      <q-icon
              name="bi-instagram"
              size="18px"
              class="q-pb-xs"
            />
    </a> 
    <router-link class="instagram" :to="{ name: 'SearchPage' }">
      <q-icon
              name="bi-search"
              size="18px"
              class="q-pb-xs"
            />
    </router-link>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { rgba } from 'polished'
import { useScreen, useGrid } from 'vue-screen'

const screen = useScreen()
const grid = useGrid('bulma')

const customRgba = rgba("white", 0.75);

const hideSkillsCollab = ref(screen.width < 768 ? 'none' : 'block');

const openDropdown = ref(false);

watch(() => screen.width, (width) => {
  hideSkillsCollab.value = width < 768 ? 'none' : 'block';
})

const menuClicked = (val: boolean) => {
  openDropdown.value = val;
}

const closeDropdown = () => {
  openDropdown.value = false;
}
</script>

<style lang="scss" scoped>
.Wrapper {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  background: #090B10;
  color: aliceblue;
  margin: 0px;
  z-index: 80;
}

.app-title {
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  text-align: center;
  display: v-bind('hideSkillsCollab');
  letter-spacing: 5px;
  color: v-bind('customRgba');
}

.instagram {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 80px;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 24px;
  text-decoration: none;
  color: v-bind('customRgba');
  &:hover {
    color: v-bind('customRgba');
  }
}

.app-name {
  display: flex;
  flex-direction: row;
  color: #fff;
  width: 100%;
  margin-left: 20px;
  text-decoration: none;

  span:not(:last-of-type) {
    margin-left: 5px;
  }

  .station {
    color: #8B7C8E !important;
  }
}


/* navigation style */

.nav-wrap {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
}
ul:first-of-type {
    list-style-type: none;
    margin: 0;
    margin-left: 10px;
    padding: 0;
    /* overflow: hidden; */
    /* background-color: #333; */
    height: 40px;
  }
  
  li {
    text-align: center;
    /* float: right; */
    height: 40px;
    display: inline-block;
  }
  
  li a {
    display: block;
    color: white;
    padding: 12px 10px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 10px;
    /* font-size: 0.875rem; */
    font-family: Poppins;
    font-weight: 600;
    letter-spacing: 2.5px;
    -moz-transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    box-sizing: border-box;
    height: 40px;
  }

  a.router-link-active {
    border-bottom: 1px solid white;
  }

  li .nav-btn:hover {
      border-bottom: 1px solid white;
  }

  /* Dropdown Sections */
  .dropdown {
   background: #090B10;
   left: 0;
   min-height: 300px;
   opacity: 1;
   transform: translateY(0);
   position: absolute;
   transition: all .5s ease;
   top: 39px;
   width: 100%;
  }

  .dropdown ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-type: none;
    margin: 30px 20px;
    padding: 0;
    width: 100%;
  }

</style>