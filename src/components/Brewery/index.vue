<template>
  <a class="card" v-bind:href="data.website_url" target="_blank">
    <span class="number">{{ Number(index) + 1 }}</span>
    <h3 class="title">{{ data.name }}</h3>
    <p class="description">{{ data.city }}, {{ data.state }} &ndash; {{ data.country }}</p>
    <p class="meta"><em>Brewery type: {{ data.brewery_type }}</em></p>
    <span class="link-icon">
      <ExternalUrlIcon :height="24" :width="24" :color="'#4683ee'" />
    </span>
  </a>
</template>

<script>
import ExternalUrlIcon from '@/components/Icons/ExternalUrlIcon';

export default {
  name: 'Brewery',
  components: {
    ExternalUrlIcon,
  },
  props: ['data', 'index'],
};
</script>

<style scoped>
.card {
  border: 1px solid #eee;
  box-shadow: 3px 3px 5px 0px #f7f7f7;
  display: block;
  color: #222;
  margin: 1rem 0;
  padding: 2rem 4rem 2rem 1.5rem;
  position: relative;
  text-decoration: none;
}
.card:hover {
  border-color: #222;
}
.card:hover svg {
  fill: #222;
}
.card:hover .number {
  background-color: #222;
}
.title {
  margin-top: 0;
}
.meta {
  font-size: 0.875em;
  margin-bottom: 0;
}
.number {
  background-color: #4683ee;
  color: #fff;
  display: block;
  font-size: 0.875em;
  padding: 5px 7px 3px 6px;
  position: absolute;
  right: 99%;
  text-align: center;
  top: -5%;
  width: 1.2em;
}
.link-icon {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
</style>
