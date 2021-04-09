/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const splittedStr = str.split('');
  const resStr = [];
  let counter = 1;
  for (let i = 0; i < splittedStr.length; i++) {
    if (i === splittedStr.length - 1) {
      resStr.push(`${counter > 1 ? counter : ''}${splittedStr[i]}`);
      return resStr.join('');
    }
    if (splittedStr[i + 1] === splittedStr[i]) {
      counter++;
    } else if (splittedStr[i] !== splittedStr[i + 1]) {
      resStr.push(`${counter > 1 ? counter : ''}${splittedStr[i]}`);
      counter = 1;
    }
  }

  return resStr.join('');
}

module.exports = encodeLine;
