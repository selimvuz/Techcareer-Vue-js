<template>
  <div class="container mt-5">
    <h2>Sepetiniz</h2>
    <div v-if="cartItems.length > 0">
      <ul class="list-group">
        <li class="list-group-item" v-for="item in cartItems" :key="item.id">
          <div class="row align-items-center">
            <div class="col-md-4">
              <img :src="item.image" class="img-fluid" :alt="item.name">
            </div>
            <div class="col-md-8">
              <h5>{{ item.name }}</h5>
              <p>{{ item.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="badge badge-primary badge-pill">{{ item.price }}</span>
                <button class="btn btn-danger btn-sm" @click="removeFromCart(item)">Kaldır</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <p v-else class="mt-3">Sepetiniz boş.</p>
  </div>
  </template>
  
  <script>
  export default {
    name: 'ShoppingCart',
    data() {
      return {
        cartItems: []
      };
    },
    mounted() {
      this.loadCart();
    },
    methods: {
      loadCart() {
        this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      },
      removeFromCart(itemToRemove) {
        this.cartItems = this.cartItems.filter(item => item.id !== itemToRemove.id);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    }
  };
  </script>
  
  <style scoped>
  .list-group-item {
    margin-bottom: 10px;
    background-color: #f8f9fa;
  }
  .img-fluid {
    max-width: 100px;
    height: auto;
  }

  span {
    color: black;
  }
  </style>
  