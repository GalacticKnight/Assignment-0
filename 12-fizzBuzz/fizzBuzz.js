function fizzBuzz(start, end) {
  // Insert code here;
  let temp= [];
  for (var i = start; i <= end; i++) {
    if (i % 3 == 0 && i % 5 != 0)
      temp.push("Fizz");
    else if (i % 3 != 0 && i % 5 == 0)
      temp.push("Buzz");
    else if (i % 3 == 0 && i % 5 == 0)
      temp.push("FizzBuzz");
    else { 
      temp.push(i);
    }
  }
  return temp;
}

// Do not edit this line;
module.exports = fizzBuzz;