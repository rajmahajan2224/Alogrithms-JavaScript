// First Implementation

function bubbleSort(nums) {
  for(let i = 0; i <= nums.length; i++) {
    for(let j = 0; j < nums.length - i - 1; j++) {
      if(nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
    return nums;
  }
}
document.write(bubbleSort([6, 10, 12, 18, 1]));

// Second Implementation

function bubbleSort(nums) {
  for(let i = nums.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      if(nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
    return nums;
  }
}
document.write(bubbleSort([6, 10, 12, 18, 1]));

// Optimize Implementation for nearly sorted array

function bubbleSort(nums) {
  let noSwaps;
  for(let i = 0; i <= nums.length; i++) {
      noSwaps = true;
      for( let j = 0; j < nums.length - i - 1; j++) {
          console.log(nums, nums[j], nums[j+1]);
          if(nums[j] > nums[j + 1]) {
              let temp = nums[j];
              nums[j] = nums[j + 1];
              nums[j + 1] = temp;
              noSwaps = false;
          }
      }
      if(noSwaps) break;
  }
  return nums;
}
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));