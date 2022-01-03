function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let a =0;
  for(let i=0; i<nums.length;i++){
    if(nums[i]%2==1){
      a++;
    }
  }
  return a;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;