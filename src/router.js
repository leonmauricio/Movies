import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Item from './views/Item.vue';
import Search from './views/Search.vue';
import Movie from './views/Movie.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/items/:id',
      name: 'item',
      component: Item,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie,
    },
  ],
});
