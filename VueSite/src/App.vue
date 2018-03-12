<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
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
@media all and (max-width: 500px) {
  body {
    background-size: auto;
  }
}
</style>
