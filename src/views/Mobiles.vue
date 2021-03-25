<template>
  <div class="container">
    <header class="jumbotron">
      <h1 class="margin-bottom">Mobiles</h1>
      <li v-for="mobile in mobiles" v-bind:key="mobile.id" class="container container-flex">
        <div class="flex">
          <h2>{{mobile.name}}</h2>
          <h3>{{mobile.price}}€</h3>
        </div>
        <div>
          <p>{{mobile.description}}</p>
        </div>
      </li>
    </header>
  </div>
</template>

<script>
  import MobileService from '../services/mobile.service';

  export default {
    name: 'Mobiles',
    data() {
      return {
        mobiles: ''
      };
    },
    mounted() {
      MobileService.getMobiles().then(
          response => {
            this.mobiles = response.data['hydra:member'];
          },
          error => {
            this.mobiles =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      );
    }
  };
</script>

<style>
.flex {
  display:flex;
  flex-direction: column;
  flex: 50%;
}

.container-flex div {
  flex: 20%;
}
.container-flex {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: #2c3e50 1px solid;
}

.margin-bottom {
  margin-bottom: 30px;
}
</style>
