

const caesar = function(phrase, number) {
  let result = '';

  const shiftCodeByNumber = function(code, number) {
    let newCode = code + number;
    newCode %= 26;
    if(newCode < 0) newCode += 26;

    return newCode;
  };

  const caesarOneCharacter = function(character, number) {
    if(character >= 'a' && character <= 'z') {
      let code = character.charCodeAt(0) - 'a'.charCodeAt(0);
      code = shiftCodeByNumber(code, number);
      return String.fromCharCode('a'.charCodeAt(0) + code);
    }
    else if(character >= 'A' && character <= 'Z') {
      let code = character.charCodeAt(0) - 'A'.charCodeAt(0);
      code = shiftCodeByNumber(code, number);
      return String.fromCharCode('A'.charCodeAt(0) + code);
    }
    return character;
  };

  result = '';
  for(let i = 0; i < phrase.length; i++) {
    result += caesarOneCharacter(phrase[i], number);
  }

  return result;
};

// Do not edit below this line
module.exports = caesar;
