<template>
  <main class="d-flex flex-column container">
    <h1 class="h1">Users list</h1>

    <div class="mb-3">
      <label for="search" class="form-label">Search user</label>
      <input class="form-control" v-model="value" type="search" id="search" placeholder="Name of user">
    </div>

    <table class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Gender</th>
          <th scope="col">ip-address</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user of findedUsers" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.ip_address }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import users from './data/users.json'

export default {
  name: 'App',
  data() {
    return {
      value: '',
      users
    }
  },
  computed: {
    findedUsers() {
      return users.filter(user => user.first_name.toLowerCase().includes(this.value.toLowerCase()))
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
