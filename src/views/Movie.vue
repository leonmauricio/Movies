<template>
  <div>
    <div class="movie-detail" v-if="movie">
      <div class="desc-poster" :style="{backgroundImage: `url(${movie.Poster})`}">
        <h2 class="movie-title">
          {{ movie.Title }}
        </h2>
      </div>
      <div class="desc-division">
        <h4 class="desc-title">
          Genre
        </h4>
        <p class="stats">
          {{ movie.Genre }}
        </p>
      </div>
      <div class="desc-division">
        <h4 class="desc-title">
          Plot
        </h4>
        <p class="stats">
          {{ movie.Plot }}
        </p>
      </div>
      <div class="desc-division" v-if="movie.Metascore !== 'N/A'">
        <h4 class="desc-title">
          Metascore
        </h4>
        <p class="stats">
          {{ movie.Metascore }}
        </p>
      </div>
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
