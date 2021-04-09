/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;

  const sortedS1 = s1.split('').sort();
  const sortedS2 = s2.split('').sort();

  const minLength = sortedS2.length <= sortedS1.length ? sortedS2 : sortedS1;
  let res = 0;

  for (let i = 0; i < minLength.length; i++) {
    const index = sortedS2.indexOf(sortedS1[i]);
    if (index >= 0) {
      sortedS2.splice(index, 1);
      sortedS1.splice(i, 1);
      i--;
      res++;
    }
  }

  return res;
}

module.exports = getCommonCharacterCount;
