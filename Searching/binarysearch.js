function binarySearch(arr, n) {
  let top = 0;
  let bottom = arr.length - 1;
  let mid = Math.floor((top + bottom) / 2);

  while(arr[mid] !== n && top <= bottom) {
    if(n < arr[mid]) {
      mid = bottom - 1;
    }
    else {
      mid = top + 1;
    }
  }
  mid = Math.floor((top + bottom) / 2);
  if(arr[mid] === n) {
    return mid;
  }
  return -1;
}
console.log(binarySearch([1,2,4,5,6,7,8,9]),8);