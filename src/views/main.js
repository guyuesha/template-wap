// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

const loggedIn = () => {
  let user = JSON.parse(sessionStorage.getItem('user')) || {};
  if (!user || !user.accessToken) {
    return false;
  } else {
    return true;
  }
};
router.beforeEach((to, from, next) => {
  console.log(to, to.matched.some(record => record.meta.requiresAuth));
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn()) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
