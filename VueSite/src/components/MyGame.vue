<template>
  <div class="gameWrapper">
      <a href="#/" >Home</a>
      <div class="board">
          <div class="column" v-for="row in board.rows">
              <div class="row" v-for="spot in row.spots">
                  <div class="tile">
                      <div class="dot" :style="[spot.isCovered ? {backgroundColor: spot.color, cursor: 'pointer'} : '' , spot.isSelected ? {border: '1px solid #FFF'} : '']" @mousedown="selectDot(spot)">

                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
        boardSize: [10,10], 
        board: {},
        dotSelected: {
            value: false,
            cordinates: {}
        },
        boardIndexList: {}
    }
  },
  created: function() {
      this.boardIndexList = this.generateIndexList();
      this.board = this.createBoard();
      this.spawnDots(3);
  },
  methods: {
      generateIndexList() {
          //Generate a list(0-99) based on boardsize
          return Array.apply(null, {length: (this.boardSize[0] * this.boardSize[1])}).map(Number.call, Number);
      },
      createBoard: function() {
          var board = {
              rows: []
          }
          var index = 0;
          for(var i = 0; i <= 9; i++) {
              var row = {};
              row.spots = [];
              for(var j = 0; j <= 9; j++) {
                  var spot = {
                      cordinates : {
                        x: j,
                        y: i
                      },
                      index: index,
                      isSelected: false,
                      isCovered: false,
                      color: 'red'
                  };
                  index++;
                  row.spots.push(spot);
              }
            board.rows.push(row);
          }
          console.log(board)
        return board;
      },
      updateBoard: function() {
          this.spawnDots(3);
      },
      selectDot: function(spot) {
          if(!this.dotSelected.value && spot.isCovered) {
              this.dotSelected.value = true;
              this.dotSelected.cordinates = spot.cordinates;
              spot.isSelected = true;
          }
          else if(spot.cordinates === this.dotSelected.cordinates) {
              this.dotSelected.value = false;
              this.dotSelected.cordinates = {};
              spot.isSelected = false;              
          }
          else {
              this.moveDot();
          }

      },
      moveDot: function() {
          

      },
      checkConnectFive: function() {

      },
      spawnDots: function(numberToSpawn) {
          if(this.boardIndexList.length > 3) {
            for(var x = 0; x < numberToSpawn; x++) {
                var index = this.getRandomNumber(0, this.boardIndexList.length);
                var position = this.boardIndexList.splice(index, 1)[0];
                for(var y = 0; y < this.board.rows.length; y++) {
                    for(var z = 0; z < this.board.rows[y].spots.length; z++) {    
                        if(position === this.board.rows[y].spots[z].index) {
                            this.board.rows[y].spots[z].isCovered = true;
                            this.board.rows[y].spots[z].color = this.pickColor();
                        }
                    }
                }
            }
          }
          else {
              alert("You Lose!");
          }
          
      },
      pickColor: function() {
          var colorList = ['red', 'green', 'blue', 'yellow', 'purple'];
          var random = this.getRandomNumber(0, 5);
          return colorList[random];

      },
      getRandomNumber: function(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
      }
      
  }
}
</script>

<style scoped>
a {
    color: #FFF;
    font-size: 20px;
    text-decoration: none;
}
.board {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    border: 1px solid #000;
    border-bottom: none;
    border-right: none;
}
.column {
    height: 50px;
    width: 500px;
}
.row {
    height: 49px;
    width: 49px;
    float: left;
    border-right: 1px solid #000; 
    border-bottom: 1px solid #000;
}
.dot {
    width: 25%;
    height: 25%;
    border-radius: 100px;
    float: left;
    margin: 37%;
}
.tile {
    width: 100%;
    height: 100%;
    margin: 0;
    background-image: url('../assets/defaultTile.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

</style>