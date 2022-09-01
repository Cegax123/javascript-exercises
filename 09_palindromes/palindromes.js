const cleanWord = function(word) {
  result = '';

  for(let i = 0; i < word.length; i++) {
    if(word[i] >= 'a' && word[i] <= 'z')
      result += word[i];
  }

  return result;
};

const palindromes = function (word) {
  word = cleanWord(word.toLowerCase());

  let isPalindrome = true;

  for(let i = 0; i < Math.floor(word.length/2); i++) {
    if(word[i] != word[word.length-1-i]) 
      isPalindrome = false;
  }

  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
