import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [
       {
            path: '/login',
            name: 'login',
            component: resolve => {
                require.ensure(['@/views/login/login.vue'], () => {
                    resolve(require('@/views/login/login.vue'));
                }, 'chunk/login');
            },
            meta: {
              requiresAuth: false
            }
        }

    ]
})
