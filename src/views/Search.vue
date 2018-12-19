<template>
  <div class="search">
    <h1>Buscar </h1>
    <form @submit.prevent="fetchItems">
      <input type="text" name="search" v-model="search">
      <button class="search">Buscar</button>
    </form>

    <ul v-for="item in items">
      <li>
        <router-link :to="`movie/${item.imdbID}`">
          {{ item.Title }}
        </router-link>
      </li>
      <li><img :src="item.Poster"></li>

    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      search: '',
      items: null,
    };
  },
  methods: {
    fetchItems: function () {
      axios.get(`http://www.omdbapi.com/?s=${this.search}&apikey=db6050af`).then(response => {this.items = response.data.Search})
    }
  },
};
</script>
