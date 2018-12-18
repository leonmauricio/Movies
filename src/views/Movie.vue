<template>
  <div class="search">
    <h1>{{ items.Title }}</h1>
    <img :src="items.Poster">
  </div>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'app',
    props: {
      items: '',
    },
    methods: {
      fetchMovie: function () {
        axios.get(`http://www.omdbapi.com/?i=${this.$route.params.id}&apikey=db6050af`).then(response => {this.items = response.data})
      }
    },
    mounted: function () {
      this.fetchMovie();
    }
  };

</script>
