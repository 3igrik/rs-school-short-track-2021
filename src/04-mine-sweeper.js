/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const len = matrix.length * matrix[0].length;
  let indexI = 0;
  let indexJ = 0;
  const res = matrix.map((el) => el.map((curr) => curr));
  let counter = 0;

  for (let forI = 0; forI < len; forI++) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === true
          && Math.abs(indexI - i) <= 1
          && Math.abs(indexJ - j) <= 1
          && (!(indexI === i && indexJ === j))) {
          counter++;
        }
      }
    }
    res[indexI][indexJ] = counter;
    counter = 0;
    indexJ++;
    if (indexJ === matrix[0].length) {
      indexJ = 0;
      indexI++;
    }
  }

  return res;
}

module.exports = minesweeper;
