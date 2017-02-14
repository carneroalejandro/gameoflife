// Initial state
var initial = ([
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 0] ]);

// Function to update the board to the next generation
nextState = function() {
  var next = [],
    length_x,
    length_y = initial.length,
    alives = 0;

  for (var y = length_y; y--;) {
    length_x = initial[y].length;
    next[y] = []; 

    for (var x = length_x; x--;) {
      // Implementation of board limits, as is indicated in the exercise parameters
      var above = (y-1 >= 0) ? y-1 : null;
      var below = (y+1 <= length_y-1) ? y+1 : null;
      var left = (x-1 >= 0) ? x-1 : null;
      var right = (x+1 <= length_x-1) ? x+1 : null;

      // Check alives neighbours
      alives = 0;
      if (above != null && left != null) {
        alives += initial[above][left];
      }
      if (above != null) {
        alives += initial[above][x];
      }
      if (above != null && right != null) {
        alives += initial[above][right];
      }
      if (left != null) {
        alives += initial[y][left];
      }
      if (right != null) {
        alives += initial[y][right];
      }
      if (below != null && left != null) {
        alives += initial[below][left];
      }
      if (below != null) {
        alives += initial[below][x];
      }
      if (below != null && right != null) {
        alives += initial[below][right];
      }

      // Rules to check
      if (initial[y][x] == "1") {
        if (alives < 2 || alives > 3) {
          next[y][x] = 0;
        } else {
          next[y][x] = 1;
        }
      } else {
        if (alives === 3) {
          next[y][x] = 1;
        } else {
          next[y][x] = 0;
        }
      }
    }
  }
  return next;
};

// Simple function to print the board state
print = function (board) {
  var length = board.length;
  for (var y = 0; y < length; y++) {
    console.log(board[y]);
  }
};

console.log("Initial state");
print(initial);
console.log("Next state");
print(nextState(initial));
