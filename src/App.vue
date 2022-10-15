<template>
  <main class="container">
    <Search @search="filteredProducts" />
    <div class="row mt-3">
      <ProductCard 
        v-for="product of products"
        :image="product.image"
        :price="product.price"
        :name="product.name"
        :desc="product.description" 
        :key="product.id"     
      />
    </div>
  </main>
</template>

<script>
import Search from './components/search'
import ProductCard from './components/Card'
import productsData from './mock/products.json'

export default {
  name: 'App',
  components: {
    Search,
    ProductCard
  },
  data() {
    return {
      products: productsData
    }
  },
  methods: {
    filteredProducts(value = '') {
      this.products = productsData.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
