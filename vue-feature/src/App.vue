<template>
  <div id="app">
    <nav>
      <router-link to="/">v-model</router-link><br>
      <router-link to="/vmodel">v-model practice</router-link><br>
      <router-link to="/vmodel2">v-model move item</router-link><br>
      <router-link to="/force-update">force update example</router-link><br>
      <router-link to="/about">watch & computed</router-link><br>
      <router-link to="/spread">spread</router-link><br>
      <router-link to="/vuex">vuex</router-link><br>
      <router-link to="/vuex2">vuex2</router-link><br>
      <router-link to="/props">props</router-link><br>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
<script setup>
</script>