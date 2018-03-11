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
        selectedState: false,
        dotSelected: {},
        boardIndexList: {},
        defaultSpot: {
            isSelected: false,
            isCovered: false,
            color: ''
        },
        destroy: false,
        connect: false
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
                      color: ''
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
              this.moveDot(spot);
          }

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
              this.checkHorizontalRow(x, x);
          }

          for(var x = 0; x < this.boardSize[0]; x++) {
              this.checkVirticalRow(x);
          }

           for(var y = 0; y < this.boardSize[0]; y++) {
             for(var x = 0; x < this.boardSize[0] * this.boardSize[1]; x=x+10) {
                 this.checkDiagonalRow(x + y, 99 - (y*10));
             }          
           }              

          for(var y = 0; y < this.boardSize[0]; y++) {
            for(var x = 9; x < this.boardSize[0] * this.boardSize[1]; x=x+10) {
                this.checkDiagonalRowReverse(x - y, 90 + y);
            }          
          }          
          
      },
      checkDiagonalRowReverse: function(val, offset) {

        var x = val;
        var y = 0;
        this.destroy = false;
        var arraySpots = [];
        while(x <= offset) {
            
            arraySpots.push(this.findLocation(x));
            if(!arraySpots[y].isCovered && this.destroy) {
                break;
            }      
            if(!arraySpots[y].isCovered){
                this.checkDiagonalRowReverse(x + 9, offset);
                return;
            }
            if(!this.checkArrayColors(arraySpots) && this.destroy){
                arraySpots.pop();
                break;
            }
            else if(!this.checkArrayColors(arraySpots)){
                this.checkDiagonalRowReverse(x, offset);
                return;                
            }
            if(arraySpots.length >= 5) {
                this.destroy = true;
            }
            y++;
            x = (x + 9);
        }
        if(this.destroy) {
            for(var z = 0; z < arraySpots.length; z++) {
                var spot = this.findLocation(arraySpots[z].index);
                spot.color = '';
                spot.isCovered = false;
                this.boardIndexList.push(spot.index);
                this.connect = true;
            }
        }
      },      
      checkDiagonalRow: function(val, offset) {

        var x = val;
        var y = 0;
        this.destroy = false;
        var arraySpots = [];
        while(x <= offset) {
            
            arraySpots.push(this.findLocation(x));
            if(!arraySpots[y].isCovered && this.destroy) {
                break;
            }      
            if(!arraySpots[y].isCovered){
                this.checkDiagonalRow(x+11, offset);
                return
            }
            if(!this.checkArrayColors(arraySpots) && this.destroy){
                arraySpots.pop();
                break;
            }
            else if(!this.checkArrayColors(arraySpots)){
                this.checkDiagonalRow(x, offset);
                return;                
            }
            if(arraySpots.length >= 5) {
                this.destroy = true;
            }
            y++;
            x = (x + 11);
        }
        if(this.destroy) {
            for(var z = 0; z < arraySpots.length; z++) {
                var spot = this.findLocation(arraySpots[z].index);
                spot.color = '';
                spot.isCovered = false;
                this.boardIndexList.push(spot.index);
                this.connect = true;
            }
        }


      },
      checkVirticalRow: function(val) {
  
        var x = val;
        var y = 0;
        this.destroy = false;
        var arraySpots = [];
        while(x < this.boardSize[1] * this.boardSize[0]) {
            
            arraySpots.push(this.findLocation(x));
            if(!arraySpots[y].isCovered && this.destroy) {
                break;
            }      
            if(!arraySpots[y].isCovered){
                this.checkVirticalRow(x+10);
                return;
            }
            if(!this.checkArrayColors(arraySpots) && this.destroy){
                arraySpots.pop();
                break;
            }
            else if(!this.checkArrayColors(arraySpots)){
                this.checkVirticalRow(x);
                return;                
            }
            if(arraySpots.length >= 5) {
                this.destroy = true;
            }
            y++;
            x = (x + 10);
        }
        if(this.destroy) {
            for(var z = 0; z < arraySpots.length; z++) {
                var spot = this.findLocation(arraySpots[z].index);
                spot.color = '';
                spot.isCovered = false;
                this.boardIndexList.push(spot.index);
                this.connect = true;
            }
        }

      },
      checkHorizontalRow: function(val, offset) {
          
        offset = (Math.floor(offset/10) * 10);
        var x = val;
        var y = 0;
        this.destroy = false;
        var arraySpots = [];
        while(x < this.boardSize[0] + offset) {
            
            arraySpots.push(this.findLocation(x));
            if(!arraySpots[y].isCovered && this.destroy) {
                break;
            }      
            if(!arraySpots[y].isCovered){
                this.checkHorizontalRow(x+1, x);
                return;
            }
            if(!this.checkArrayColors(arraySpots) && this.destroy){
                arraySpots.pop();
                break;
            }
            else if(!this.checkArrayColors(arraySpots)){
                this.checkHorizontalRow(x, x);
                return;                
            }
            if(arraySpots.length >= 5) {
                this.destroy = true;
            }
            y++;
            x++;
        }
        if(this.destroy) {
            for(var z = 0; z < arraySpots.length; z++) {
                var spot = this.findLocation(arraySpots[z].index);
                spot.color = '';
                spot.isCovered = false;
                this.boardIndexList.push(spot.index);
                this.connect = true;
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
    width: 45%;
    height: 45%;
    border-radius: 100px;
    float: left;
    margin: 29%;
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