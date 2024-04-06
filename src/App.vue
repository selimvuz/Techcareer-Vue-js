<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <!-- Footer içeriği -->
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  background-color: #F6F8FF; /* Bileşene özel arkaplan rengi */
}
</style>
