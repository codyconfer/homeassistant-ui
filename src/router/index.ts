import Vue from 'vue';
import VueRouter from 'vue-router';
import SceneView from '../views/SceneView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SceneView,
  },
  {
    path: '/scene',
    name: 'Scene',
    component: SceneView,
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'open active',
  routes,
});

export default router;
