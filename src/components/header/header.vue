<template>
  <section>
    <div>
      <div class="backBtn">
        <a href="javascript:void(0)" @click="backTrigger"></a>
      </div>
      <div class="headerTitle">
        {{$route.name}}
      </div>
    </div>
  </section>
</template>

<script>
  import {
    http,
    api
  } from '@/common/http/http.js';
  import {
    bus
  } from '@/common/js/bus.js';
  export default {
    data() {
      return {
        showNav: false,
        userInfo: {},
      }
    },
    props: {
      backTrigger: {
        required: false,
        type: Function,
        default: () => {
          console.log('back trigger');
          history.go(-1);
        }
      }
    },

    mounted() {

    }

  }

</script>

<style lang="scss" scoped>

</style>
