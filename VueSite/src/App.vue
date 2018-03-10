<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Arial, sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
img {
  margin-top: 60px;
}
</style>
