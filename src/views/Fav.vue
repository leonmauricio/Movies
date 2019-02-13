<template>
  <div class="search">
    <ul class="movie-list">
      <li v-for="item in items">
        <router-link class="movie-link" :to="`movie/${item.id}`">
          <div :style="{backgroundImage: `url(${item.poster})`}">
            <p>
              {{ item.title }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: null,
    };
  },
  methods: {
    fetchItems() {
      this.items = JSON.parse(localStorage.getItem('favorites'));
    },
  },
  mounted() {
    this.fetchItems();
  },
};
</script>
