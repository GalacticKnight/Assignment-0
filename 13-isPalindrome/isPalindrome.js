function isPalindrome(word) {
  // Insert code here;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() != word[word.length - i - 1].toLowerCase()){
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;