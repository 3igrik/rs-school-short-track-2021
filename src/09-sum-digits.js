/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const len = n.toString().length;
  if (len === 1) return n;
  const splitedN = n.toString().split('');
  let sum = +splitedN[0];
  for (let i = 1; i < len; i++) {
    sum += +splitedN[i];
  }

  return getSumOfDigits(sum);
}

module.exports = getSumOfDigits;
