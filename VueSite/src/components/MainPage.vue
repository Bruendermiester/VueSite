<template>
  <div class="hello">
    <img src="../assets/jonLogo_White.png">
    <h1>{{ msg }}</h1>
    <h2> by <br><br> {{ author }} </h2>

    <a href="#/game">
      <div class="gameApp">
        <h1>My Game</h1>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to My Vue.js Website',
      author: 'Jonathan Bruenderman'
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  h2 {
    font-style: italic;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  .gameApp {
    height: 200px;
    width: 200px;
    margin: 0 auto;
    background-image: url('../assets/gameBoard.png');
    background-size: cover; 
    background-repeat: no-repeat;
  }
  a .gameApp h1 {
    color: #000;
    height: 30px;
    width: 150px;
    margin: 0 auto;
    padding-top: 75px;
  }
  img {
    margin-top: 60px;
  }
</style>
