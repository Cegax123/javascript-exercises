const f = function(x) {
  return x * (x+1) / 2;
};

const sumAll = function(l, r) {
  if(typeof(l) != "number" || typeof(r) != "number") return "ERROR";
  if(l < 0 || r < 0) return "ERROR";

  if(l > r) 
    [l, r] = [r, l];

  return f(r) - f(l-1);
};

// Do not edit below this line
module.exports = sumAll;
