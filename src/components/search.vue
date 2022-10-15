<template>
  <div class="container row mx-auto">
    <h1 class="col-3">Search card:</h1>
    <label class="col-3 d-flex align-items-center">
      <input class="form-control" type="text" v-model.trim="value" />
      <button class="btn btn-primary ms-3" @click="$emit('search', value)">Search</button>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CardSearch',
  data() {
    return {
      value: ''
    }
  }
}
</script>

