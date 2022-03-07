<template>
    <div class="wrapper">
    <shared-ui-menu-button>
        <a class="app-name" href="/">
          <q-icon
              name="bi-instagram"
              size="18px"
            />
            <span>DEV</span>
            <span class="station">STATION</span>
        </a>
    </shared-ui-menu-button>

    <div class="side">
        <div class="sign-in-btn btn-cursor">Sign in</div>
        <div class="sign-up-btn btn-gradient btn-cursor">Sign up</div>
        <div class="dots-btn btn-cursor">
            <q-icon
              name="bi-three-dots-vertical"
              size="18px"
              class="q-pb-xs"
            />
            </div>
    </div>
    
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.wrapper {
    color: white;
    font-size: 1.4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-height: 70px;
    /* background: grey; */
    padding: 10px 25px;
}

.side {
    display: flex;
    flex-direction: row;
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

.sign-in-btn {
padding: 10px 25px;
border-radius: 5px;
font-size: 0.9rem;
margin-right: 20px;
text-align: center;
}

.sign-up-btn {
padding: 10px 25px;
border-radius: 5px;
font-size: 0.9rem;
margin-right: 20px;
text-align: center;
}

.dots-btn {
padding: 10px 15px;
border-radius: 5px;
font-size: 0.9rem;
text-align: center;
background: #313437;

i {
  color: blue;
  background: -webkit-linear-gradient(90deg, rgba(118,57,229,1) 0%, rgba(168,55,179,1) 35%, rgba(226,57,128,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

}
</style>