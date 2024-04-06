import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProductList from "@/views/ProductList.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import ShoppingCart from "@/views/ShoppingCart.vue";
import CheckoutPage from "@/views/CheckoutPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: HomePage,
    },
    {
      path: "/products",
      name: "product-list",
      component: ProductList,
    },
    {
      path: "/products/:id",
      name: "product-detail",
      component: ProductDetail,
    },
    {
      path: "/cart",
      name: "shopping-cart",
      component: ShoppingCart,
    },
    {
      path: "/checkout",
      name: "checkout-page",
      component: CheckoutPage,
    },
  ],
});

export default router;
