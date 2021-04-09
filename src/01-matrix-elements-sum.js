/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const sumOfFirstLine = matrix[0].reduce((acc, el) => acc + el, 0);
  if (matrix.length === 1) return sumOfFirstLine;

  return matrix.reduce((accI, elementI, i) => {
    if (i === 0) {
      return sumOfFirstLine;
    }
    return accI + elementI.reduce((accJ, elementJ, j) => {
      if (matrix[i - 1][j] === 0) {
        return accJ;
      }
      return accJ + elementJ;
    }, 0);
  }, 0);
}

module.exports = getMatrixElementsSum;
