<template>
  <div class="main">
    <div id="section-one">
        <div class="header">
          <div class="column"><img src="../assets/JonLogo_White.png"></div>
          <div class="column">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="#/resume">RESUME</a></li>
              <li><a href="#/projects">PROJECTS</a></li>
              <li><a href="#" v-scroll-to="'#section-two'">ABOUT</a></li>
            </ul>
          </div>
        </div>
        <div class="project-wrapper" v-if="view == 'projects'">
            <div class="project-container" v-for="project in projects">
                <h2 align='left'>{{ project.title }}</h2>
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
            <h1><span><a target="_self" href="#/projects">Back</a></span>{{ displayObject.title }}</h1>
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
                displayImg: require('../assets/gameBoard.png'),
                description: 'test',
                title: 'Connect Five',
                show: 'detailView'
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
                displayImg: require('../assets/gameBoard.png'),
                description: 'test',
                title: 'Connect Five',
                show: 'detailView'
            },                                                            
                                                        
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
  }
  .project-wrapper {
    margin: 100px auto;
    width: 75%;
  }
  .project-container {
      width: 75%;
      margin: 20px 0 30px 20px;
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
      max-width: 25%;;
      max-height: 45%;   
      padding: 5px;   
  }
  .detail-view a {
      color: #FFF;
      float: left;
      text-decoration: none;
      font-size: 20px;
  }
@media all and (max-width: 500px) {
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
  .detail-wrapper {
      height: auto;
  }  
}  
</style>
