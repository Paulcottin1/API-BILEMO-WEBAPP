<template>
  <div class="container">
    <header class="jumbotron">
      <div>
        <h1 class="margin-bottom">Clients</h1>
        <p>{{error}}</p>
        <b-link @click="refresh" class="btn btn-primary"> Refresh </b-link>
        <b-link @click="$router.push('clientAdd')" class="btn btn-primary"> Add new client </b-link>
        <li v-for="client in getClients" v-bind:key="client.id" class="container container-flex">
          <h2>{{ client.firstname}} {{client.lastname}}</h2>
          <p> {{ client.email }}</p>
          <b-link @click="goToEdit(client.id)" class="btn btn-primary"> Edit </b-link>
          <b-link @click="goToDelete(client.id)" class="btn btn-primary"> Delete </b-link>
        </li>
      </div>
    </header>
  </div>

</template>

<script>
import Vuex from "vuex";

export default {
  name: "Clients",
  error: '',
  data() {
    return  {
    }
  },
  methods: {
    ...Vuex.mapActions('client', {
      setClient: 'setClient',
      deleteClient: 'deleteClient'
    }),
    goToEdit(id) {
      this.setClient(id).then(() => {
        this.$router.push({name: 'clientEdit', params: {client: this.getClient}});
      })
    },
    goToDelete(id) {
      this.deleteClient(id).then(() => {
        if (this.getRequestStatus === 204) {
          this.$router.go(0);
          this.error = 'Success !'
        } else {
          this.error = 'There is an error'
        }
      })
    },
    refresh() {
      this.$router.go(0);
    }
  },
  computed: {
    ...Vuex.mapGetters('client', {
      getClients: 'getClients',
      getClient: 'getClient',
      getRequestStatus: 'getRequestStatus'
    }),
    ...Vuex.mapActions('client', {
      setClients: 'setClients'
    }),
  },
  created() {
    this.setClients;
  },
}
</script>
