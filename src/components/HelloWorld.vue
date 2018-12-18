<template>
  <div class="hello">
    <h3>
      Los disponibles son: {{ quantity }}
    </h3>
    <h1 v-for="(item, index) in items" :key="index">
      <router-link v-if="item > 1" :to="`items/${item}`">
        {{ item }}
      </router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    items: Array,
  },
  computed: {
    quantity() {
      const available = this.items.filter(item => item > 1);
      return available.length;
    },
  },
};
</script>
