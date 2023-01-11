import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Repositorios from './views/Repositorios.vue';
import Usuarios from './views/Usuarios.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/repositorios',
    name: 'repositorios',
    component: Repositorios,
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Usuarios,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;