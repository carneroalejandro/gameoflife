// Initial state
var initial = ([
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 0] ]);

// function to update the board to the next generation
nextState = function() {
  var next = [],
    length_x,
    length_y = initial.length,
    alives = 0;

  for (var y = length_y; y--;) {
    length_x = initial[y].length;
    next[y] = []; 

    for (var x = length_x; x--;) {
      // Implementation with continuous board
      var above = (y-1 >= 0) ? y-1 : length_y-1;
      var below = (y+1 <= length_y-1) ? y+1 : 0;
      var left = (x-1 >= 0) ? x-1 : length_x - 1;
      var right = (x+1 <= length_x-1) ? x+1 : 0;

      // Check alives neighbours
      alives = initial[above][left] +
        initial[above][x] +
        initial[above][right] +
        initial[y][left] + 
        initial[y][right] +
        initial[below][left] +
        initial[below][x] +
        initial[below][right];

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

print = function (board) {
  var length = board.length;
  for (var y = 0; y < length; y++) {
    console.log(board[y]);
  }
};

// Simple function to print the board state
console.log("Initial state");
print(initial);
console.log("Next state");
print(nextState(initial));
