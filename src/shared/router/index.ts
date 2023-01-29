import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AppHome from '../../pages/ui/AppHome.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome,
  },
]

const router = new VueRouter({
  routes
});

export default router;
