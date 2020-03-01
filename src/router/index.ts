import Vue from 'vue';
import VueRouter from 'vue-router';
import LightEdit from '../views/LightEdit.vue';
import Panel from '../views/Panel.vue';
import PanelEdit from '../views/PanelEdit.vue';
import SceneEdit from '../views/SceneEdit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Panel,
  },
  {
    path: '/light/edit',
    name: 'LightEdit',
    component: LightEdit,
  },
  {
    path: '/panel',
    name: 'Panel',
    component: Panel,
  },
  {
    path: '/panel/edit',
    name: 'PanelEdit',
    component: PanelEdit,
  },
  {
    path: '/scene/edit',
    name: 'SceneEdit',
    component: SceneEdit,
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'open active',
  routes,
});

export default router;
