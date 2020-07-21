var numJewelsInStones = function(J, S) {
  return (S.match(new RegExp(`[${J}]`, "g")) || []).length;
};
