// Pivot Function Implemenation

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;    
  }
  var pivot = arr[start];
  var swapIdx = start;
  for(let i = start + 1; i < arr.length; i++) {
      if(pivot > arr[i]) {
          swapIdx++;
          swap(arr, swapIdx, i);
      }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
console.log(pivot([4, 8, 2, 1, 9, 10, 5, 3]));