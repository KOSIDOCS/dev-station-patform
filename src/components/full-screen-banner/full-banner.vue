<template>
    <div id="wrapper" class="wrapper" :style="{ backgroundImage: 'url(' + background + ')' }">
       <!-- <div class="wrapper"> -->
    <!-- <button @click="insert">insert at random index</button>
    <button @click="reset">reset</button> -->
  <!-- <button @click="shuffle">shuffle</button> -->

  <!-- <TransitionGroup tag="ul" name="fade" class="container">
    <div v-for="item in items" class="item" :key="item">
      {{ item }}
      <button @click="remove(item)">x</button>
    </div>
  </TransitionGroup> -->

  <!-- <img :src="background2" :style="{zIndex: 200,width: '100%', height: '818px',}"/> -->

  <div class="details">
    <h6>COLLAB OF THE MONTH</h6>
    <div class="names-wrapper">
      <h3>MICHAEL, LOMONOSOV, JOHN, MESSI</h3>
    <div class="details-row">
      <div class="collab-btn btn-gradient">View Collab</div>
      <h5>// TESLA CAR APP</h5>
    </div>
    </div>
  </div>

   <!-- <div id="slider" :style="{transform: isScrolling ? 'translateY(-300px)' : 'none'}"> -->
<div id="slider">
  <transition-group tag="div" :name="transitionName" class="slides-group">
    <div v-if="show" :key="current" class="slide" :class="slides[current].className">
      <div class="img">
        <!-- Currently right now we are using imagekit to manipulate images, in future users should upload images of given dimension we will give to them, to reduce the cost of using the image library. -->
        <!-- <img v-bind:src="imgSlider" />  -->
        <!-- <img src="https://ik.imagekit.io/kosidevimage/default-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645633368640" /> -->

        <shared-ui-allied-image imgUrl="/back2_79Emb_frr.png" title="My home image"/>
        </div> 
      <p>I'm {{slides[current].className}}!</p>
    </div>
  </transition-group>
  <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
    &#10094;
  </div>
  <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
    &#10095;
  </div>
</div>

<div class="latest-nav-wrapper" 
:style="{
  position: scrolledOverBanner && scrolledDown ? 'fixed' : 'absolute',
  top: scrolledOverBanner && scrolledDown ? '0px' : '100%', 
  zIndex: scrolledOverBanner && scrolledDown ? 900 : 0,
  }"
>
  <div class="latest-nav"
  :style="{width: scrolledOverBanner && scrolledDown ? '100%' : '78.7%',}">
  <h4>// LATESTS TRENDS</h4>
  <div class="latest-nav-links">
    <span>All Collabs</span>
    <span>All Gigs</span>
  </div>
</div>
<div class="latest-nav-hide" :style="{display: scrolledOverBanner && scrolledDown ? 'none': 'block'}"></div>
</div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted, } from 'vue'
import background from '@/assets/back4.png'
import background2 from '@/assets/back2.png'
import imgSlider from '@/assets/back2.png'

console.log(background);


// const getInitialItems = () => [1, 2, 3, 4, 5];
// let id = ref(getInitialItems().length + 1);

// let items = ref(getInitialItems());

// const insert = () =>  {
//       const i = Math.round(Math.random() * items.value.length)
//       items.value.splice(i, 0, id.value++)
//     }

// const reset = () => {
//       items.value = getInitialItems()
//     };

// const shuffle = () => {
//       items = shuffle(items)
//     },
// const remove = (item: any) => {
//       const i = items.value.indexOf(item)
//       if (i > -1) {
//         items.value.splice(i, 1)
//       }
//     }

let isScrolling = ref(false);
// onMounted(() => {
//   setInterval(() => {
//       items.value.splice(0, 1);
//     insert()
//   }, 2000)
// })

const current = ref(0);
const direction = ref(1);
const transitionName = ref("fade");
const show = ref(false);

const slides = ref([
      { className: "blue" },
      { className: "red" },
      { className: "yellow" }
    ])


const slide = (dir: any) => {
      direction.value = dir;
      dir === 1
        ? (transitionName.value = "slide-next")
        : (transitionName.value = "slide-prev");
      var len = slides.value.length;
      current.value = (current.value + dir % len + len) % len;
    }

onMounted(() => {
      show.value = true;
      window.addEventListener('scroll', () => {handleScroll(); handleSlider()});
});

// Controll the scroll position of the slider
const handleSlider = (e?: any) => {
  console.log(window.pageYOffset, `supposed ${window.pageYOffset - 80}`);

  let supposedScroll = window.pageYOffset - 130;
  
  if (supposedScroll > 30) {
    var your_div: any = document.getElementById('slider');
    your_div.style.top = '-' + (supposedScroll - 30) + 'px';
  } 
  else if (supposedScroll >= 0 && supposedScroll < 100) {
     var your_div: any = document.getElementById('slider');
    your_div.style.top = (window.pageYOffset + 120) + 'px';
  }
}

const scrolledDown = ref(false);
const scrolledOverBanner = ref(false);

// Controll the scroll position of the latest nav
const handleScroll = (event?: any)  => {
      const topbarHeight = 40;
      const bannerHeight: any = document?.getElementById('wrapper')?.clientHeight
      
      if (window.scrollY > topbarHeight && !scrolledDown.value) {
        scrolledDown.value = true
      }
      if (window.scrollY >= bannerHeight && scrolledDown.value) {
        scrolledOverBanner.value = true
      } else {
        scrolledOverBanner.value = false
      }
      if (window.scrollY <= topbarHeight && scrolledDown.value) {
        scrolledDown.value = false
        scrolledOverBanner.value = false  
      }
 }

</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.wrapper {
    position: relative;
    background-color: #090B10;
    width: 100%;
    color: white;
    min-height: 618px;
    /* min-height: 318px; */
    background-size: cover;
    margin-bottom: 65px;
     /* margin-bottom: 95px; */
}

.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-from {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter-from {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter-from {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

.blue {
  background: #090B10;
  /* background: #4a69bd; */
}

.red {
  background: #090B10;
  /* background: #e55039; */
}

.yellow {
  background: #090B10;

  /* background: #f6b93b; */
}

/* SLIDER STYLES */
#slider {
  display: block;
  width: 400px;
  height: 500px;
  position: absolute;
  overflow: hidden;
  right: 0px;
  top: 42%;
  transition: top 0.5s ease-in;
  z-index: 50;
}

.slide {
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}

.img {
  width: 100%;
  height: 100%;
}

.latest-nav-wrapper {
  background-color: #253552;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 71px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: width 1.6s ease-in-out 0.6s;
}
.latest-nav {
  background-color: #253552;
  width: 78.7%;
  height: 71px;
  /* position: absolute;
  top: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;

  h4 {
    font-size: 1rem;
  }
}

.latest-nav-hide {
  /* background-color: blue; */
  background-color: #253552;
  width: 391px;
  height: 71px;
  /* position: absolute;
  top: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
}

.latest-nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 100%;
  padding: 0px 90px;
}

.details {
  /* background-color: blue; */
  position: relative;
  top: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0px 30px;

  h6 {
    margin: 10px 0px;
    padding: 0px;
  }
}

.details-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0px 0px;
  margin: 0px;
  margin-top: 20px;

  h5 {
    margin: 0px;
    padding: 0px;
    font-size: 1.2rem;
  }

  .collab-btn {
    font-size: .8rem;
    padding: 8px 15px;
    border-radius: 5px;
    margin-right: 390px;
    cursor: pointer;
  }
}

.names-wrapper {
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 600;
    margin: 0px;
    padding: 0px;
  }
}

@media only screen and (max-width: 600px) {
  
  #slider {
    display: none;
  }

  .details {
  width: 300px;
}

.details-row {
  width: 300px;

  .collab-btn {
    margin-right: 20px;
  }
}

.names-wrapper {
  h3 {
    font-size: 1.2rem;
    line-height: 30px;
  }
}

.latest-nav {
  background-color: #253552;
  width: 100%;
  height: 71px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  h4 {
    font-size: .9rem;
    line-height: 10px;
  }
}

.latest-nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 100%;
  padding: 0px 20px;
}

.latest-nav-hide {
  display: none;
}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 992px) {
   .details {
  width: 300px;
}

.details-row {
  width: 300px;

  .collab-btn {
    margin-right: 20px;
  }
}

.names-wrapper {
  h3 {
    font-size: 1.2rem;
    line-height: 30px;
  }
}

.latest-nav {
  width: 100%;
  height: 71px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 130px 0px 20px;

  h4 {
    font-size: .9rem;
    line-height: 10px;
  }
}

.latest-nav-links {
  width: 180px;
  height: 100%;
  padding: 0px 20px;
}
}

/* Galaxy fold phones */
@media only screen and (max-width: 280px) {

.details {
  width: 275px;
  top: 350px;
}

.details-row {
  width: 245px;
  flex-direction: column;

  .collab-btn {
    margin-right: 0px;
  }
}

.names-wrapper {
  h3 {
    font-size: 1.2rem;
    line-height: 30px;
  }
}

.latest-nav {
  padding: 0px 0px 0px 10px;

  h4 {
    font-size: .7rem;
    line-height: 10px;
  }
}

.latest-nav-links {
  width: 160px;
  height: 100%;
  padding: 0px 10px;
}
}

</style>