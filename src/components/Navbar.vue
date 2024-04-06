<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">techcareer.shop</router-link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <router-link to="/" class="nav-link">Ana Sayfa</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Ürünler</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">Sepet</router-link>
        </li>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Kullanıcı
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><router-link class="dropdown-item" to="/login">Giriş</router-link></li>
          <li><router-link class="dropdown-item" to="/register">Kayıt</router-link></li>
        </ul>
    </div>
    </ul>
    <form class="d-flex ms-auto my-2 my-lg-0 align-items-center">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>
@import '../assets/style/navbar.css';
</style>