<template>
  <form class="m-auto" style="max-width: 500px" @submit.prevent="sendForm()">
    <h1 class="h1 mb-3">Form validation</h1>

    <!-- Name -->
    <div class="mb-3 text-start">
      <label for="name" class="form-label">Name</label>
      <input 
        type="text" 
        id="name" 
        placeholder="First name"
        :class="(v$.form.firstName.$error ? 'is-invalid' : '') + ' form-control'" 
        v-model.trim="form.firstName" 
        @blur="v$.form.firstName.$touch"
      />
      <span v-for="(error, index) of v$.form.firstName.$errors" :key="index" class="invalid-feedback">{{ error.$message }}</span>
    </div>

    <!-- Email -->
    <div class="mb-3 text-start">
      <label for="email" class="form-label">Email address</label>
      <input 
        type="email" 
        id="email" 
        placeholder="Email"
        :class="(v$.form.email.$error ? 'is-invalid' : '') + ' form-control'" 
        v-model.trim="form.email" 
        @blur="v$.form.email.$touch"
      />
      <span v-for="(error, index) of v$.form.email.$errors" :key="index" class="invalid-feedback">{{ error.$message }}</span>
    </div>

    <!-- Password -->
    <div class="mb-3 text-start">
      <label for="password" class="form-label">Password</label>
      <input 
        type="password" 
        id="password" 
        placeholder="Password"
        :class="(v$.form.password.$error ? 'is-invalid' : '') + ' form-control'" 
        v-model.trim="form.password" 
        @blur="v$.form.password.$touch"
      />
      <span v-for="(error, index) of v$.form.password.$errors" :key="index" class="invalid-feedback">{{ error.$message }}</span>
    </div>

    <!-- Select -->
    <div class="mb-3 text-start">
      <label for="select" class="form-label">Region</label>
      <select 
        id="select" 
        aria-label="Default select example"
        :class="(v$.form.password.$error ? 'is-invalid' : '') + ' form-control'" 
        v-model.trim="form.country" 
        @blur="v$.form.country.$touch"
      >
        <option v-for="(country, index) of countries" :key="index" :value="country">{{ country }}</option>
      </select>
      <span v-for="(error, index) of v$.form.country.$errors" :key="index" class="invalid-feedback">{{ error.$message }}</span>
    </div>

    <!-- Gender radio button -->
    <div class="form-check text-start mb-3">
      <input 
        type="radio" 
        name="flexRadioDefault" i
        id="male" 
        value="male"
        :class="(v$.form.gender.$error ? 'is-invalid' : '') + ' form-check-input'"  
        v-model="form.gender" 
        @blur="v$.form.gender.$touch"
      >
      
      <label class="form-check-label" for="male">
        Male
      </label>
    </div>
    <div class="form-check text-start">
      <input 
        type="radio" 
        name="flexRadioDefault" 
        id="female"
        value="female"
        :class="(v$.form.gender.$error ? 'is-invalid' : '') + ' form-check-input'" 
        v-model="form.gender" 
        @blur="v$.form.gender.$touch"
      >
      <label class="form-check-label" for="female">
        Female
      </label>
      <span v-for="(error, index) of v$.form.gender.$errors" :key="index" class="invalid-feedback">{{ error.$message }}</span>
    </div>

    <!-- Checkbox -->
    <div class="form-check d-flex justify-content-center mb-4">
      <input class="form-check-input me-2" type="checkbox" id="checkbox" v-model="form.subscribe" />
      <label class="form-check-label" for="checkbox"> Subscribe to our newsletter </label>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'

export default {
  name: 'App',
  setup() {
    return {v$: useVuelidate()}
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        password: '',
        country: '',
        gender: '',
        subscribe: false
      },
      countries: ['USA', 'Russia', 'Dubai', 'Uzbekistan']
    }
  },
  validations: {
    form: {
      firstName: { required, minLength: minLength(5) },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      country: { required },
      gender: { required },
    }
  },
  methods: {
    sendForm() {
      this.v$.form.$touch()
      if(!this.v$.form.$error){
        alert(JSON.stringify(this.form, null, 4))
      }
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
