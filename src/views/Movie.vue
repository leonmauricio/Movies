<template>
  <div class="movie-detail">
    <div v-if="movie">
      <h1>{{ movie.Title }}</h1>
      <img :src="movie.Poster">
    </div>
    <div v-else>
      CARGANDO...
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movie: null,
    };
  },
  methods: {
    fetchMovie() {
      axios
        .get(`http://www.omdbapi.com/?i=${this.$route.params.id}&apikey=db6050af`)
        .then((response) => {
          this.movie = response.data;
          return true;
        });
    },
  },
  mounted() {
    this.fetchMovie();
  },
};
</script>
