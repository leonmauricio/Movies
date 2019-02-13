<template>
  <div class="star-container">
    <div v-for="(star, index) in stars" class="star" :class="{ 'star-active': star.active }" :key="index" @click="rateMovie(index)" @mouseover="selectRating(index)"  @mouseleave="mouseLeave">
      &#9733;
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      rated: false,
      current: -1,
    };
  },
  computed: {
    stars() {
      const starArray = new Array(5).fill().map((star, index) => ({ active: index <= this.current, index }));
      return starArray;
    },
  },
  methods: {
    selectRating(index) {
      if (this.rated === false) {
        this.current = index;
      }
    },
    rateMovie(index) {
      if (this.rated === false) {
        this.current = index;
        this.rated = true;
      }
    },
    mouseLeave() {
      if (this.rated === false) {
        this.current = -1;
      }
    },
  },
};
</script>
