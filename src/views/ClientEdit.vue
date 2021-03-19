<template>
  <div>
    <h1>Client edit {{ clientEdit.firstname }}</h1>
    <p>{{error}}</p>
    <div class="form">
      <input type="text" name="firstname" id="firstname" v-model="clientEdit.firstname" class=""/>
      <input type="text" name="lastname" id="lastname" v-model="clientEdit.lastname" class=""/>
      <input type="email" name="email" id="email" v-model="clientEdit.email" class=""/>
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
    name: "ClientEdit",
    props: {
      client: Object,
    },
    data() {
      return {
        clientEdit: this.client,
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
        editClient: 'editClient',
      }),
      handleData() {
        this.data.firstname = this.clientEdit.firstname
        this.data.lastname = this.clientEdit.lastname
        this.data.email = this.clientEdit.email
        let params = [];
        params['id'] = this.clientEdit.id;
        params['data'] = this.data;
        this.editClient(params).then(() => {
          if (this.getRequestStatus === 200) {
            this.error = 'Success !'
          } else {
            this.error = 'There is an error'
          }
        })
      }
    },
    computed: {
      ...Vuex.mapGetters('client', {
        getRequestStatus: 'getRequestStatus'
      }),
    }
  }
</script>
