/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  const N = A.length;

  let j = 0;
  while(j < N && A[j] < 0) {j++;}
  let i = j - 1;

  let ans = [];
  while(0 <= i || j < N) {
    if (A[i]**2 < A[j]**2) {
      ans.push(A[i]**2);
      i--;
    } else {
      ans.push(A[j]**2);
      j++;
    }
  }

  while(i >= 0) {
    ans.push(A[i]**2)
    i--
  }

  while(j < N) {
    ans.push(A[j]**2)
    j++
  }

  return ans;

};
