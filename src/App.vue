<template>
  <div>
    <Navbar />
    <router-view class="content" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.content {
  margin: 1.5rem; /* Adjust the margin as needed */
}
</style>
