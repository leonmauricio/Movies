<template>
  <div class="search">
    <form class="movie-search" @submit.prevent="fetchItems">
      <input spellcheck="false" type="text" name="search" v-model="search">
    </form>

    <ul class="movie-list">
      <li v-for="item in items">
        <router-link class="movie-link" :to="`movie/${item.imdbID}`">
          <div :style="{backgroundImage: `url(${item.Poster})`}">
            <p>
              {{ item.Title }}
            </p>
          </div>
        </router-link>
      </li>
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
