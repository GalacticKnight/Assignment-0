function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let counter = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target)
      counter++;
  }
  return counter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;