<template>
  <div class="home">
    <HelloWorld :items="[1,2,3,4,5]"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
