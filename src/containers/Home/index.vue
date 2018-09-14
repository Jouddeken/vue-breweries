<template>
  <div class="wrapper">
    <h1>Search for breweries in the USA</h1>
    <form class="form">
      <input class="form--input" type="text" id="city" name="city" v-model="city" />
      <button class="form--submit" type="submit" v-on:click.prevent="fetchBreweries">Search</button>
    </form>
    <ul class="list">
      <li class="list--item" v-for="(brewery, index) in breweries" :key="index">
        <Brewery :data="brewery" :index="index" />
      </li>
    </ul>
  </div>
</template>

<script>
import Brewery from '@/components/Brewery';
import { FETCH_BREWERIES } from '@/store/actions';

export default {
  name: 'Home',
  components: {
    Brewery,
  },
  data() {
    return {
      city: '',
    };
  },
  methods: {
    fetchBreweries() {
      this.$store.dispatch({
        type: FETCH_BREWERIES,
        payload: this.city,
      });
      this.city = '';
    },
  },
  computed: {
    breweries() {
      return this.$store.getters.breweries.data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  max-width: 704px;
  margin: 2rem auto 5rem;
  padding: 0 2rem;
}
.form {
  display: flex;
  flex-flow: row nowrap;
}
.form--input {
  border: 2px solid #1084ea;
  border-right: 0;
  flex: 1;
  font-size: 1.25rem;
  padding: 0.5em;
}
.form--input:focus {
  outline: 0;
}
.form--submit {
  border: 0;
  background-color: #1084ea;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  padding-left: 1.5em;
  padding-right: 1.5em;
  text-transform: uppercase;
}
.form--submit:focus {
  outline: 0;
}
.form--submit:hover {
  cursor: pointer;
}
.form--submit:focus,
.form--submit:hover {
  background-color: #0f5b9e;
}
.list {
  list-style-type: none;
  margin: 2rem 0 0;
  padding: 0;
}
.list--item {
  margin: 0;
  padding: 0;
}
</style>
