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
              <li><a href="/" >ABOUT</a></li>
            </ul>
          </div>
          <div class="mobile-menu-button" v-on:click="menuTrigger = !menuTrigger"></div>
        </div>
        <div class="sheet">
            <div id="center">
	            <div id="resume">
	                <h1 align="center"> Jonathan Bruenderman </h1><hr><hr>
                    <h4 align="center">Email: JonathanBruenderman@gmail.com <br>Website: JonathanBruenderman.com<br>Cell: (360) 448-5800</h4><hr>
	            </div>
	            <div id="summary">
                    <h3>Summary</h3>
	                <p>Results-driven professional with a strong background in computer design and problem-solving. Committed to constant improvement and embodying a growth mindset. Exceptional time management skills and attention to detail. Adept in various programming languages and frameworks, with a passion for delivering high-quality solutions.</p><hr>
	            </div>
	            <div id="tech-skills">
	                <p>
                        <h3>Skill Highlights</h3>
	                    <ul style="list-style-type:disc">
                            <div class="column">
                                <li> Backend: C#, Python, Node </li>
                                <li> Frontend: Angular, React, Vue, Typscript</li>
                                <li> Databases: PostgresSQL, MongoDB, Snowflake, OpenSearch</li>
                                <li> Mobile: Flutter </li>
                            </div>
                            <div class="column">
                                <li> Version Control: Git</li>
                                <li> Testing: Jasmine, Mocha, Karma, Cypress</li>
                                <li> Cloud: Firebase, AWS(Amazon Web Services) </li>
                            </div>
	                    </ul>
	                </p>
	            </div><hr>
	            <div id="projects">
	                <div class="project">
                        <h3>Experience</h3>
                        <p>
	                        <b>Softwar Engineer - Aug 2018 to Aug 2023</b><br>
                            <b>System 1</b>
	                        <ul>
	                            <li>Ad Network Internal Tools</li>
	                            <ul>
                                <li>Ad Campaign Content Launcher (Facebook, Gemini, Outbrain, etc) </li>
                                <li>Angularjs Front-end</li> 
                                <li>Python, Flash Back-end server</li>
                              </ul>
	                            <br>
	                        </ul>
	                    </p>                        
                        <p>
	                        <b>Assosciate Softwar Engineer - Nov 2015 to Aug 2018</b><br>
                            <b>System 1</b>
	                        <ul>
	                            <li>React/Redux quiz platform</li>
                                <li>Multi page internal application</li>
	                            <ul>
                                    <li>Ad Campaign Content Launcher (Facebook, Gemini, Outbrain, etc) </li>
                                    <li>Angularjs Front-end</li> 
                                    <li>Python, Flash Back-end server</li>
                                </ul>
	                            <li>Vuejs GDN Ad Campaign tool</li>
                                <li>MVC .NET Search Business</li>
                                <ul>
                                    <li>Front-end AB-tests </li>
                                    <li>20+ search sites</li> 
                                    <li>Javascript client side search results</li>
                                </ul>
	                            <br>
	                        </ul>
	                    </p>
	                    <p>
	                        <b>Side Projects</b><br>
                          <ul>
	                            <b> IlluvialMaster</b>
                              <li> Fan website for the IP of Illuvium </li>
	                            <li> Digital Marketplace </li>
                              <li> Reactjs, Python, AWS, neural net analytics </li>
	                            <br>
	                        </ul>                        
	                        <ul>
                              <b>Connect 5</b>
	                            <li> Vuejs game logic</li>
                              <li> Firebase database </li>
	                            <br>
	                        </ul>
	                    </p>                        
	                </div>
	            </div><hr>
                <div id="other-skills">
	                <p>
	                    <h3>Education</h3>
	                    <ul style="list-style-type:disc">
	                        <li> <b>Assosicate in Science:</b> Clark Community College, Vancouver WA </li>
	                        <li> <b>Bachelor of Science:</b> Western Washington University, Bellingham WA</li>
	                    </ul>
	                </p>
	            </div>
	        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
        menuTrigger: false,
    }
  }
}
</script>

<style scoped>
  .sheet {
      background-color: #FFF;
      width: 60%;
      margin: 0 auto;
      border: 1px solid #000;
      text-align: left;
      color:#000;
  }
  #center {
      padding: 20px;
  }
  #section-one {
    background-image: url("../assets/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
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
    .sheet {
        width: 95%;
    }
    #tech-skills ul {
        padding: 0 5px 0 0
    }
}  
</style>
