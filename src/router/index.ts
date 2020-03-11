import Vue from 'vue';
import VueRouter from 'vue-router';
import PanelContainer from '../views/PanelContainer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PanelContainer,
  },
  {
    path: '/panel',
    name: 'Panel',
    component: PanelContainer,
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'open active',
  routes,
});

export default router;
