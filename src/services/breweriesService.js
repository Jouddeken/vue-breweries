import Vue from 'vue';

const fetchBreweries = city =>
  Vue.axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`).catch((error) => {
    throw new Error(error);
  });

export default fetchBreweries;

// export default {
//   get(params) {
//     console.log(params);
//     return Vue.axios.get('https://api.openbrewerydb.org/breweries').catch((error) => {
//       throw new Error(error);
//     });
//   },
// };
