<template>
  <div class="gameWrapper">
      <a href="#/" >Home</a>
      <div class="board">
          <div class="column" v-for="row in board.rows">
              <div class="row" v-for="spot in row.spots">
                  <img v-if="!spot.isCovered" src="../assets/purpleTile.jpg">
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
        board : this.createBoard()
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
                  var spot = {};
                  spot.isCovered = false;
                  row.spots.push(spot);
              }
            board.rows.push(row);
          }
        return board;
      },
      updateBoard: function() {

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
img {
    width: 100%;
    height: 100%;
    margin: 0;
}

</style>