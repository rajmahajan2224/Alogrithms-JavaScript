function mostDigit(num) {
  let maxDigit = 0;
  for(let i = 0; i < num.length; i++) {
      maxDigit = Math.max(maxDigit, digitCount(num[i]));
  }
  return maxDigit;
}