const roundOneDecimal = function(number) {
  return Math.round(number * 10) / 10;
}

const ftoc = function(F) {
  C = (F - 32) * 5 / 9;
  return roundOneDecimal(C);
};

const ctof = function(C) {
  F = C * 9 / 5 + 32;
  return roundOneDecimal(F);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
