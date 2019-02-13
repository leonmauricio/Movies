<template>
  <div class="main-menu">
    <ul v-on-clickaway="closeMenu">
      <li class="menu-link">
        <router-link :to="`/`" v-on:click.native="closeMenu">
          Search
        </router-link>
      </li>
      <li class="menu-link" v-if="loggedIn">
        <router-link :to="`/favorites`" v-on:click.native="closeMenu">
          Favorites
        </router-link>
      </li>
      <li class="menu-link" v-on:click="closeMenu">
          Close
      </li>
    </ul>
  </div>
</template>

<script>
import cookies from 'browser-cookies';
import { directive as onClickaway } from 'vue-clickaway';

export default {
  directives: {
    onClickaway,
  },
  computed: {
    loggedIn() {
      if (!cookies.get('userName')) {
        return false;
      }
      return true;
    },
  },
  methods: {
    closeMenu() {
      this.$emit('close');
    },
  },
};
</script>
