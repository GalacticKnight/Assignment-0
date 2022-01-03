function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let a = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= start && nums[i] <= end){
      a++;
    }
  }
  return a;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;