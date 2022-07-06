function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigit(num) {
  let maxDigit = 0;
  for(let i = 0; i < num.length; i++) {
      maxDigit = Math.max(maxDigit, digitCount(num[i]));
  }
  return maxDigit;
}

function radixSort(nums) {
  let maxDigitCount = mostDigit(nums);
  for(let i = 0; i < maxDigitCount; i++) {
      let digitBuckets = Array.from({length : 10}, () => []);
      for(let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
      }
      nums = [].concat(...digitBuckets);
  }
  return nums;
}
console.log(radixSort([22, 1, 99, 100, 256, 4520, 5000]));