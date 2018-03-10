<template>
  <div class="gameWrapper">
      <a href="#/" >Home</a>
      <div class="board">
          <div class="column" v-for="row in board.rows">
              <div class="row" v-for="spot in row.spots">
                  <div class="tile">
                      <div class="dot" :style="[spot.isCovered ? {backgroundColor: spot.color} : '' ]" @mousedown="selectDot(spot)">

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
        board : this.createBoard(),
        isSelected: {
            value: false,
            cordinates: {}
        }
    }
  },
  methods: {
      createBoard: function() {
          var board = {
              rows: []
          }
          for(var i = 0; i <= 9; i++) {
              var row = {};
              row.spots = [];
              for(var j = 0; j <= 9; j++) {
                  var spot = {
                      cordinates : {
                        x: j,
                        y: i
                      },
                      isSelected: false,
                      isCovered: false,
                      color: 'red'
                  };
                  
                  row.spots.push(spot);
              }
            board.rows.push(row);
          }
          console.log(board)
          board.rows[1].spots[1].isSelected = true;
          board.rows[1].spots[1].isCovered = true;
        return board;
      },
      updateBoard: function() {

      },
      selectDot: function(spot) {
          if(!this.isSelected.value && spot.isCovered) {
              this.isSelected.value = true;
              this.isSelected.cordinates = spot.cordinates;
              spot.isSelected = true;
          }
          else if(spot.cordinates === this.isSelected.cordinates) {
              console.log("yes");
          }
          else {
              console.log(spot.cordinates, this.isSelected)
          }

      },
      moveDot: function() {

      },
      checkConnectFive: function() {

      },
      spawnDots: function() {
          
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