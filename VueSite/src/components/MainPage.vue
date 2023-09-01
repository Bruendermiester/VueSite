<template>
  <div class="main">
    <div class="mobile-menu" v-bind:class="{ show: menuTrigger}">
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="#/resume">RESUME</a></li>
        <li><a href="#/projects">PROJECTS</a></li>
        <li><a href="/" v-scroll-to="'#section-two'">ABOUT</a></li>
      </ul>      
    </div>
    <div class="sections">
      <div id="section-one">
        <div class="shade">
          <div class="header">
            <div class="column"><img src="../assets/JonLogo_White.png"></div>
            <div class="column menu">
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="#/resume">RESUME</a></li>
                <li><a href="#/projects">PROJECTS</a></li>
                <li><a href="/" v-scroll-to="'#section-two'">ABOUT</a></li>
              </ul>
            </div>
            <div class="mobile-menu-button" v-on:click="menuTrigger = !menuTrigger"></div>
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
            <div class="about">
              <img src="../assets/profilePic.jpg">
              <div class="about-title">{{ title }}</div>
            </div>
          </div>
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
      menuTrigger: false,
      msg: 'Software Engineer / Web Developer / UI Designer',
      author: 'Jonathan Bruenderman',
      title: '  My name is Jonathan Bruenderman, I am a Software Engineer. I have 9 years of experience as a  ' +
             'full stack developer, mainly focused on building and maintaining web api interterfaces and applications with a focus with ' +
             'Javascript and Python. I have used most of the current front-end frameworks including Vue.js, Angular.js, React.js. ' + 
             'However the thing I take the most pride in is my communication and organisational skills.'
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
  }
  .info img {
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
    padding: 20px;
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
  .about {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
  }
  .about-title {
    color: #000;
    flex: 4;
    text-align: left;
    margin: 30px;
    font-size: 24px;
  }
  .about img {
    flex: 1;
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
  img {
    margin-top: 60px;
  }
  .mobile-menu-button {
    display: none;
    margin: 20px;
    background-image: url('../assets/hamburger.png');
    background-size: cover; 
    background-repeat: no-repeat;
    height: 30px;
    width: 30px;
  }
  .mobile-menu {
    width: 75%;
    height: 100%;
    position: absolute;
    left: -75%;
    background-color: #000;
    opacity: .9;
    transition: all 1s;
    border-right: 2px solid black;
    top: 0;    
  }
  .show {
    left: 0;
  }
  .mobile-menu ul {
    text-align: left;
    float: left;
    display: inline;
    list-style: none;
    margin: 45px;
  }
  .mobile-menu li {
    height: 60px;
  }  
  .mobile-menu li a {
    color: #FFF;
    font-size: 25px;
    text-decoration: none;
  }  
  @media all and (max-width: 500px) {
    .menu {
      display: none;
    }
    .mobile-menu-button {
      display: block;
    }
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
      height: 250px;
      margin: 0;
      width: 100%
    }    
  }
</style>
