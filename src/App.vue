<template>
  <div id="app">
    <header>
      <button v-on:click="toggleMenu">
          &#9776;
      </button>
      <h1>
        Pelocolas
      </h1>
      <router-link class="user-icon" :to="`/login`">
        &#128104;
      </router-link>
    </header>
    <AppMenu v-if="menu" @close="toggleMenu"></AppMenu>
    <router-view/>
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue';

export default {
  components: {
    AppMenu,
  },
  data() {
    return {
      menu: false,
      cookies: null,
    };
  },
  computed: {
    loggedIn(){
      let cookies = require('browser-cookies');
      if (!cookies.get('userName')) {
        return false;
      } else {
        return true;
      };
    },
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>
