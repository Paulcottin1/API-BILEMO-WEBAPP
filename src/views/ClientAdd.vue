<template>
  <div>
    <h1>Add new client</h1>
    <p>{{error}}</p>
    <p>{{client.firstname}} {{client.lastname}} {{client.email}}</p>
    <div class="form">
      <input type="text" name="firstname" id="firstname" v-model="data.firstname" class=""/>
      <input type="text" name="lastname" id="lastname" v-model="data.lastname" class=""/>
      <input type="email" name="email" id="email" v-model="data.email" class=""/>
      <b-link class="btn btn-primary" @click="handleData">Save</b-link>
    </div>
    <div>
      <b-link class="btn btn-primary" @click="$router.push({name: 'clients'})">Back</b-link>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: "ClientAdd",
  data() {
    return {
      client: '',
      error: '',
      data: {
        firstname: '',
        lastname: '',
        email: '',
      }
    }
  },
  methods: {
    ...Vuex.mapActions('client', {
      addClient: 'addClient',
    }),
    handleData() {
      let params = [];
      params['data'] = this.data;
      this.addClient(params).then(() => {
        if (this.getRequestStatus === 201) {
          this.error = 'Success !'
          this.client = this.getClient
        } else {
          this.error = 'There is an error'
        }
      })
    }
  },
  computed: {
    ...Vuex.mapGetters('client', {
      getRequestStatus: 'getRequestStatus',
      getClient: 'getClient'
    }),
  }
}
</script>
