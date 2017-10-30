<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style lang="scss">
  @import './assets/css/basic.scss';

  body {
    position: relative;
  }

  #app {
    background-color: $color-bodybg;
    min-height: 100vh;
    overflow: auto;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
