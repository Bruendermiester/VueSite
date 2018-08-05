<template>
  <div class="main">
    <div id="section-one">
      <div class="shade">
        <div class="header">
          <div class="column"><img src="../assets/JonLogo_White.png"></div>
          <div class="column">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="#/resume">RESUME</a></li>
              <li><a href="#/projects">PROJECTS</a></li>
              <li><a href="/" v-scroll-to="'#section-two'">ABOUT</a></li>
            </ul>
          </div>
        </div>
        <div class="title">
          <h1>Hi, I'm <span>{{ author }}</span></h1>
          <h2>{{ msg }}</h2>
        </div>
      </div>
    </div>
    <div id="section-two">
      <div class="about-block">
        <div class="info">
          <h1>About me</h1>
          <div class="about-title">{{ title }}</div>
          <div class="description">{{ description }}</div>
          <img src="../assets/profilePic.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Software Engineer / Web Developer / UI Designer',
      author: 'Jonathan Bruenderman',
      title: 'My name is Jonathan Bruenderman, I am a Software Engineer',
      description: 'I live in the greater Seattle area.'
    }
  }
}
</script>

<style scoped>
  #section-one {
    background-image: url("../assets/test.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    height: 100vh;
  }
  #section-two {
    height: 600px;
    background-color: #CCC;
  }
  .shade {
    background-color:rgba(0, 0, 0, 0.5);
    height: 100%;
  }
  .about-block {
    padding: 20px 20px 4px 20px;
    height: 95%;
  }
  .info {
    border: 2px solid #000;
    height: 95%;
  }
  .info img {
    width: 500px;
    height: 400px;
    float: left;
    margin: 0 0 0 50px;
  }
  .info h1 {
    font-size: 36;
    color: #000;
    text-align: left;
    padding: 20px;
    margin: 0;
    font-style: italic
  }
  .description {
    color: #000;
  }
  .header {
    display: flex;
  }
  .column {
    flex: 1
  }
  .header img {
    width: 30px;
    height: 30px;
    float: left;
    padding: 10px;
    margin: 0;
  }
  ul {
    display: flex;
    padding: 0;
    width: 75%;
    margin-top: 50px;
  }
  .header li {
    flex: 1;
    list-style: none;
  }
  .header a {
    color: #FFF;
  }
  .title {
    padding-top: 350px;
  }
  h1 {
    font-size: 42px;
  }
  h1, h2 {
    font-weight: normal;
  }
  h1 span {
    font-weight: bold;
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
    margin: 0 auto 30px;
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
  @media all and (max-width: 500px) {
    img {
      width: 200px;
      height: 200px;
    }
    .title {
      padding-top: 150px;
    }
    .title h2 {
      font-size: 16px;
    }
    .info img {
      width: 250px;
      height: 200px;
      float: left;
      margin: 35px 0 0 23px;
    }    
  }
</style>
