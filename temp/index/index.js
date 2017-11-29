import Vue from 'vue';
import App from './app';
import VueResource from 'vue-resource';
Vue.use(VueResource);
new Vue({ // eslint-disable-line
  el: '#app',
  render: function(h) {
    return h(App);
  }
});
