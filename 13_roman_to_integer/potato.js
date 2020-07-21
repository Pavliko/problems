/**
 * @param {string} s
 * @return {number}
 */
var romainMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}
var romanToInt = function (s) {
  romainDig = s.split('')
  var total = romainDig.reduce(function (res, el, index, array) {
    var nextElement = romainMap[array[index + 1]]
    if (romainMap[el] < nextElement) {
      res = res - romainMap[el]
    } else {
      res = res + romainMap[el]
    }
    return res
  }, 0)
  return total
};
