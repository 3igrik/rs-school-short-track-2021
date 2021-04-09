/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const splittedDomains = domains.map((el) => el.split('.').reverse());
  const result = {};

  for (let i = 0; i < splittedDomains.length; i++) {
    let fullDomain = '';
    for (let j = 0; j < splittedDomains[i].length; j++) {
      if (!(`${fullDomain}.${splittedDomains[i][j]}` in result)) {
        result[`${fullDomain}.${splittedDomains[i][j]}`] = 0;
      }
      if (`${fullDomain}.${splittedDomains[i][j]}` in result) {
        result[`${fullDomain}.${splittedDomains[i][j]}`]++;
      }
      fullDomain += `.${splittedDomains[i][j]}`;
    }
  }

  return result;
}

module.exports = getDNSStats;
