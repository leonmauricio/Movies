import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search.vue';
import Movie from './views/Movie.vue';
import Fav from './views/Fav.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/favorites',
      name: 'fav',
      component: Fav,
    },
  ],
});
