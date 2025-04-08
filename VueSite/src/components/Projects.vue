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
                    <div class="image-container">
                        <div class="display-img" v-bind:style="{ backgroundImage: 'url(' + project.displayImg + ')' }"></div>
                    </div>
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
      <h1>Description</h1>
      <h3>{{ displayObject.description }}</h3>
      <div class="detail-wrapper">
        <div class="img-block">
          <div class="image" v-bind:style="{ backgroundImage: 'url(' + displayObject.displayImg + ')' }"></div>
          <div class="image" v-for="(image, index) in displayObject.images" :key="index" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></div>
        </div>
      </div>
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
          displayImg: require('../assets/wolvesden1.png'),
          descriptionTitle: 'Wolves Den GDC',
          images: [
            require('../assets/wolvesden2.png'),
            require('../assets/wolvesden3.png'),
            require('../assets/wolvesden4.png')
          ],
          description: 'I helped create the UI for the WolvesDen live page event for GDC 2025',
          title: 'Wolves Den GDC 2025',
          show: 'detailView'
        },          
        {
          displayImg: require('../assets/background2.png'),
          descriptionTitle: 'Isles of the Arcane',
          images: [
            require('../assets/taverns1.png'),
            require('../assets/taverns2.png'),
            require('../assets/taverns3.png')
          ],
          description: 'Isles of the Arcane is a mod of Pirate Nation that I built to teach myself unity game dev. It is a multiplayer top down hero shooter set in the universe of Pirate Nation.',
          title: 'Isles of the Arcane',
          link: 'https://islesofthearcane.com/'
        },  
        {
          displayImg: require('../assets/taverns1.png'),
          descriptionTitle: 'Pirate Nation Taverns',
          images: [
            require('../assets/taverns2.png'),
            require('../assets/taverns3.png')
          ],
          description: 'Tarverns is a tool meant for the Pirate Nation community to help build decks or learn information of the game, based on the onchain infustruction that Proof of Play is creating.',
          title: 'Taverns',
          show: 'detailView'
        },        
        {
          displayImg: require('../assets/IMHome.png'),
          descriptionTitle: 'IlluvialMaster',
          images: [
            require('../assets/IMMaketplace.png'),
            require('../assets/IMStats.png'),
            require('../assets/IMStats2.png'),
            require('../assets/deckbuilder.png'),
            require('../assets/teambuilder.png'),
            require('../assets/resources.png'),
            require('../assets/collections.png')
          ],
          description: 'Welcome to Illuvialmaster.com, your go-to destination for essential tools focused on the Illuvium games Arena, Beyond, Zero, and Overworld. We use cutting-edge Machine Learning and AI to provide market analysis and integrate seamlessly with Immutable X API. ',
          title: 'IlluvialMaster',
          show: 'detailView'
        },
        {
          displayImg: require('../assets/connect5.png'),
          descriptionTitle: 'Connect Five personal game version',
          description: 'This is a game that I loved playing in college. The goal is to get the highest score you can by connecting five similar colors in a row. My algorithms teacher had us play it to create an algorithm to help get the highest score possible. Test your skills!',
          title: 'Connect Five',
          link: '#/connectFive'
        },
        {
          displayImg: require('../assets/lolgsMain.png'),
          images: [
            require('../assets/currentGame.png'),
            require('../assets/matchDetailView.png'),
          ],
          descriptionTitle: 'LOL.GS: Vue.js Single Page Web Application',
          description: 'LOL.GS is meant to be an easy to use website for getting stats and game knowledge for past or present League of Legends games. Hopefully it will encourage more people to understand the game better and give insights on what they are doing right and what they are doing wrong. The idea is to create a clean UI with less ads and better stats than the leading applications.',
          title: 'LOL.GS',
          show: 'detailView'
        },
        {
          displayImg: require('../assets/recipeApp.png'),
          images: [
            require('../assets/recipeCard.png'),
            require('../assets/recipeCreate.png'),
          ],
          descriptionTitle: 'Cook Book / Recipe Web App',
          description: 'This project I created when I built a MEAN (MongoDB, Express, Angularjs, Node) stack psersonal website. I created this fully responsive web app to easily add and remove family recipes',
          title: 'Cook Book',
          show: 'detailView'
        },            
        {
          displayImg: require('../assets/contentLauncherHome.png'),
          images: [
            require('../assets/contentLauncherUrl.png'),
            require('../assets/contentLauncherCreate.png'),
            require('../assets/contentLauncherCommitted.png')
          ],
          descriptionTitle: 'Content Launcher',
          description: 'Internal tool for helping launch ads on various platforms. This tool allowed users to go from launching multiple ads a day, to hundreds on different platforms.',
          title: 'Content Launcher',
          show: 'detailView'
        },
        {
          displayImg: require('../assets/Stuff-SERP-4colV2_jy.png'),
          images: [
            require('../assets/Social_view.png'),
            require('../assets/Metadata_view.png'),
            require('../assets/Monatization_view.png')
          ],
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
    min-height: 100vh;
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
      border-bottom: 1px solid #CCC;
      padding-bottom: 10px;
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
      margin: 50px auto;
  }
  .display-img {
    background-size: contain;
    background-repeat: no-repeat;
    height: 150px;
    margin-top: 20px;
  }
  .main-img {
    flex: 1;
    max-width: 500px;
    max-height: 500px;
    background-size: contain;
    background-repeat: no-repeat;
    height: 415px;      
    margin: 10px;
  }
  .img-block {
      flex: 1;
  }
  .img1 {
    flex: 1;
    width: 90%;
    max-height: 50%;
    padding: 0 5px 0;
    height: 210px;
    background-size: cover;
    margin: 10px;
  }
  .img2 {
    flex: 1;
    width: 90%;
    max-height: 50%;
    padding: 5px;
    height: 210px;
    background-size: cover;
    margin: 10px;
  }
  .detail-view a {
      color: #FFF;
      float: left;
      text-decoration: none;
      font-size: 20px;
  }
  .detail-view h3 {
      max-width: 1000px;
      margin: 0 auto;
      text-align: left;
      padding: 0 25px;
  }
  .detail-view h1 {
    margin-top: 50px;
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
    /* Add this CSS for the flex-wrapped container */
    .img-block {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }

  /* Style for each image in the container */
  .image {
    flex: 1; /* Adjust flex property as needed */
    width: auto; /* Adjust the width as per your layout */
    margin: 10px; /* Adjust the margin as needed for spacing */
    background-size: contain;
    background-repeat: no-repeat;
    height: 210px; /* Adjust the height as needed */
    min-width: 400px;
    min-height: 400px;
  }
@media all and (max-width: 500px) {
  .menu {
     display: none;
  }
  .mobile-menu-button {
      display: block;
  }    
  .main-img {
    max-width: 100%;
    max-height: 400px;
    width: 100%;      
  }
  .img-block {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      max-width: 100%;
  }
  .image-container img {
      width: 300px;
      height: 300px;
  }
  .detail-wrapper {
      height: auto;
      display: block;
      width: auto;
  }
  .img1, .img2 {
      background-size: contain;
      background-repeat: no-repeat;
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
      font-size: 24px;
  }
  .project {
    flex-direction: column;
  }
  .display-img {
    height: 240px;
  }
  .image {
    min-height: 275px;
  }
}
</style>
