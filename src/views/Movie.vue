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
        <p v-on:click="addToFav" v-if="fav != 1" class="add-fav">
          Agregar a favoritos
        </p>
        <p v-else>
          Pelicula ya agregada a favoritos.
          <br>
          No, no la podes sacar. No se puede.
        </p>
        <p v-on:click="fetchFav" class="add-fav">
          Check
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
      fav: null,
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
    addToFav() {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let favList = JSON.parse(localStorage.getItem('favList')) || [];

        this.fav = 1;

        const params = {
          path: this.$route.fullPath,
          title: this.movie.Title,
          poster: this.movie.Poster,
        }

        favorites.push(params);
        favList.push(this.$route.params.id);

        localStorage.setItem('favorites', JSON.stringify(favorites));
        localStorage.setItem('favList', JSON.stringify(favList));
    },
    checkFav(){
      let favList = JSON.parse(localStorage.getItem('favList')) || [];

      const index = favList.indexOf(this.$route.params.id);

      if (index != -1) {
        this.fav = 1;
      }

    },
    fetchFav() {
      console.log(JSON.parse(localStorage.getItem('favorites')));
      console.log(JSON.parse(localStorage.getItem('favList')));
    },
  },
  mounted() {
    this.fetchMovie();
    this.checkFav();
  },
};
</script>
