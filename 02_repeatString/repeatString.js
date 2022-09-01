const repeatString = function(word, repetitions) {
  if(repetitions < 0) {
    return "ERROR";
  }

  result = "";

  for(let i = 0; i < repetitions; i++)
    result += word;

  return result;
};

// Do not edit below this line
module.exports = repeatString;
