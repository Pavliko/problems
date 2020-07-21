/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const symbolToValueMap = {
    I:            1,
    V:             5,
    X:             10,
    L:             50,
    C:             100,
    D:             500,
    M:            1000
  };
     return  s.split("").reduce((sum, symbol, index, string) => {
       const nextSymbol = string[index+1]
    return sum =  symbolToValueMap[symbol] < symbolToValueMap[nextSymbol] ?
     sum - symbolToValueMap[symbol] :  sum + symbolToValueMap[symbol]
     }, 0)
  };
