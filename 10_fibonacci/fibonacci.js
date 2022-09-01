const fibonacci = function(idx) {
  idx = parseInt(idx);
  if(idx <= 0) return "OOPS";

  if(idx <= 2) return 1;

  let first = 1, second = 1;
  
  for(let i = 3; i <= idx; i++) {
    const next = first + second;
    first = second;
    second = next;
  }

  return second;
};

// Do not edit below this line
module.exports = fibonacci;
