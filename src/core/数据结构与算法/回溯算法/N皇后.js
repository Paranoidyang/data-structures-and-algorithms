/**
 * 题目描述：n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

  给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

  每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
   示例 1：
   输入：n = 4
   输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
   解释：如上图所示，4 皇后问题存在两个不同的解法。

   示例 2：
   输入：n = 1
   输出：[["Q"]]
 */

const solveNQueens = function(n) {
function isValid(row, col, chessBoard, n) {

    for(let i = 0; i < row; i++) {
        if(chessBoard[i][col] === 'Q') {
            return false
        }
    }

    for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if(chessBoard[i][j] === 'Q') {
            return false
        }
    }

    for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if(chessBoard[i][j] === 'Q') {
            return false
        }
    }
    return true
}

function transformChessBoard(chessBoard) {
    let chessBoardBack = []
    chessBoard.forEach(row => {
        let rowStr = ''
        row.forEach(value => {
            rowStr += value
        })
        chessBoardBack.push(rowStr)
    })

    return chessBoardBack
}

let result = []
function backtracing(row,chessBoard) {
    if(row === n) {
        result.push(transformChessBoard(chessBoard))
        return
    }
    for(let col = 0; col < n; col++) {
        if(isValid(row, col, chessBoard, n)) {
            chessBoard[row][col] = 'Q'
            backtracing(row + 1,chessBoard)
            chessBoard[row][col] = '.'
        }
    }
}
let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'))
backtracing(0,chessBoard)
return result

}