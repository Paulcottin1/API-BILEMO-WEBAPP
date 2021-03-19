<template>
  <div class="container">
    <header class="jumbotron">
      <div>
        <h1 class="margin-bottom">Clients</h1>
        <b-link @click="refresh" class="btn btn-primary"> Refresh </b-link>
        <b-link @click="$router.push('clientAdd')" class="btn btn-primary"> Add new client </b-link>
        <li v-for="client in clients" v-bind:key="client.id" class="container container-flex">
          <h2>{{ client.firstname}} {{client.lastname}}</h2>
          <p> {{ client.email }}</p>
          <b-link @click="goToEdit(client.id)" class="btn btn-primary"> Edit </b-link>
        </li>
      </div>
    </header>
  </div>

</template>

<script>
import Vuex from "vuex";

export default {
  name: "Clients",
  data() {
    return  {
      clients: '',
      client: '',
    }
  },
  methods: {
    ...Vuex.mapActions('client', {
      setClient: 'setClient',
    }),
    goToEdit(id) {
      this.setClient(id).then(() => {
        this.client = this.getClient
        this.$router.push({name: 'clientEdit', params: {client: this.client}});
      })
    },
    refresh() {
      this.clients = this.getClients;
    }
  },
  computed: {
    ...Vuex.mapGetters('client', {
      getClients: 'getClients',
      getClient: 'getClient'
    }),
    ...Vuex.mapActions('client', {
      setClients: 'setClients'
    }),
  },
  created() {
    this.setClients;
    this.clients = this.getClients;
  },
}
</script>