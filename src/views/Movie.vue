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
        <MovieRating></MovieRating>
        <div v-if="loggedIn">
          <button v-on:click="addToFavorites" v-if="!isFavorite" class="add-fav">
            Agregar a favoritos
          </button>
          <button v-on:click="removeFromFavorites" v-if="isFavorite" class="add-fav">
            Nah malisima al final
          </button>
        </div>
      </div>
      <AppComments></AppComments>
    </div>
    <div v-else>
      CARGANDO...
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import cookies from 'browser-cookies';
import AppComments from '@/components/AppComments.vue';
import MovieRating from '@/components/MovieRating.vue';

export default {
  components: {
    AppComments,
    MovieRating,
  },
  data() {
    return {
      movie: null,
      favorites: [],
    };
  },
  computed: {
    isFavorite() {
      if (!this.movie) return false;
      const { id } = this.$route.params;
      let isFavorite = false;
      this.favorites.forEach((favorite) => {
        if (favorite.id === id) isFavorite = true;
      });
      return isFavorite;
    },
    loggedIn() {
      if (!cookies.get('userName')) {
        return false;
      }
      return true;
    },
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
    parseFavorites() {
      this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    },
    addToFavorites() {
      this.favorites.push({
        id: this.$route.params.id,
        title: this.movie.Title,
        poster: this.movie.Poster,
      });
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    removeFromFavorites() {
      const favPosition = this.favorites.findIndex(favorite => favorite.id === this.$route.params.id);
      this.favorites.splice(favPosition, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
  },
  mounted() {
    this.fetchMovie();
    this.parseFavorites();
  },
};
</script>
