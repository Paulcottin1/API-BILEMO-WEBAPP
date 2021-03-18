<template>
  <div class="container">
    <header class="jumbotron">
      <h1 class="margin-bottom">Clients</h1>
      <li v-for="client in clients" v-bind:key="client.id" class="container container-flex">
        <h2>{{ client.firstname}} {{client.lastname}}</h2>
        <p> {{ client.email }}</p>
      </li>
    </header>
  </div>

</template>

<script>
import Vuex from "vuex";

export default {
  name: "Clients",
  data() {
    return  {
      clients: ''
    }
  },
  computed: {
    ...Vuex.mapActions('client', {
      setClients: 'setClients'
    }),
    ...Vuex.mapGetters('client', {
      getClients: 'getClients'
    })
  },
  created() {
    this.setClients
    this.clients = this.getClients
  },
}
</script>