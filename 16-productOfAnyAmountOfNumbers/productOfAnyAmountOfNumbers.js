function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let result = 1;
  for (let i of args){
    result = result * i;
  }
  return result;
}

// Do not edit this line;
module.exports = resultOfAnyAmountOfNumbers;