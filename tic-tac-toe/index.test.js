/*
Imagine you are playing a game of tic-tac-toe
and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array,
where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1
if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

const ticTacToe = (board) => {
    // Solution code here...
    let temp = board.flat();

    // For rows
    if((temp[0] === temp[1] && temp[1] === temp[2]) && temp[0] !== "") {
        if(temp[0] === '1') {
            return 1
        } else {
            return 0
        }
    } else if((temp[3] === temp[4] && temp[4] === temp[5]) && temp[3] !== "") {
        if(temp[3] === '1') {
            return 1
        } else {
            return 0
        }
    } else if((temp[6] === temp[7] && temp[7] === temp[8]) && temp[6] !== "")  {
        if(temp[6] === '1') {
            return 1
        } else {
            return 0
        }
    }

    // For columns
    if((temp[0] === temp[3] && temp[3] === temp[6]) && temp[0] !== "") {
        if(temp[0] === 'X') {
            return 1
        } else {
            return 0
        }
    } else if((temp[1] === temp[4] && temp[4] === temp[7]) && temp[1] !== "") {
        if(temp[1] === 'X') {
            return 1
        } else {
            return 0
        }
    } else if((temp[2] === temp[5] && temp[5] === temp[8]) && temp[2] !== "")  {
        if(temp[2] === 'X') {
            return 1
        } else {
            return 0
        }
    }

    // For diagonals
    if((temp[0] === temp[4] && temp[4] === temp[8]) && temp[0] !== "") {
        if(temp[0] === 'X') {
            return 1
        } else {
            return 0
        }
    } else if((temp[2] === temp[4] && temp[4] === temp[6]) && temp[2] !== "") {
        if(temp[2] === 'X') {
            return 1
        } else {
            return 0
        }
    }
    return -1;
  };

  describe('ticTacToe', () => {
    test('It should return true if there are three in a row', () => {
      expect(ticTacToe([['X', '', 'O'], ['X', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(0);
      expect(ticTacToe([['O', '', 'X'], ['X', 'O', 'X'], ['X', '', 'O']])).toStrictEqual(0);
    });

    test('It should return false if there are not three in a row', () => {
      expect(ticTacToe([['X', '', 'O'], ['O', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(-1);
    });

    test('It should not treat empty 3 in row as winner', () => {
      expect(ticTacToe([['', '', ''], ['O', 'O', ''], ['X', 'O', 'X']])).toEqual(-1);
    });
  });