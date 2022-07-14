// brute force method, we are going to do all three checks in separate double for loops so our time complexity is going to be 9^2
// kind of funny how even though we are running with an inefficient method here, because n can't go infinitely large we'll actually have a good time complexity
// this answer itself will actually compute very fast but is just a lot of code

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var isValidSudoku = function (board) {
  // first one is a double for loop to go through the entire board and looking for duplicates within the rows
  for (let i = 0; i < board.length; i++) {
    const set = new Set(); // use set because we can't have duplicates, each new set created will be a single row
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j]; // gives the single cell
      if (cell === ".") continue; // check if it doesn't have a number then go to next cell
      if (set.has(cell)) return false; // if in our set we return false otherwise add to our set
      set.add(cell);
    }
  }

  // exact same thing but we're looking at columns here for duplicates
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[j][i]; // swap j and i to get columns instead
      if (cell === ".") continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  // the way that we can split up our board into each 3 x 3 block is by dividing or multiplying by 3
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // this is how we get our 3 x 3 blocks
      const set = new Set();
      for (let k = 0; k < 3; k++) {
        // this is how we check all 9 cells within a 3x3 block
        for (let l = 0; l < 3; l++) {
          const cell = board[3 * i + k][3 * j + l]; // this is the most important formula here
          if (cell === ".") continue;
          if (set.has(cell)) return false;
          set.add(cell);
        }
      }
    }
  }
  return true;
};

// this might be the actual recommended way of coding this up as the code is a lot more elegant versus using 3 blocks of for loops to solve the problem separately
// uses an array of sets

var isValidSudoku2 = function (board) {
  const rows = [],
    columns = [],
    boxes = [];

  // add 9 sets to each array so that we can iterate and place into each one later
  for (let i = 0; i < board.length; i++) {
    rows.push(new Set());
    columns.push(new Set());
    boxes.push(new Set());
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j]; // give us each cell on the board
      if (cell === ".") continue;
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3); // this formula can divide our board into 3x3 boxes, all of the 9 cells with equate to the same boxNum
      if (rows[i].has(cell) || columns[j].has(cell) || boxes[boxNum].has(cell))
        return false;
      rows[i].add(cell);
      columns[j].add(cell);
      boxes[boxNum].add(cell);
    }
  }
  console.log(rows);
  console.log(columns);
  return true;
};

console.log(isValidSudoku2(board));

// there is another way to do it with strings but I'm not sure about that one
