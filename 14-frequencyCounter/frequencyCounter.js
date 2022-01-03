function frequencyCounter(word) {
  // Insert code here;
  let frequency = {};
  let char;
  for (let i = 0; i < word.length; i++) {
    char = word.charAt(i);
    if (frequency[char]){
      frequency[char] = frequency[char] + 1;
    }
    else{
      frequency[char] = 1;
    }
  }
    return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;