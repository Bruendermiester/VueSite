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
        <div class="sheet">
            <div id="center">
	            <div id="resume">
	                <h1 align="center"> Jonathan Bruenderman </h1><hr><hr>
                    <h4 align="center">Email: JonathanBruenderman@gmail.com <br>Cell: (360) 448-5800</h4><hr>
	            </div>
	            <div id="summary">
                    <h3>Summary</h3>
	                <p> A results-driven, information finding individual. Strong and confident with computer design and problem solving skills. I pride myself on my time management skills and attention to detail.</p><hr>
	            </div>
	            <div id="tech-skills">
	                <p>
                        <h3>Skill Highlights</h3>
	                    <ul style="list-style-type:disc">
                            <div class="column">
                                <li> Languages: C#, C++, C, Java, Python </li>
                                <li> Databases: SQL, MongoDB, postgress</li>
                                <li> Front End: HTML, CSS, JavaScript </li>
                                <li> Frameworkes: AngularJS, React/Redux, Vuejs</li>
                            </div>
                            <div class="column">
                                <li> Version Control: Git</li>
                                <li> Testing: Jasmine, Mocha</li>
                                <li> IDE's: Visual Studios, Exlipse, Eric, Sublime Text </li>
                                <li> Frameworks: ASP.NET MVC</li>
                            </div>
	                    </ul>
	                </p>
	            </div><hr>
	            <div id="projects">
	                <div class="project">
                        <h3>Experience</h3>
                        <p>
	                        <b>Assosciate Softwar Engineer - Nov 2015 to Current</b><br>
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
	                        <b>Intern Front-end Web Developer - Feb 2015 to Nov 2015</b><br>
                            <b>Infospace</b>
	                        <ul>
	                            <li> Search to Content web design </li>
	                            <li> HTML, CSS, Javascript </li>
	                            <li> Angularjs internal platform tool</li>
	                            <br>
	                        </ul>
	                    </p>
	                    <p>
	                        <b>Side Project- Connect 5</b><br>
                            <b>Personal </b>
	                        <ul>
	                            <li> Vuejs game logic</li>
                                <li> Firebase database </li>
	                            <li> <a href="https://jonathanbruenderman.com/#/connectFive">https://jonathanbruenderman.com/#/connectFive</a> </li>
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
    }
  }
}
</script>

<style scoped>
  .sheet {
      background-color: #FFF;
      width: 50%;
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
@media all and (max-width: 500px) {
    .sheet {
        width: 95%;
    }
}  
</style>
