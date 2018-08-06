<template>
  <div class="main">
    <div class="mobile-menu" v-bind:class="{ show: menuTrigger}">
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="#/resume">RESUME</a></li>
        <li><a href="#/projects">PROJECTS</a></li>
        <li><a href="/">ABOUT</a></li>
      </ul>      
    </div>      
    <div id="section-one">
        <div class="header">
          <div class="column"><img src="../assets/JonLogo_White.png"></div>
          <div class="column menu">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="#/resume">RESUME</a></li>
              <li><a href="#/projects">PROJECTS</a></li>
              <li><a href="/">ABOUT</a></li>
            </ul>
          </div>
          <div class="mobile-menu-button" v-on:click="menuTrigger = !menuTrigger"></div>
        </div>
        <div class="project-wrapper" v-if="view == 'projects'">
            <div class="project-container" v-for="project in projects">
                <h2>{{ project.title }}</h2>
                <a class="project"v-on:click="view=project.show; displayObject = project" v-bind:href="project.link">
                    <div class="image-container"><img v-bind:src="project.displayImg"></div>
                    <div class="project-description">
                        <h2>{{ project.descriptionTitle }}</h2>
                        <h3>{{ project.description }}</h3>
                    </div>
                </a>
            </div>                                                   
        </div>
        <div class="detail-view" v-if="view == 'detailView'">
            <div class="project-title">
                <span><a v-on:click="view='projects'">Back</a></span>
                <h1>{{ displayObject.title }}</h1>
            </div>
            <div class="detail-wrapper">
                <img class="main-img" v-bind:src="displayObject.displayImg">
                <div class="img-block">
                    <img class="img1"  v-bind:src="displayObject.img1">
                    <img class="img2"  v-bind:src="displayObject.img2">
                    <img class="img3"  v-bind:src="displayObject.img3">
                </div>
            </div>
             <h1>Description</h1>
             <h3>{{ displayObject.description }}</h3>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
        menuTrigger: false,
        view: 'projects',
        displayObject: {},
        projects: [
            {
                displayImg: require('../assets/gameBoard.png'),
                descriptionTitle: 'Connect Five personal game version',
                description: 'This is a game that I loved playing in college. The goal is to get the highest score you can by connecting five similar colors in a row. My algorithms teacher had us play it to create an algorithm to help get the highest score possible. Test your skills!',
                title: 'Connect Five',
                link: '#/connectFive'
            },
            {
                displayImg: require('../assets/recipeApp.png'),
                img1: require('../assets/recipeCard.png'),
                img2: require('../assets/recipeCreate.png'),
                img3: require('../assets/recipeMobile.png'),
                descriptionTitle: 'Cook Book / Recipe Web App',
                description: 'This project I created when I built a MEAN (MongoDB, Express, Angularjs, Node) stack psersonal website. I created this fully responsive web app to easily add and remove family recipes',
                title: 'Cook Book',
                show: 'detailView'
            },
            {
                displayImg: require('../assets/contentLauncherHome.png'),
                img1: require('../assets/contentLauncherUrl.png'),
                img2: require('../assets/contentLauncherCreate.png'),
                img3: require('../assets/contentLauncherCommitted.png'),
                descriptionTitle: 'Content Launcher',
                description: 'Internal tool for helping launch ads on various platforms. This tool allowed users to go from launching multiple ads a day, to hundreds on different platforms.',
                title: 'Content Launcher',
                show: 'detailView'
            },
            {
                displayImg: require('../assets/Stuff-SERP-4colV2_jy.png'),
                img1: require('../assets/Social_view.png'),
                img2: require('../assets/Metadata_view.png'),
                img3: require('../assets/Monatization_view.png'),
                description: 'Signals was a serp page created with angularjs and a python/flash server. It would ingest content from publishers and crunch internal algorithms to show you how well you content was doing. It also allowed you to sort and search for the best data.',
                title: 'Signals',
                show: 'detailView'
            }                                                                                                     
        ]
    }
  }
}
</script>

<style scoped>
  #section-one {
    background-image: url("../assets/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 20px;
  }
  .header {
    display: flex;
  }
  .column {
    flex: 1;
    padding: 5px;
  }
  #tech-skills ul {
    display: flex;
  }
  .header img {
    width: 30px;
    height: 30px;
    float: left;
    padding: 10px;
    margin: 0;
  }
  .header ul {
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
    text-decoration: none;
  }
  .project-wrapper {
    margin: 100px auto;
    width: 75%;
  }
  .project-container {
      width: 75%;
      margin: 20px 0 30px 20px;
  }
  .project-container h2 {
      text-align: left;
  }
  .project {
      display: flex;
      flex-wrap: wrap;
      text-decoration: none;
      color: #FFF;
  }
  .project:hover {
      box-shadow: 0px 10px 110px -32px rgba(255,255,255,1);
      cursor: pointer;
  }
  .project-container h2 {
      margin: 0 0 5px 0;
  }
  .image-container {
      flex: 1;
      order: 1;
  }
  .image-container img {
      width: 210px;
      height: 210px;
  }
  .project-description {
      flex: 4;
      order: 2;
  }
  .project-description h2, .project-description h3 {
      margin: 20px;
      text-align: left;
  }
  .project-description h3 {
      font-weight: normal;
  }
  .detail-view {
      margin-bottom: 200px;
  }
  .detail-wrapper {
      display: flex;
      flex-wrap: wrap;
      width: 85%;
      margin: 0 auto;
      max-height: 800px;
  }
  .main-img {
      flex: 1;
      max-width: 50%;
      max-height: 50%;
  }
  .img-block {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      max-width: 50%;
      max-height: 50%;
  }
  .img1 {
    flex: 1;
    width: 90%;
    max-height: 50%;
    padding: 0 5px 0;
  }
  .img2 {
      flex: 1;
      width: 45%;
      max-height: 45%;
      padding: 5px;
  }
  .img3 {
      flex: 1;
      max-width: 45%;;
      max-height: 45%;   
      padding: 5px;   
  }
  .detail-view a {
      color: #FFF;
      float: left;
      text-decoration: none;
      font-size: 20px;
  }
  .detail-view h3 {
      max-width: 800px;
      margin: 0 auto;
      text-align: left;
  }
  .project-title {
      width: 85%;
      margin: 0 auto;
  }
  .project-title span {
      cursor: pointer;
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
    background-image: url('../assets/background.jpg');
    background-size: cover; 
    background-repeat: no-repeat;
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
  .main-img {
      flex: 1;
      max-width: 100%;
      max-height: 400px;
  }
  .img-block {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      max-width: 100%;
      max-height: 400px;
  }
  .image-container img {
      width: 300px;
      height: 300px;
  }
  .detail-wrapper {
      height: auto;
  }
  .project-wrapper {
      width: 95%;
  }
  .project-container {
      width: 88%;
      margin: 0 auto;
  }
  .project-container h2 {
      text-align: center;
  }
  .project-description h2 {
      font-size: 18px; 
  }  
  .project-description h3 {
      font-size: 14px; 
  }
}  
</style>
