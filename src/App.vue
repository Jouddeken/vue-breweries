<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
  html,
  body,
  div,
  header,
  main,
  footer,
  aside,
  nav,
  section,
  aside,
  article,
  p,
  ul,
  ol,
  blockquote,
  address,
  form,
  fieldset,
  legend,
  input,
  textarea,
  select,
  picture,
  video,
  canvas,
  figcaption,
  figure {
    box-sizing: border-box;
    display: block;
    position: relative;
  }
  :before,
  :after {
    box-sizing: border-box;
    position: relative;
  }
  :first-child {
      margin-top: 0;
  }
  :last-child {
      margin-bottom: 0;
  }
  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 100%;
    height: 100%;
    line-height: 1.4;
    white-space: inherit;
    word-break: break-word;
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background-color: #fff;
    color: #000;
    height: auto;
    margin: 0;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100vh;
  }
</style>
