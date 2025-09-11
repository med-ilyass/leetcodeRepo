/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const ch = board[r][c];
      if (ch === ".") continue;

      const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (rows[r].has(ch) || cols[c].has(ch) || boxes[box].has(ch)) return false;

      rows[r].add(ch)
      cols[c].add(ch)
      boxes[box].add(ch)
    }
  }
  return true
};
