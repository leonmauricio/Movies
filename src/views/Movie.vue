<template>
  <div class="search">
    <h1>{{ movie.Title }}</h1>
    <img :src="movie.Poster">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      movie: null,
    };
  },
  methods: {
    fetchMovie: function () {
      axios.get(`http://www.omdbapi.com/?i=${this.$route.params.id}&apikey=db6050af`).then(response => {this.movie = response.data})
    }
  },
  mounted: function () {
    this.fetchMovie();
  }
};
</script>
