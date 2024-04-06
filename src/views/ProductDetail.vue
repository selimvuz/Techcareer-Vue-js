<template>
    <div class="product-detail">
      <h1>Ürün Detayı</h1>
      <p>Burada seçilen ürünün detaylarını görebilirsiniz.</p>
      <!-- Ürün detay bileşeni eklenecek -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetail',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
  }
  </script>
  
  <style scoped>
  .product-detail {
    text-align: center;
  }
  </style>
  