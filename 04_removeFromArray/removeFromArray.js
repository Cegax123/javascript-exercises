const removeOneElement = function(arr, element) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === element) {
      arr.splice(i, 1);
    }
  }
};

const removeFromArray = function() {
  const toRemove = Array.from(arguments);
  let arr = toRemove[0];
  toRemove.shift();

  for(let i = 0; i < toRemove.length; i++) {
    removeOneElement(arr, toRemove[i]);
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
