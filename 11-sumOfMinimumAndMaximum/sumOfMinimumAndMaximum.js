function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let small =10000000;
  let large =0;
  for(let i=0; i<nums.length;i++){
    if(small>nums[i]){
      small = nums[i];
    }
    if(large<nums[i]){
      large =nums[i];
    }
  }
  return small+large;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;