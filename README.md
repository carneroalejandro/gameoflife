# The Game of Life, implementation of next generation function.
Please note that I defined two files, one using a fixed board (fixed_board.js), that resolves the problem as the exercices defines.
But I did some research in the web and could't find if the continuous board is an imperative definition in the Conway's game of life, taking this in consideration I also defined the solution to this scenario (continuous_board.js file).

# Excercide definition:

* Any live cell with fewer than two live neighbors dies, as if caused by under-population.
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with more than three live neighbors dies, as if by over-population..
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Write a d (after one update) of the board given its current state.
> nextGeneration([
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 0]
])

Will return:
>[
  [1, 1, 0],
  [0, 0, 1],
  [1, 1, 0]
]
