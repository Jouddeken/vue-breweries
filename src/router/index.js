import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';
import About from '@/containers/About';
import NotFound from '@/containers/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '*',
      redirect: {
        name: 'NotFound',
      },
    },
  ],
});
