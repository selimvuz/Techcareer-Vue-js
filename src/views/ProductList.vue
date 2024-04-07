<template>
<div class="container mt-5">
  <div v-if="alertMessage" class="alert alert-warning">
    {{ alertMessage }}
  </div>
  <div class="grid">
    <div class="grid-item" v-for="product in products" :key="product.id">
      <div class="card mb-4 shadow-sm">
        <img :src="product.image" class="card-img-top" :alt="product.name">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">Detay</button>
              <button type="button" class="btn btn-sm btn-outline-secondary" @click="addToCart(product)">Sepete Ekle</button>
            </div>
            <small class="text-muted">{{ product.price }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
name: 'ProductList',
data() {
    return {
    // Örnek ürün verileri
    products: [
        { id: 1, name: 'Java 101', description: 'Yeni başlayanlar için Java. Profesyoneller tarafından hazırlanan 100 saatlik video içerik, sınavlar, projeler, ek kaynaklar ve dahası...', price: '2499,99₺', image: '/images/java101.jpg' },
        { id: 2, name: 'Vue', description: "En popüler ön yüz kütüphanlerinden Vue için A'dan Z'ye eğitimi içerir. Toplam 40 saatlik video içerik ve mentor desteği!", price: '1799,99₺', image: '/images/vuejs.png' },
        { id: 3, name: 'React', description: "Front-end alanında bir üst seviyeye çıkmak isteyenlere özel!", price: '2999,99₺', image: '/images/react.png' },
        { id: 4, name: 'Python', description: "Veri biliminin temellerine Python ile giriş yapın.", price: '3299,99₺', image: '/images/python.png' },
        { id: 5, name: 'Go', description: "En modern dillerden biri olan Golang için dopdolu bir eğitim paketi.", price: '2999,99₺', image: '/images/golang.png' },
        { id: 6, name: 'Rust', description: "Rust ile sahiplik ve ödünç alma konseptleri arasında kaybolun!", price: '699,99₺', image: '/images/rust.jpg' },
      ],
      alertMessage: '',
    }
},
methods: {
  addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let found = cart.find(prod => prod.id === product.id);
    if (found) {
      // Ürün zaten varsa, uyarı mesajını güncelle
      this.alertMessage = 'Bu ürün zaten sepetinizde.';
      setTimeout(() => {
        this.alertMessage = ''; // 3 saniye sonra mesajı temizle
      }, 3000);
    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.$router.push('/cart');
    }
  }
}
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}

.grid-item {
  display: flex;
}

.card-img-top {
  width: 100%;
  height: 200px; /* Örnek bir yükseklik */
  object-fit: cover;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-text {
  text-align: justify;
  text-justify: inter-word;
}
</style>
  