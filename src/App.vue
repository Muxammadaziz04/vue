<template>
  <main class="container d-flex">
    <div class="flex-grow-1 me-3">
      <img 
        src="./assets/logo.png" 
        alt="logo"
        v-if="isOpen"
        :style="{width: width + '%', height: height + '%', rotate: deg + 'deg'}"
      > 
      <p v-else="!isOpen">Image is closed</p>
    </div>
    <div class="flex-grow-1 d-flex align-items-start flex-column ms-3">
      <p class="h4 mt-3 fw-bold">Sizes</p>
      <label for="width" class="form-label">Width: {{ width }}%</label>
      <input 
        type="range" 
        class="form-range w-75" 
        id="width" 
        min="0" 
        max="100"
        v-model="width"
      >
      <label for="height" class="form-label">Height: {{ height }}%</label>
      <input 
        type="range" 
        class="form-range w-75" 
        id="height" 
        min="0" 
        max="100"
        v-model="height"
      >

      <p class="h4 mt-3 fw-bold">Rotate</p>
      <label for="rotate" class="form-label">Degrees: {{ deg }}°</label>
      <input 
        type="range" 
        class="form-range w-75" 
        id="rotate" 
        min="0" 
        max="360"
        v-model="deg"
      >

      <button 
        class="btn btn-success mt-3"
        @click="isOpen = !isOpen"
      >
        {{ isOpen ? 'Close' : 'Open' }}
      </button>
    </div>
  </main>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      width: 100,
      height: 100,
      deg: 0,
      isOpen: true
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
