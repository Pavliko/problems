/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  if(A.length === 1) return [A[0] ** 2];

  let left = A.shift();
  let right = A.pop();
  let result = []

  while(A.length) {
    if(left ** 2 > right ** 2) {
      result.unshift(left ** 2);
      left = A.shift();
    } else {
      result.unshift(right ** 2);
      right = A.pop();
    }
  }

  if(left ** 2 > right ** 2) {
    result.unshift(left ** 2);
    result.unshift(right ** 2);
  } else {
    result.unshift(right ** 2);
    result.unshift(left ** 2);
  }

  return result;

};
