<template>
  <header>
    <div class="wrapper">
      <router-link to="/" class="title-link"><h1>Vue discovery</h1></router-link>
      <nav>
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
  header {
    background-color: #1084ea;
  }
  .wrapper {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 0 auto;
    max-width: 1024px;
    padding: 1rem 2rem;
  }
  h1 {
    color: #fff;
    margin: 0;
  }
  nav {
    flex: 1;
  }
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0 -1rem 0 0;
    padding: 0;
  }
  .title-link {
    color: #fff;
    text-decoration: none;
  }
  .nav-link {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    padding: 1em;
  }
  .nav-link:hover {
    text-decoration: underline;
  }
</style>
