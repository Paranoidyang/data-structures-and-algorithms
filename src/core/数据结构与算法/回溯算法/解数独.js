/**
 * 题目描述：编写一个程序，通过填充空格来解决数独问题。
 * 
 * 一个数独的解法需遵循如下规则： 数字 1-9 在每一行只能出现一次。 数字 1-9 在每一列只能出现一次。 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。 空白格用 '.' 表示。
 * 
 * 答案被标成红色。
 * 
 * 提示：
    给定的数独序列只包含数字 1-9 和字符 '.' 。
    你可以假设给定的数独只有唯一解。
    给定数独永远是 9x9 形式的。
 * 
 */

const solveSudoku = function(board) {
  function isValid(row, col, val, board) {
      let len = board.length
      // 行不能重复
      for(let i = 0; i < len; i++) {
          if(board[row][i] === val) {
              return false
          }
      }
      // 列不能重复
      for(let i = 0; i < len; i++) {
          if(board[i][col] === val) {
              return false
          }
      }
      let startRow = Math.floor(row / 3) * 3
      let startCol = Math.floor(col / 3) * 3

      for(let i = startRow; i < startRow + 3; i++) {
          for(let j = startCol; j < startCol + 3; j++) {
              if(board[i][j] === val) {
                  return false
              }
          }
      }

      return true
  }

  function backTracking() {
      for(let i = 0; i < board.length; i++) {
          for(let j = 0; j < board[0].length; j++) {
              if(board[i][j] !== '.') continue
              for(let val = 1; val <= 9; val++) {
                  if(isValid(i, j, `${val}`, board)) {
                      board[i][j] = `${val}`
                      if (backTracking()) {
                          return true
                      }

                      board[i][j] = `.`
                  }
              }
              return false
          }
      }
      return true
  }
  backTracking(board)
  return board

}