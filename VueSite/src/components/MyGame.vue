<template>
  <div class="gameWrapper">
    <div class="mobile-menu" v-bind:class="{ show: menuTrigger}">
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="#/resume">RESUME</a></li>
        <li><a href="#/projects">PROJECTS</a></li>
        <li><a href="/">ABOUT</a></li>
      </ul>      
    </div>      
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
      <h1>Connect Five</h1>
        <div class="scorePanel">
            <div class="score">Score: <span>{{currentScore}}</span></div>
        </div>
        <div class="nameForm" v-show="showNameEnter">
            <h1>Congradulations!!!</h1>
            <h2>Add Your Name to the high scores!</h2>
            <input v-model="inputName" maxlength="3">
            <button @click="inputName.length === 3 ? updateHighScores(): ''">Submit</button>
            <h2 class="upper">{{ inputName }}</h2>
        </div>
      <div class="switcher" v-show="!showNameEnter">  
        <div class="board" v-show="!highScore">
            <div class="column" v-for="row in board.rows">
                <div class="row" v-for="spot in row.spots">
                    <transition name="fade" @after-enter="spot.explosion = false;">
                        <div v-if="spot.explosion" class="explosion" :style="{backgroundColor: spot.explosioncolor}"> </div>
                    </transition>
                    <div class="tile">
                        <div class="insideTile" :style="[spot.isSelected ? {border: '1px solid #FFF'} : '', spot.isCovered ? {cursor: 'pointer'} : '' ]" @mousedown="selectDot(spot)">
                            <div class="dot" :style="spot.isCovered ? {backgroundColor: spot.color} : '' "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scoreBoard" v-show="highScore">
            <h1>High Scores</h1>
            <div class="scoreFrame">
                <h2>Rank &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Score</h2>
                <div class="scoreRow" v-for="(rank, index) in highScoreRanks">
                    <div class="position">{{index + 1}}</div>
                    <div class="name">{{rank.name}}</div>
                    <div class="rankScore">{{rank.score}}</div>
                </div>
            </div>
        </div>
        <div class="bottomPanel">
            <button class="newGame" v-if="!highScore" @click="restart()" >New Game</button>
            <button class="scoreSwitch" v-if="!highScore" @click="(highScore = !highScore)">High Scores</button>
            <button class="scoreSwitch" v-if="highScore" @click="(highScore = !highScore)">Back To Game</button>
        </div>
      </div>
  </div>
</template>

<script>

var data = {
    menuTrigger: false,
    boardSize: [10,10], 
    board: {},
    selectedState: false,
    dotSelected: {},
    boardIndexList: {},
    defaultSpot: {
        isSelected: false,
        isCovered: false,
        color: ''
    },
    destroy: false,
    connect: false,
    currentScore: 0,
    highScore: false,
    colorList: ['red', 'blue', 'yellow', 'green', '#BD09BD'],
    highScoreRanks: [],
    showNameEnter: false,
    inputName: ''
}    

import astarObject from 'javascript-astar';

export default {
  name: 'Game',
  data () {
    return data
  },
  localStorage: {
      score: {
          type: Number
      }
  },
  created: function() {
    let currentBoard = JSON.parse(this.$localStorage.get('board'));
    let currentBoardIndexLIst = JSON.parse(this.$localStorage.get('index'));
    let currentScore = this.$localStorage.get('score');

    this.menuTrigger = false;
    this.connect = false;
    this.dotSelected = {};
    this.destroy = false;    
    this.highScoreRanks = [];
    this.getHighScores();  

    if(currentBoard === {} || currentBoard === null) {
        this.boardIndexList = this.generateIndexList();
        this.board = this.createBoard();
        this.spawnDots(3);
        this.currentScore = 0;
        
    }
    else {
        this.board = currentBoard;
        this.currentScore = currentScore;
        this.boardIndexList = currentBoardIndexLIst;

        for(var y = 0; y < this.board.rows.length; y++) {
            for(var z = 0; z < this.board.rows[y].spots.length; z++) {   
                this.board.rows[y].spots[z].explosion = false;
            }
        } 
    }

  },
  methods: {
      getHighScores: function() {
        this.$http.get('')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.highScoreRanks = data;

            });          
      },
      changeHighScores: function() {
          var scoreObject = {
              name: this.inputName,
              score: this.currentScore
          }

          for(let x = 0; x < 10; x++) {
              if(this.currentScore > this.highScoreRanks[x].score) {
                  this.highScoreRanks.splice(x, 0, scoreObject);
                  this.highScoreRanks.pop();
                  return;
              }
          }          
      },
      updateHighScores: function() {

        this.changeHighScores();

        this.$http.put('', this.highScoreRanks)
        .then(response => {
            console.log(response);
        }, error => {
            console.log(error);
        })
        this.showNameEnter = !this.showNameEnter;
        this.restart();
      },
      generateIndexList() {
          //Generate a list(0-99) based on boardsize
          return Array.apply(null, {length: (this.boardSize[0] * this.boardSize[1])}).map(Number.call, Number);
      },
      restart: function() {
        this.boardIndexList = this.generateIndexList();
        this.board = this.createBoard();
        this.spawnDots(3);
        this.currentScore = 0;
        this.connect = false;
        this.dotSelected = {};
        this.destroy = false;
        this.highScore = false;
        this.$localStorage.remove('board');
        this.$localStorage.remove('index');
        this.$localStorage.remove('score');
      },
      createBoard() {
          var board = {
              rows: []
          }
          var index = 0;
          for(var i = 0; i < this.boardSize[0]; i++) {
              var row = {};
              row.spots = [];
              for(var j = 0; j < this.boardSize[1]; j++) {
                  var spot = {
                      index: index,
                      isSelected: false,
                      isCovered: false,
                      color: '',
                      x: i,
                      y: j,
                      remove: false,
                      explosion: false,
                      explosioncolor: ''
                  };
                  index++;
                  row.spots.push(spot);
              }
            board.rows.push(row);
          }
        return board;
      },
      selectDot: function(spot) {
          if(!this.selectedState && spot.isCovered) {
              this.selectedState = true;
              spot.isSelected = true;
              this.dotSelected = spot; 
          }
          else if(spot.index === this.dotSelected.index) {
              spot.isSelected = false; 
              this.dotSelected = {};
              this.selectedState = false;          
          }
          else if(!spot.isCovered && this.selectedState) {
              var graph = new astarObject.Graph(this.getCurrentBoardState());
              var start = graph.grid[this.dotSelected.x][this.dotSelected.y];
              var end = graph.grid[spot.x][spot.y];
              var result = astarObject.astar.search(graph, start, end);
              if(result.length === 0) { return;}
              this.moveDot(spot);
          }
          else if(this.selectedState){
              spot.isSelected = true;
              this.dotSelected.isSelected = false;
              this.dotSelected = spot;
          }

      },
      getCurrentBoardState: function() {
        var currentGraph = [];
        var row = []

        for(var x = 0; x < this.boardSize[0]; x++) {
            row = [];
            for(var y = 0; y < this.boardSize[1]; y++) {
               if(this.board.rows[x].spots[y].isCovered) {
                   row.push(0);
               }
               else{
                   row.push(1);
               }

            }            
            currentGraph.push(row)
        }
        return currentGraph;
      },
      moveDot: function(spot) {
        this.dotSelected.isSelected = false;

        var location = this.findLocation(spot.index);
        location.isCovered = true;
        location.color = this.dotSelected.color;

        var location2 = this.findLocation(this.dotSelected.index);
        location2.isCovered = false;
        location2.color = '';
        var removeIndex = this.boardIndexList.indexOf(spot.index);
        this.boardIndexList.splice(removeIndex,1);
        this.boardIndexList.push(this.dotSelected.index);
        this.dotSelected = {};
        this.selectedState = false;


        this.checkConnectFive();

        if(!this.connect) {
            this.spawnDots(3);
            this.checkConnectFive();
            this.connect = false;
        }
        this.connect = false;

        this.removeDots();  

        this.saveBoard();

      },
      saveBoard: function() {
        this.$localStorage.set('board', JSON.stringify(this.board));
        this.$localStorage.set('index', JSON.stringify(this.boardIndexList));
        this.$localStorage.set('score', this.currentScore);
      },
      findLocation: function(index) {
        for(var y = 0; y < this.board.rows.length; y++) {
            for(var z = 0; z < this.board.rows[y].spots.length; z++) {   
                if(index === this.board.rows[y].spots[z].index) {
                    return this.board.rows[y].spots[z];
                }
            }
        } 
      },
      checkConnectFive: function() {

        for(var x = 0; x < (this.boardSize[0] * this.boardSize[1]); x=x+10) {
            this.checkHorizontalRow(x, x+9);
        }
        for(var x = 0; x < this.boardSize[0]; x++) {
            this.checkVerticalRow(x, 99);
        }
        for(var y = 0; y < this.boardSize[0]; y++) {
            for(var x = 0; x < this.boardSize[0] * this.boardSize[1]; x=x+10) {
                this.checkDiagonalRow(x + y, 99 - (y*10));
            }          
        }              
        var xCounter = 0;
        for(var y = 0; y < this.boardSize[0]; y++) {
            xCounter = 0;
            for(var x = 9; x < this.boardSize[0] * this.boardSize[1]; x=x+10) {
                
                this.checkDiagonalRowReverse(x - y, (90 - (y*10) + xCounter));
                xCounter++;
            }          
        }        
      },
      checkDiagonalRowReverse: function(val, offset) {
        this.traverse(val, offset, 9, this.checkDiagonalRowReverse);
      },      
      checkDiagonalRow: function(val, offset) {
        this.traverse(val, offset, 11, this.checkDiagonalRow);
      },
      checkVerticalRow: function(val, offset) {
        this.traverse(val, offset, 10, this.checkVerticalRow);
      },
      checkHorizontalRow: function(val, offset) {
        this.traverse(val, offset, 1, this.checkHorizontalRow);
      },
      traverse: function(val, offset, modifier, directionFunction)  {
        var x = val;
        var y = 0;
        this.destroy = false;
        var arraySpots = [];
        while(x <= offset) {
            
            arraySpots.push(this.findLocation(x));
            if(!arraySpots[y].isCovered && this.destroy) {
                arraySpots.pop();
                break;
            }      
            if(!arraySpots[y].isCovered){
                directionFunction(x + modifier, offset);
                return;
            }
            if(!this.checkArrayColors(arraySpots) && this.destroy){
                arraySpots.pop();
                break;
            }
            else if(!this.checkArrayColors(arraySpots)){
                directionFunction(x, offset);
                return;                
            }
            if(arraySpots.length >= 5) {
                this.destroy = true;
            }
            y++;
            x = (x + modifier);
        }
        if(this.destroy) {
            for(var z = 0; z < arraySpots.length; z++) {
                var spot = this.findLocation(arraySpots[z].index);
                spot.remove = true;
                this.connect = true;
            }
        }
      },
      removeDots: function() {
        var counter = 0;
        for(var y = 0; y < this.board.rows.length; y++) {
            for(var z = 0; z < this.board.rows[y].spots.length; z++) {   
                if(this.board.rows[y].spots[z].remove) {
                    counter++;
                    this.board.rows[y].spots[z].remove = false;
                    this.board.rows[y].spots[z].explosioncolor = this.board.rows[y].spots[z].color;
                    this.board.rows[y].spots[z].color = '';
                    this.board.rows[y].spots[z].isCovered = false;
                    this.boardIndexList.push(this.board.rows[y].spots[z].index);
                    this.currentScore = this.currentScore + 50;
                    if(counter > 5){
                        this.currentScore = this.currentScore + 50;
                    }
                    this.board.rows[y].spots[z].explosion = true;
                    this.board.rows[y].spots[z].time = counter;
                    
                    
                }
            } 
        }
      },
      checkArrayColors: function(array) {
          for(var x = 0; x < array.length -1; x++) {
            if(array[x].color !== array[x+1].color) {
                return false;
            }
          }
          return true;
      },
      spawnDots: function(numberToSpawn) {
          if(this.boardIndexList.length > 3) {
            for(var x = 0; x < numberToSpawn; x++) {
                var index = this.getRandomNumber(0, this.boardIndexList.length);
                var location = this.findLocation(this.boardIndexList.splice(index, 1)[0])
                location.isCovered = true;
                location.color = this.pickColor();
            }
          }
          else {
              if(this.checkForHighScore()) {
                  this.showNameEnter = !this.showNameEnter;
                  this.getHighScores();
              }
              else {
                alert("GAME OVER");
                this.restart();
              }

          }
          
      },
      checkForHighScore: function() {
          for(let x = 0; x < 10; x++) {
              if(this.currentScore > this.highScoreRanks[x].score) {
                  return true;
              }
          }
          return false;
      },
      pickColor: function() {
          var random = this.getRandomNumber(0, 5);
          return this.colorList[random];

      },
      getRandomNumber: function(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
      }
      
  }
}
</script>

<style scoped>

.explosion {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    z-index: 5;
    position: absolute; 
}

.fade-enter-active {
    animation: fade-out-and-explode .4s linear;
}
.fade-leave {  
    transform: scale(1.2);
    opacity: 0;
}
@keyframes fade-out-and-explode {
  0% {
    transform: scale(.4);
    opacity: 1;
  }
  50% {
    transform: scale(.8);
    opacity: .5;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
.header {
    display: flex;
    margin-bottom: 150px;
    text-decoration: none;
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

h1 {
    font-style: italic;
    font-size: 40px;
    margin: 10px;
}
.gameWrapper {
    background-image: url("../assets/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;    
}
a {
    color: #FFF;
    font-size: 20px;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
.upper {
    text-transform: uppercase;
}
.board {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    border-image: url('../assets/defaultTile.jpg') 10;
    border-width: 15px;
    border-style: solid;
}
.column {
    height: 10%;
    width: 100%;
}
.row {
    height: 100%;
    width: 10%;
    float: left;
}
.dot {
    width: 45%;
    height: 45%;
    border-radius: 100px;
    float: left;
    margin: 29%;
}
.dotPrev {
    height: 20px;
    width: 20px;
    border-radius: 100%;
    margin: 0 5px;
}
.scorePanel {
    margin: 5px 0;
    display: inline-block;
}
.tile {
    width: 100%;
    height: 100%;
    margin: 0;
    background-image: url('../assets/defaultTile.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.insideTile {
    height: 95%;
    widows: 95%;
}
.bottomPanel {
    width: 500px;
    height: 75px;
    margin: 0 auto;
}
.newGame, .scoreSwitch {
    margin: 15px auto;
    width: 225px;
    height: 50px;
    padding: 10px 0;
    background-color: green;
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    border-radius: 25px;
    outline: none;
}
.score {
    font-size: 25px;
}
.scoreSwitch {
    background-color: blue;
}
.scoreBoard {
    width: 500px;
    height: 500px;
    margin: 0 auto;
}
.scoreRow {
    height: 40px;
    width: 300px;
    margin: 0 auto;
    display: flex;
}
.name {
    text-transform: uppercase;
}
.position, .name, .rankScore {
    flex-grow: 1;
    width: 33%;
}
.scoreBoard h1 {
    margin-top: 0;
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
@media all and (max-width: 600px) {
    .header {
        margin-bottom: 0;
    }
    .menu {
      display: none;
    }
    .mobile-menu-button {
      display: block;
    }    
    .board, .scoreBoard {
        width: 90%;
        height: 320px;
    } 
    .bottomPanel {
        width: 350px;
    }
    .newGame, .scoreSwitch {
        width: 150px;
    }
    .gameWrapper h1 {
        margin: 10px 0 0 0;
    }
    .score {
        margin: 0 20px 0 0;
    }
    .gameWrapper {
        padding-top: 10px;
    }
    .scoreRow {
        height: 24px;
    }
    .explosion {
        height: 35px;
        width: 35px;
    }
}

</style>