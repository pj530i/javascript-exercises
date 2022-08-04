const ftoc = function(degF) {
  // (F-32) * 5/9
  return +((degF - 32) * 5/9).toFixed(1);
};

const ctof = function(degC) {
  // 9/5 + 32
  return +(degC * 9/5 + 32).toFixed(1); // Plus hides extra 0's, e.g. "0.0" just becomes "0"
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
